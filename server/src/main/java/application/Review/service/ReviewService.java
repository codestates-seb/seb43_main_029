package application.Review.service;

import application.Review.dto.ReviewDto;
import application.Review.entity.ReviewLike;
import application.Review.repository.ReviewLikeRepository;
import application.exception.BusinessLogicException;
import application.exception.ExceptionCode;
import application.image.dto.ImageDto;
import application.image.entity.Image;
import application.image.mapper.ImageMapper;
import application.image.repository.ImageFileRepository;
import application.image.service.AwsS3Service;
import application.member.entity.Member;
import application.member.repository.MemberRepository;
import application.restaurant.entity.Restaurant;
import application.restaurant.repository.RestaurantRepository;
import application.Review.entity.Review;
import application.Review.entity.ReviewImage;
import application.Review.mapper.ReviewMapper;
import application.Review.repository.ReviewImageRepository;
import application.Review.repository.ReviewRepository;
import application.restaurant.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final ImageFileRepository imageFileRepository;
    private final MemberRepository memberRepository;
    private final ReviewImageRepository reviewImageRepository;
    private final RestaurantRepository restaurantRepository;
    private final ImageMapper imageMapper;
    private final ReviewMapper reviewMapper;
    private final AwsS3Service awsS3Service;
    private final RestaurantService restaurantService;
    private final ReviewLikeRepository reviewLikeRepository;
    private static String dirName = "review-images";


    //리뷰생성
    public Review createReview(Review review, List<ImageDto.ImageRequestDto> imageRequestDtoList) {
        Review saveReview = reviewRepository.save(review);
        List<ReviewImage> reviewImageList = new ArrayList<>();
        for (ImageDto.ImageRequestDto imageRequestDto : imageRequestDtoList) {
            Image image = imageMapper.imageRequestDtoToimage(imageRequestDto);
            Image savedImage = imageFileRepository.save(image);
            ReviewImage reviewImage = new ReviewImage();
            reviewImage.setImage(savedImage);
            reviewImage.setReview(saveReview);
            reviewImageRepository.save(reviewImage);
            reviewImageList.add(reviewImage);
        }
        updateRestaurantScore(restaurantService.findVerifiedRestaurant(review.getRestaurant().getRestaurantId()));
        saveReview.setReviewImageList(reviewImageList);
        return saveReview;
    }

    //리뷰 수정
    public Review updateReview(Review review) {
        Review findReview = findVerifiedReview(review.getReviewId());

        Member member = review.getMember();
        Optional<Member> verifiedMember = memberRepository.findById(member.getMemberId());
        if (!verifiedMember.isPresent() || !findReview.getMember().getMemberId().equals(member.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        }
        updateReviewInfo(review, findReview);
        updateRestaurantScore(findReview.getRestaurant());

        return reviewRepository.save(findReview);
    }

    private void updateReviewInfo(Review reviewToUpdate, Review existingReview) {
        Optional.ofNullable(reviewToUpdate.getScore()).ifPresent(existingReview::setScore);
        Optional.ofNullable(reviewToUpdate.getComment()).ifPresent(existingReview::setComment);
    }

    public Review findVerifiedReview(long reviewId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
        Review findReview = optionalReview.orElseThrow(()
                -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
        return findReview;
    }


    //이미지 추가
    public Review addReviewImages(Review review, List<ImageDto.ImageRequestDto> imageRequestDtoList) {
        List<ReviewImage> reviewImageList = review.getReviewImageList();
        for (ImageDto.ImageRequestDto imageRequestDto : imageRequestDtoList) {
            Image image = imageMapper.imageRequestDtoToimage(imageRequestDto);
            Image savedImage = imageFileRepository.save(image);
            ReviewImage reviewImage = new ReviewImage();
            reviewImage.setImage(savedImage);
            reviewImage.setReview(review);
            reviewImageRepository.save(reviewImage);
            reviewImageList.add(reviewImage);
        }
        review.setReviewImageList(reviewImageList);
        return reviewRepository.save(review);
    }

    //이미지 삭제
    public Review deleteReviewImages(Review review, List<Long> deleteImageList) {
        List<ReviewImage> reviewImageList = review.getReviewImageList();
        List<ReviewImage> deleteReviewImageList = new ArrayList<>();

        for (Long imageId : deleteImageList) {
            for (ReviewImage reviewImage : reviewImageList) {
                if (reviewImage.getImage().getImageId() == imageId) {
                    Image image = reviewImage.getImage();
                    awsS3Service.deleteFile(image.getUrl());
                    imageFileRepository.delete(image);
                    deleteReviewImageList.add(reviewImage);
                    break;
                }
            }
        }

        reviewImageList.removeAll(deleteReviewImageList);
        return reviewRepository.save(review);
    }

    //리뷰 삭제
    public void deleteReview(long reviewId, long memberId) {
        Review findReview = findVerifiedReview(reviewId);

        if (memberId != findReview.getMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_DELETING_POST);
        }

        List<ReviewImage> reviewImageList = findReview.getReviewImageList();
        for (ReviewImage reviewImage : reviewImageList) {
            Image image = reviewImage.getImage();
            awsS3Service.deleteFile(image.getUrl());
            imageFileRepository.delete(image);
            reviewImageRepository.delete(reviewImage);
        }
        reviewRepository.deleteById(reviewId);
        findReview.getRestaurant().getReviewList().remove(findReview);
        updateRestaurantScore(findReview.getRestaurant());
    }

    private void updateRestaurantScore(Restaurant restaurant) {
        List<Review> reviewList = restaurant.getReviewList();

        if (reviewList.isEmpty()) { //리뷰가 하나도 없는 경우 0.0점으로 계산
            restaurant.setScore(0.0);
        } else { // 리뷰 별점 평균값 계산
            double totalScore = reviewList.stream()
                    .mapToDouble(Review::getScore)
                    .sum();
            double averageScore = totalScore / reviewList.size();

            // 레스토랑 별점 갱신
            restaurant.setScore(averageScore);
        }

        // 레스토랑 별점 저장
        restaurantRepository.save(restaurant);
    }
    public ReviewDto.ReviewResponseDto getReview(Long reviewId, Long memberId) {
        Review review = reviewRepository.findById(reviewId).orElseThrow(
                () -> new RuntimeException(String.format("Review not found with id %d", reviewId)));
        Member member = memberRepository.findById(memberId).orElseThrow(
                () -> new RuntimeException(String.format("Member not found with id %d", memberId)));

        ReviewDto.ReviewResponseDto reviewDto = reviewMapper.reviewToReviewResponseDto(review);

        Optional<ReviewLike> reviewLike = reviewLikeRepository.findByReviewAndMember(review, member);
        reviewDto.setLikedByUser(reviewLike.isPresent());

        return reviewDto;
    }
}
