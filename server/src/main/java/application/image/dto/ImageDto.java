package application.image.dto;

import lombok.*;

public class ImageDto {
    @Getter
    @Setter
    @NoArgsConstructor
    public static class ImageRequestDto {
        private String imageName;
        private String url;
        private long imageSize;
        public ImageRequestDto(String imageName, String url, long imageSize) {
            this.imageName = imageName;
            this.url = url;
            this.imageSize = imageSize;
        }
    }
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    public static class ImageResponseDto {
        private long imageId;                // 이미지 파일 id
        private String imageName;        // 이미지 파일명
        private String url;      // 이미지 파일 경로
        private long imageSize;          // 이미지 파일 크기
        private String createdAt;
        private String modifiedAt;
    }
}
