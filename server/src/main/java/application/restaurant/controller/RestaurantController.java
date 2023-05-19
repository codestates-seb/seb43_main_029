package application.restaurant.controller;

import application.dto.MultiResponseDto;
import application.dto.SingleResponseDto;
import application.exception.BusinessLogicException;
import application.exception.ExceptionCode;
import application.image.service.AwsS3Service;
import application.restaurant.dto.MenuDto;
import application.restaurant.dto.RestaurantDto;
import application.restaurant.entity.Restaurant;
import application.restaurant.mapper.MenuMapper;
import application.restaurant.mapper.RestaurantMapper;
import application.restaurant.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
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
    private final MenuMapper menuMapper;
    private static String dirName = "restaurant-images";

    @PostMapping //식당 생성
    public ResponseEntity postRestaurant(@Valid @RequestPart RestaurantDto.RestaurantPostDto restaurantPostDto,
                                         @RequestPart List<MultipartFile> multipartFile) {
        Restaurant restaurant = mapper.restaurantPostDtoToRestaurant(restaurantPostDto);
        Restaurant createRestaurant = restaurantService.createRestaurant(restaurant,
                awsS3Service.uploadFile(multipartFile, dirName));
        RestaurantDto.RestaurantResponseDto response = mapper.restaurantToRestaurantResponseDto(createRestaurant);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    @PatchMapping("/{restaurant-id}") //식당 수정
    public ResponseEntity patchRestaurant(@PathVariable("restaurant-id") @Positive long restaurantId,
                                          @RequestPart RestaurantDto.RestaurantPatchDto restaurantPatchDto,
                                          @RequestPart(required = false) List<MultipartFile> multipartFile,
                                          @RequestPart(required = false) List<Long> deleteImageList,
                                          @RequestPart(required = false) List<Long> deleteMenuList,
                                          @RequestPart(required = false) List<MenuDto.MenuPostDto> newMenuList) {
        Restaurant restaurant = mapper.restaurantPatchDtoToRestaurant(restaurantPatchDto);
        restaurant.setRestaurantId(restaurantId);
        long categoryId = restaurantPatchDto.getCategoryId();
        Restaurant updateRestaurant = restaurantService.updateRestaurant(restaurant, categoryId);
        if(deleteImageList != null){
            updateRestaurant = restaurantService.deleteRestaurantImages(updateRestaurant, deleteImageList);
        }
        if(multipartFile != null){
            updateRestaurant = restaurantService.addRestaurantImages(updateRestaurant,
                                                                    awsS3Service.uploadFile(multipartFile, dirName));
        }
        if(deleteMenuList != null){
            updateRestaurant = restaurantService.deleteRestaurantMenus(updateRestaurant, deleteMenuList);
        }
        if(newMenuList != null){
            updateRestaurant = restaurantService.addRestaurantMenus(updateRestaurant, newMenuList);
        }
        RestaurantDto.RestaurantResponseDto response = mapper.restaurantToRestaurantResponseDto(updateRestaurant);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping("/{restaurant-id}") //식당 상세 조회
    public ResponseEntity getRestaurant(@PathVariable("restaurant-id") @Positive long restaurantId) {
        Restaurant restaurant = restaurantService.getRestaurant(restaurantId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.restaurantToRestaurantResponseDto(restaurant)), HttpStatus.OK
        );
    }

    @GetMapping("/today")
    public ResponseEntity today(){
        List<Restaurant> restaurantList = restaurantService.getRestaurants();

        List<RestaurantDto.RestaurantSearchResponseDto> responseDtoList = mapper.restaurantSearchListToDtoList(restaurantList);
        responseDtoList = restaurantService.setRestaurant(responseDtoList);


        return new ResponseEntity<>(
                new SingleResponseDto<>(responseDtoList), HttpStatus.OK
        );
    }


    @GetMapping("/search") //식당 검색
    public ResponseEntity getSearchRestaurant(@RequestParam String keyword,
                                          @PageableDefault(page = 1, size = 15) Pageable pageable) {
        //검색어가 두글자 이상이 아닌경우
        if (keyword == null || keyword.trim().isEmpty() || keyword.length() < 2) {
            throw new BusinessLogicException(ExceptionCode.INVALID_SEARCH_CONDITION);
        }
        Page<Restaurant> restaurantPage = restaurantService.searchRestaurants(keyword, pageable);
        List<Restaurant> restaurantList = restaurantPage.getContent();
        List<RestaurantDto.RestaurantSearchResponseDto> responseDtoList = mapper.restaurantSearchListToDtoList(restaurantList);
        responseDtoList = restaurantService.setRestaurant(responseDtoList);
        return new ResponseEntity<>(
                new MultiResponseDto<>(responseDtoList, restaurantPage), HttpStatus.OK
        );
    }

    @DeleteMapping("/{member-id}/{restaurant-id}") //식당 삭제
    public ResponseEntity deleteRestaurant(@PathVariable("restaurant-id") @Positive long restaurantId,
                                            @PathVariable("member-id") @Positive long memberId) {
        restaurantService.deleteRestaurant(restaurantId, memberId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
