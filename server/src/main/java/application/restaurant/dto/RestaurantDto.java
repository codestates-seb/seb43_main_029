package application.restaurant.dto;

import application.image.dto.ImageDto;
import application.image.entity.Image;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

public class RestaurantDto {
    @NoArgsConstructor
    @Setter
    @Getter
    public static class RestaurantPostDto {
        private long memberId;
        @NotBlank(message = "식당 이름을 작성해야 합니다.")
        private String name;
        @NotBlank(message = "전화번호를 작성해야 합니다.")
        private String phone;
        @NotBlank(message = "주소를 작성해야 합니다.")
        private String address;
        @NotBlank(message = "메뉴를 작성해야 합니다.")
        private String menu;
        @NotBlank(message = "휴무일을 작성해야 합니다.")
        private String restDay;
        @NotBlank(message = "영업일을 작성해야 합니다.")
        private String businessDay;
    }
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    @Setter
    public static class RestaurantResponseDto {
        private long restaurantId;
        private long memberId;
        private String name;
        private String phone;
        private String address;
        private String menu;
        private String restDay;
        private String businessDay;
        private double score;
        private int bookmark;
        private List<ImageDto.ImageResponseDto> imageList = new ArrayList<>();
        private String createdAt;
        private String modifiedAt;
    }
}
