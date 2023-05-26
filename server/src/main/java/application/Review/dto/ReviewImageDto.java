package application.Review.dto;

import lombok.*;

public class ReviewImageDto {
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    @Setter
    public static class ReviewImageResponseDto {
        private long imageId;
        private String url;
    }
}