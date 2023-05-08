package application.restaurant.mapper;

import application.restaurant.dto.RestaurantDto;
import application.restaurant.entity.Restaurant;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {
    Restaurant restaurantPostDtoToRestaurant(RestaurantDto.RestaurantPostDto restaurantPostDto);
    //Restaurant restaurantPatchDto(RestaurantDto.RestaurantPatchDto restaurantPatchDto);
    RestaurantDto.RestaurantResponseDto restaurantToRestaurantResponseDto(Restaurant restaurant);
    List<RestaurantDto.RestaurantResponseDto> restaurantToResponseDto(List<Restaurant>restaurantList);
}
