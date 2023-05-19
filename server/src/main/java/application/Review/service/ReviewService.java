package application.Review.service;

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
import application.Review.dto.ReviewDto;
import application.Review.entity.Review;
import application.Review.entity.ReviewImage;
import application.Review.mapper.ReviewMapper;
import application.Review.repository.ReviewImageRepository;
import application.Review.repository.ReviewRepository;
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
    private static String dirName = "review-images";

    // Other methods...


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

        return reviewRepository.save(findReview);
    }

    private void updateReviewInfo(Review reviewToUpdate, Review existingReview) {
        Optional.ofNullable(reviewToUpdate.getScore()).ifPresent(existingReview::setScore);
        Optional.ofNullable(reviewToUpdate.getContent()).ifPresent(existingReview::setContent);
        // continue for all the fields you want to update
    }

    public Review findVerifiedReview(long reviewId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
        Review findReview = optionalReview.orElseThrow(()
                -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
        return findReview;
    }

    // Continue implementing similar methods for deleteReview, addReviewImages, deleteReviewImages, etc.

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
    }


}
