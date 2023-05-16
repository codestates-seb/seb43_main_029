package application.restaurant.mapper;

import application.restaurant.dto.RestaurantDto;
import application.restaurant.entity.Restaurant;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring",  uses = {RestaurantImageMapper.class, MenuMapper.class})
public interface RestaurantMapper {
    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "menuList", target = "menuList")
    @Mapping(source = "categoryId", target = "category.categoryId")
    Restaurant restaurantPostDtoToRestaurant(RestaurantDto.RestaurantPostDto restaurantPostDto);
    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "menuList", target = "menuList")
    @Mapping(source = "categoryId", target = "category.categoryId")
    Restaurant restaurantPatchDtoToRestaurant(RestaurantDto.RestaurantPatchDto restaurantPatchDto);
    @Mapping(source = "restaurantImageList", target = "imageList")
    @Mapping(source = "menuList", target = "menuList")
    @Mapping(source = "category.name", target = "categoryName")
    RestaurantDto.RestaurantResponseDto restaurantToRestaurantResponseDto(Restaurant restaurant);

    List<RestaurantDto.RestaurantSearchResponseDto> restaurantSearchListToDtoList(List<Restaurant> restaurantList);
}
