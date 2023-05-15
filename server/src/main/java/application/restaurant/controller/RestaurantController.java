package application.restaurant.controller;

import application.dto.SingleResponseDto;
import application.image.service.AwsS3Service;
import application.restaurant.dto.RestaurantDto;
import application.restaurant.entity.Restaurant;
import application.restaurant.mapper.MenuMapper;
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
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/restaurant")
public class RestaurantController {
    private final RestaurantService restaurantService;
    private final AwsS3Service awsS3Service;
    private final RestaurantMapper mapper;
    private final MenuMapper menuMapper;
    private static String dirName = "restaurant-images";

    @PostMapping
    public ResponseEntity postRestaurant(@Valid @RequestPart RestaurantDto.RestaurantPostDto restaurantPostDto,
                                         @RequestPart List<MultipartFile> multipartFile) {
        Restaurant restaurant = mapper.restaurantPostDtoToRestaurant(restaurantPostDto);
        Restaurant createRestaurant = restaurantService.createRestaurant(restaurant,
                awsS3Service.uploadFile(multipartFile, dirName));
        RestaurantDto.RestaurantResponseDto response = mapper.restaurantToRestaurantResponseDto(createRestaurant);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    @PatchMapping("/{restaurant-id}")
    public ResponseEntity pacthRestaurant(@PathVariable("restaurant-id") @Positive long restaurantId,
                                         @Valid @RequestPart RestaurantDto.RestaurantPatchDto restaurantPatchDto,
                                         @RequestPart(required = false) List<MultipartFile> multipartFile,
                                          @RequestParam(required = false) List<Long> saveImageList) {
        Restaurant restaurant = mapper.restaurantPatchDtoToRestaurant(restaurantPatchDto);
        restaurant.setRestaurantId(restaurantId);
        Restaurant updateRestaurant;
        if(multipartFile != null && saveImageList != null){
            updateRestaurant = restaurantService.updateRestaurant(restaurant, saveImageList,
                                                                    awsS3Service.uploadFile(multipartFile, dirName));
        }else if(multipartFile != null){
            updateRestaurant = restaurantService.updateRestaurant(restaurant, awsS3Service.uploadFile(multipartFile, dirName));
        }else{
            updateRestaurant = restaurantService.updateRestaurant(restaurant);
        }
        RestaurantDto.RestaurantResponseDto response = mapper.restaurantToRestaurantResponseDto(updateRestaurant);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping("/{restaurant-id}")
    public ResponseEntity getRestaurant(@PathVariable("restaurant-id") @Positive long restaurantId) {
        Restaurant restaurant = restaurantService.getRestaurant(restaurantId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.restaurantToRestaurantResponseDto(restaurant)), HttpStatus.OK
        );
    }

    @DeleteMapping("/{member-id}/{restaurant-id}")
    public ResponseEntity deleteRestaurant(@PathVariable("restaurant-id") @Positive long restaurantId,
                                            @PathVariable("member-id") @Positive long memberId) {
        restaurantService.deleteRestaurant(restaurantId, memberId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
