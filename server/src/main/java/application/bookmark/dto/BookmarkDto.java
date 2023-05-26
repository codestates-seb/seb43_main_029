package application.bookmark.dto;

import lombok.*;

public class BookmarkDto {
    @NoArgsConstructor
    @Setter
    @Getter
    public static class BookmarkPostDto {
        private long memberId;
        private long restaurantId;
    }
    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    public static class BookmarkHeartResponseDto {
        String heart;
    }
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    @Setter
    public static class BookmarkResponseDto {
        private long bookmarkId;
        private long restaurantId;
        private long memberId;
        private String name;
        private String url;
        private String createdAt;
    }
}
