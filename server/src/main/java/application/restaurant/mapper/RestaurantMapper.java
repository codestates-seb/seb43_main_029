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
    Restaurant restaurantPostDtoToRestaurant(RestaurantDto.RestaurantPostDto restaurantPostDto);
    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "menuList", target = "menuList")
    Restaurant restaurantPatchDtoToRestaurant(RestaurantDto.RestaurantPatchDto restaurantPatchDto);
    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "restaurantImageList", target = "imageList")
    @Mapping(source = "menuList", target = "menuList")
    RestaurantDto.RestaurantResponseDto restaurantToRestaurantResponseDto(Restaurant restaurant);

    List<RestaurantDto.RestaurantSearchResponseDto> restaurantSearchListToDtoList(List<Restaurant> restaurantList);
}
