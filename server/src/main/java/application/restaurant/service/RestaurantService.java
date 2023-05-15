package application.restaurant.service;

import application.exception.BusinessLogicException;
import application.exception.ExceptionCode;
import application.image.dto.ImageDto;
import application.image.entity.Image;
import application.image.mapper.ImageMapper;
import application.image.repository.ImageFileRepository;
import application.image.service.AwsS3Service;
import application.member.entity.Member;
import application.member.repository.MemberRepository;
import application.restaurant.dto.MenuDto;
import application.restaurant.dto.RestaurantDto;
import application.restaurant.entity.Menu;
import application.restaurant.entity.Restaurant;
import application.restaurant.entity.RestaurantImage;
import application.restaurant.mapper.MenuMapper;
import application.restaurant.repository.MenuRepository;
import application.restaurant.repository.RestaurantImageRepository;
import application.restaurant.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
@RequiredArgsConstructor
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;
    private final ImageFileRepository imageFileRepository;
    private final MemberRepository memberRepository;
    private final RestaurantImageRepository restaurantImageRepository;
    private final MenuRepository menuRepository;
    private final ImageMapper imageMapper;
    private final MenuMapper menuMapper;
    private final AwsS3Service awsS3Service;
    private static String dirName = "restaurant-images";

    //식당 생성하기
    public Restaurant createRestaurant(Restaurant restaurant, List<ImageDto.ImageRequestDto> imageRequestDtoList) {
        Restaurant saveRestaurant = restaurantRepository.save(restaurant);
        //메뉴 저장
        List<Menu> menuList = restaurant.getMenuList();
        for (Menu menu : menuList) {
            menu.setRestaurant(saveRestaurant);
        }
        saveRestaurant.setMenuList(menuList);
        List<RestaurantImage> restaurantImageList = new ArrayList<>();
        for (ImageDto.ImageRequestDto imageRequestDto : imageRequestDtoList) {
            Image image = imageMapper.imageRequestDtoToimage(imageRequestDto);
            Image savedImage = imageFileRepository.save(image);
            RestaurantImage restaurantImage = new RestaurantImage();
            restaurantImage.setImage(savedImage);
            restaurantImage.setRestaurant(saveRestaurant);
            restaurantImageRepository.save(restaurantImage);
            restaurantImageList.add(restaurantImage);
        }
        saveRestaurant.setRestaurantImageList(restaurantImageList);
        return saveRestaurant;
    }
    //식당 정보 수정 (텍스트만)
    public Restaurant updateRestaurant(Restaurant restaurant) {
        Restaurant findRestaurant = findVerifiedRestaurant(restaurant.getRestaurantId());

        Member member = restaurant.getMember();
        Optional<Member> verifiedMember = memberRepository.findById(member.getMemberId());
        if (!verifiedMember.isPresent() || !findRestaurant.getMember().getMemberId().equals(member.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        }
        updateRestaurantInfo(restaurant, findRestaurant);

        return restaurantRepository.save(findRestaurant);
    }

    // 식당 이미지 추가
    public Restaurant addRestaurantImages(Restaurant restaurant, List<ImageDto.ImageRequestDto> imageRequestDtoList) {
        List<RestaurantImage> restaurantimageList = restaurant.getRestaurantImageList();
        List<RestaurantImage> newRestaurantImageList = new ArrayList<>();
        for (ImageDto.ImageRequestDto imageRequestDto : imageRequestDtoList) {
            Image image = imageMapper.imageRequestDtoToimage(imageRequestDto);
            Image savedImage = imageFileRepository.save(image);
            RestaurantImage restaurantImage = new RestaurantImage();
            restaurantImage.setImage(savedImage);
            restaurantImage.setRestaurant(restaurant);
            restaurantImageRepository.save(restaurantImage);
            newRestaurantImageList.add(restaurantImage);
        }

        restaurant.setRestaurantImageList(restaurantimageList);
        return restaurantRepository.save(restaurant);
    }

    // 식당 이미지 삭제
    public Restaurant deleteRestaurantImages(Restaurant restaurant, List<Long> deleteImageList) {
        List<RestaurantImage> restaurantImageList = restaurant.getRestaurantImageList();
        List<RestaurantImage> deleteRestaurantImageList = new ArrayList<>();

        for (Long imageId : deleteImageList) {
            for (RestaurantImage restaurantImage : restaurantImageList) {
                if (restaurantImage.getImage().getImageId() == imageId) {
                    Image image = restaurantImage.getImage();
                    awsS3Service.deleteFile(image.getUrl());
                    imageFileRepository.delete(image);
                    deleteRestaurantImageList.add(restaurantImage);
                    break;
                }
            }
        }

        restaurantImageList.removeAll(deleteRestaurantImageList);
        return restaurantRepository.save(restaurant);
    }

    // 식당 메뉴 추가
    public Restaurant addRestaurantMenus(Restaurant restaurant, List<MenuDto.MenuPostDto> newMenuList) {
        List<Menu> menuList = restaurant.getMenuList();

        for (MenuDto.MenuPostDto menuPostDto : newMenuList) {
            Menu menu = menuMapper.menuPostDtoToMenu(menuPostDto);
            menu.setRestaurant(restaurant);
            menuList.add(menu);
        }

        restaurant.setMenuList(menuList);
        return restaurantRepository.save(restaurant);
    }

    // 식당 메뉴 삭제
    public Restaurant deleteRestaurantMenus(Restaurant restaurant, List<Long> deleteMenuList) {
        List<Menu> menuList = restaurant.getMenuList();
        List<Menu> deleteMenuObjList = new ArrayList<>();

        for (Long menuId : deleteMenuList) {
            for (Menu menu : menuList) {
                if (menu.getMenuId() == menuId) {
                    deleteMenuObjList.add(menu);
                    break;
                }
            }
        }

        menuList.removeAll(deleteMenuObjList);
        return restaurantRepository.save(restaurant);
    }

    //식당 상세 조회
    public Restaurant getRestaurant(long restaurantId) {
        Restaurant findRestaurant = findVerifiedRestaurant(restaurantId);

        return findRestaurant;
    }

    //식당 검색
    public Page<Restaurant> searchRestaurants(String keyword, Pageable pageable) {
        Pageable pageRequest = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(), Sort.by("score").descending());
        return restaurantRepository.searchByKeyword(keyword, pageRequest);
    }

    //식당 삭제
    public void deleteRestaurant(long restaurantId, long memberId) {
        Restaurant findRestaurant = findVerifiedRestaurant(restaurantId);

        if (memberId != findRestaurant.getMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_DELETING_POST);
        }

        List<RestaurantImage> restaurantImageList = findRestaurant.getRestaurantImageList();
        for (RestaurantImage restaurantImage : restaurantImageList) {
            Image image = restaurantImage.getImage();
            awsS3Service.deleteFile(image.getUrl());
            imageFileRepository.delete(image);
            restaurantImageRepository.delete(restaurantImage);
        }

        restaurantRepository.deleteById(restaurantId);
    }

    //식당 텍스트 수정 로직
    private void updateRestaurantInfo(Restaurant restaurantToUpdate, Restaurant existingRestaurant) {
        List<Menu> existingMenuList = existingRestaurant.getMenuList();
        List<Menu> updatedMenuList = restaurantToUpdate.getMenuList();

        for (Menu updatedMenu : updatedMenuList) {
            for (Menu existingMenu : existingMenuList) {
                if (existingMenu.getMenuId() == updatedMenu.getMenuId()) {
                    existingMenu.setName(updatedMenu.getName());
                    existingMenu.setPrice(updatedMenu.getPrice());
                    menuRepository.save(existingMenu);
                    // 필요한 속성들을 수정하도록 반복합니다.
                    break;
                }
            }
        }

        Optional.ofNullable(restaurantToUpdate.getName()).ifPresent(existingRestaurant::setName);
        Optional.ofNullable(restaurantToUpdate.getPhone()).ifPresent(existingRestaurant::setPhone);
        Optional.ofNullable(restaurantToUpdate.getAddress()).ifPresent(existingRestaurant::setAddress);
        Optional.ofNullable(restaurantToUpdate.getRestDay()).ifPresent(existingRestaurant::setRestDay);
        Optional.ofNullable(restaurantToUpdate.getBusinessDay()).ifPresent(existingRestaurant::setBusinessDay);
    }

    public List<RestaurantDto.RestaurantSearchResponseDto> setRestaurant(List<RestaurantDto.RestaurantSearchResponseDto> restaurantSearchResponseDtoList){
        for(RestaurantDto.RestaurantSearchResponseDto restaurantSearchResponseDto : restaurantSearchResponseDtoList){
            Restaurant restaurant = findVerifiedRestaurant(restaurantSearchResponseDto.getRestaurantId());
            //주소 앞글자 2글자만 location값에 할당
            String address = restaurant.getAddress();
            String location = address.substring(0, Math.min(address.length(), 2));
            restaurantSearchResponseDto.setLocation(location);
            //식당의 가장 첫번째 이미지의 url값을 할당
            restaurantSearchResponseDto.setUrl(restaurant.getRestaurantImageList()
                    .stream()
                    .findFirst()
                    .map(restaurantImage -> restaurantImage.getImage().getUrl())
                    .orElse(null));
        }

        return restaurantSearchResponseDtoList;
    }

    public Restaurant findVerifiedRestaurant(long restaurantId) {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(restaurantId);
        Restaurant findRestaurant = optionalRestaurant.orElseThrow(()
                -> new BusinessLogicException(ExceptionCode.RESTAURANT_NOT_FOUND));
        return findRestaurant;
    }
}
