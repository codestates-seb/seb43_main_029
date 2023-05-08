package application.restaurant.controller;

import application.dto.SingleResponseDto;
import application.image.service.AwsS3Service;
import application.restaurant.dto.RestaurantDto;
import application.restaurant.entity.Restaurant;
import application.restaurant.mapper.RestaurantMapper;
import application.restaurant.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/restaurant")
public class RestaurantController {
    private final RestaurantService restaurantService;
    private final AwsS3Service awsS3Service;
    private final RestaurantMapper mapper;
    private static String dirName = "restaurant-images";

    @PostMapping
    public ResponseEntity postRestaurant(@Valid @RequestPart RestaurantDto.RestaurantPostDto restaurantPostDto,
                                         @RequestPart List<MultipartFile> multipartFile) {
        Restaurant restaurant = mapper.restaurantPostDtoToRestaurant(restaurantPostDto);
        Restaurant createRestaurant = restaurantService.createRestaurant(restaurant, awsS3Service.uploadFile(multipartFile, dirName));
        RestaurantDto.RestaurantResponseDto responseDto = mapper.restaurantToRestaurantResponseDto(createRestaurant);
        return new ResponseEntity(responseDto, HttpStatus.CREATED);
    }

    @GetMapping("/{restaurant_id}")
    public ResponseEntity getRestaurant(@PathVariable("restaurant_id") @Positive long restaurantId) {
        Restaurant restaurant = restaurantService.getRestaurant(restaurantId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.restaurantToRestaurantResponseDto(restaurant)), HttpStatus.OK
        );
    }
}
