package application.restaurant.dto;

import lombok.*;

public class RestaurantImageDto {
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    @Setter
    public static class RestaurantImageResponseDto {
        private long imageId;
        private String url;
    }
}
