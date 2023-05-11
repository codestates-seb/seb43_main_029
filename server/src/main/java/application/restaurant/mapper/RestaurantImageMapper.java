package application.restaurant.mapper;

import application.restaurant.dto.RestaurantImageDto;
import application.restaurant.entity.RestaurantImage;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RestaurantImageMapper {
    @Mapping(target = "imageId", source = "restaurantImage.image.imageId")
    @Mapping(target = "url", source = "restaurantImage.image.url")
    RestaurantImageDto.RestaurantImageResponseDto restaurantImageToDto(RestaurantImage restaurantImage);

    List<RestaurantImageDto.RestaurantImageResponseDto> restaurantImageListToDtoList(List<RestaurantImage> restaurantImageList);
}

