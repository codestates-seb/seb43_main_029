package application.restaurant.service;

import application.exception.BusinessLogicException;
import application.exception.ExceptionCode;
import application.image.dto.ImageDto;
import application.image.entity.Image;
import application.image.mapper.ImageMapper;
import application.image.repository.ImageFileRepository;
import application.restaurant.entity.Restaurant;
import application.restaurant.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;
    private final ImageFileRepository imageFileRepository;
    private final ImageMapper imageMapper;

    //식당 생성하기
    public Restaurant createRestaurant(Restaurant restaurant, List<ImageDto.ImageRequestDto> imageRequestDtoList) {
        Restaurant saveRestaurant = restaurantRepository.save(restaurant);
        List<Image> imageList = new ArrayList<>();
        for (ImageDto.ImageRequestDto imageRequestDto : imageRequestDtoList) {
            Image image = imageMapper.imageRequestDtoToimage(imageRequestDto);
            image.setRestaurant(restaurant);
            imageList.add(imageFileRepository.save(image));
        }
        saveRestaurant.setImageList(imageList);
        return saveRestaurant;
    }

    //식당 조회
    public Restaurant getRestaurant(long restaurantId) {
        Restaurant findRestaurant = findVerifiedRestaurant(restaurantId);

        return findRestaurant;
    }


    public Restaurant findVerifiedRestaurant(long restaurantId) {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(restaurantId);
        Restaurant findRestaurant = optionalRestaurant.orElseThrow(()
                -> new BusinessLogicException(ExceptionCode.RESTAURANT_NOT_FOUND));
        return findRestaurant;
    }
}
