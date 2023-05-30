package application.Review.dto;

import application.Review.entity.Review;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

public class ReviewDto {
    @NoArgsConstructor
    @Setter
    @Getter
    public static class ReviewPostDto {
        private Long memberId;
        private Long restaurantId;
        @NotBlank(message = "리뷰 내용을 작성해야 합니다.")
        private String comment;
        @NotNull(message = "별점을 부여해야 합니다.")
        private double score;
    }

    @NoArgsConstructor
    @Setter
    @Getter
    public static class ReviewPatchDto {
        private long reviewId;
        private long memberId;
        private long restaurantId;
        @NotBlank(message = "리뷰 내용을 작성해야 합니다.")
        private String comment;
        @NotNull(message = "별점을 부여해야 합니다.")
        private double score;
    }

    @NoArgsConstructor
    @Setter
    @Getter
    public static class ReviewLikeDto {
        private Long memberId;
        private Long reviewId;
    }

    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    @Setter
    public static class ReviewResponseDto {
        private long reviewId;
        private long memberId;
        private long restaurantId;
        private String restaurantName;
        private String comment;
        private double score;
        private String createdAt;
        private String modifiedAt;
        private List<ReviewImageDto.ReviewImageResponseDto> imageList = new ArrayList<>();
        private long likeCount; // 리뷰에 대한 좋아요 수
        private boolean likedByUser; // 현재 사용자가 리뷰를 좋아했는지 여부
    }
}