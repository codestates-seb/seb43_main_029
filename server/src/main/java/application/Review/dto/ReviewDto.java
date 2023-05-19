package application.Review.dto;

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
        private long memberId;
        private long restaurantId;
        @NotBlank(message = "리뷰 내용을 작성해야 합니다.")
        private String content;
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
        private String content;
        @NotNull(message = "별점을 부여해야 합니다.")
        private double score;

    }

    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    @Setter
    public static class ReviewResponseDto {
        private long reviewId;
        private long memberId;
        private String content;
        private double score;
        private String createdAt;
        private String modifiedAt;
        private List<ReviewImageDto.ReviewImageResponseDto> imageList = new ArrayList<>();
    }

}