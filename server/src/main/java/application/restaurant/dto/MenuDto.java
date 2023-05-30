package application.restaurant.dto;

import lombok.*;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

public class MenuDto {
    @NoArgsConstructor
    @Setter
    @Getter
    public static class MenuPostDto {
        @NotBlank(message = "메뉴 이름을 작성해야 합니다.")
        private String name;
        @NotNull(message = "가격을 작성해야 합니다.")
        @Min(value = 0, message = "가격은 0 이상이어야 합니다.")
        private int price;
    }
    @NoArgsConstructor
    @Setter
    @Getter
    public static class MenuPatchDto {
        private long menuId;
        @NotBlank(message = "메뉴 이름을 작성해야 합니다.")
        private String name;
        @NotNull(message = "가격을 작성해야 합니다.")
        @Min(value = 0, message = "가격은 0 이상이어야 합니다.")
        private int price;
    }
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Getter
    @Setter
    public static class MenuResponseDto {
        private long menuId;
        @NotBlank(message = "메뉴 이름을 작성해야 합니다.")
        private String name;
        @NotNull(message = "가격을 작성해야 합니다.")
        @Min(value = 0, message = "가격은 0 이상이어야 합니다.")
        private int price;
    }
}
