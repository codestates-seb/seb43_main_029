package application.Review.controller;

import application.dto.SingleResponseDto;
import application.Review.dto.ReviewDto;
import application.Review.entity.Review;
import application.Review.mapper.ReviewMapper;
import application.Review.service.ReviewService;
import application.Review.service.ReviewLikeService;
import application.image.service.AwsS3Service;
import application.image.dto.ImageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/reviews")
public class ReviewController {
    private final ReviewService reviewService;
    private final ReviewLikeService reviewLikeService;
    private final AwsS3Service awsS3Service;
    private final ReviewMapper mapper;
    private static String dirName = "review-images";

    @PostMapping // 리뷰 생성
    public ResponseEntity postReview(@Valid @RequestPart ReviewDto.ReviewPostDto reviewPostDto,
                                     @RequestPart List<MultipartFile> multipartFile) {
        Review review = mapper.reviewPostDtoToReview(reviewPostDto);
        List<ImageDto.ImageRequestDto> imageRequestDtos = awsS3Service.uploadFile(multipartFile, dirName);
        Review createdReview = reviewService.createReview(review, imageRequestDtos);
        ReviewDto.ReviewResponseDto response = mapper.reviewToReviewResponseDto(createdReview);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    @PatchMapping("/{review-id}") // 리뷰 수정
    public ResponseEntity patchReview(@PathVariable("review-id") @Positive long reviewId,
                                      @RequestPart ReviewDto.ReviewPatchDto reviewPatchDto,
                                      @RequestPart(required = false) List<MultipartFile> multipartFile,
                                      @RequestParam(required = false) List<Long> deleteImageList) {
        Review review = mapper.reviewPatchDtoToReview(reviewPatchDto);
        review.setReviewId(reviewId);
        Review updatedReview = reviewService.updateReview(review);
        if (deleteImageList != null) {
            updatedReview = reviewService.deleteReviewImages(updatedReview, deleteImageList);
        }
        if (multipartFile != null) {
            List<ImageDto.ImageRequestDto> imageRequestDtos = awsS3Service.uploadFile(multipartFile, dirName);
            updatedReview = reviewService.addReviewImages(updatedReview, imageRequestDtos);
        }
        ReviewDto.ReviewResponseDto response = mapper.reviewToReviewResponseDto(updatedReview);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping("/{review-id}") // 리뷰 상세정보
    public ResponseEntity getReview(@PathVariable("review-id") @Positive long reviewId) {
        Review review = reviewService.findVerifiedReview(reviewId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.reviewToReviewResponseDto(review)), HttpStatus.OK
        );
    }

    @DeleteMapping("/{review-id}/{member-id}") // 리뷰 삭제
    public ResponseEntity deleteReview(@PathVariable("review-id") @Positive long reviewId,
                                       @PathVariable("member-id") @Positive long memberId) {
        reviewService.deleteReview(reviewId, memberId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{review-id}/like/{member-id}") // 리뷰 좋아요
    public ResponseEntity likeReview(@PathVariable("review-id") @Positive long reviewId,
                                     @PathVariable("member-id") @Positive long memberId) {
        reviewLikeService.addLikeToReview(reviewId, memberId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/{review-id}/like/{member-id}") // 리뷰 좋아요 삭제
    public ResponseEntity unlikeReview(@PathVariable("review-id") @Positive long reviewId,
                                       @PathVariable("member-id") @Positive long memberId) {
        reviewLikeService.removeLikeFromReview(reviewId, memberId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/restaurant/{restaurantId}") // 리뷰 조회(특정식당)
    public ResponseEntity<List<ReviewDto.ReviewResponseDto>> getReviewsByRestaurantId(@PathVariable Long restaurantId) {
        List<ReviewDto.ReviewResponseDto> reviewDtoList = reviewService.getReviewsByRestaurantId(restaurantId);
        return new ResponseEntity<>(reviewDtoList, HttpStatus.OK);
    }

    @GetMapping("/member/{memberId}")   //리뷰 조회(특정 유저)
    public ResponseEntity<List<ReviewDto.ReviewResponseDto>> getReviewsByMMember_MemberId(@PathVariable Long memberId) {
        List<ReviewDto.ReviewResponseDto> reviewDtoList = reviewService.getReviewsByMember_MemberId(memberId);
        return new ResponseEntity<>(reviewDtoList, HttpStatus.OK);
    }

    @GetMapping("/mostLiked") // 모든 리뷰 내림차순으로 정렬해서 조회
    public ResponseEntity<List<ReviewDto.ReviewResponseDto>> getMostLikedReviews() {
        List<Review> reviews = reviewService.getMostLikedReviews();
        List<ReviewDto.ReviewResponseDto> reviewResponseDtos = reviews.stream()
                .map(mapper::reviewToReviewResponseDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(reviewResponseDtos);
    }
}