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
import application.restaurant.entity.Menu;
import application.restaurant.entity.Restaurant;
import application.restaurant.entity.RestaurantImage;
import application.restaurant.repository.MenuRepository;
import application.restaurant.repository.RestaurantImageRepository;
import application.restaurant.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;
    private final ImageFileRepository imageFileRepository;
    private final ImageMapper imageMapper;
    private final AwsS3Service awsS3Service;
    private final MemberRepository memberRepository;
    private final RestaurantImageRepository restaurantImageRepository;
    private final MenuRepository menuRepository;

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

    //식당 정보 수정 (텍스트 + 기존 이미지 + 신규 이미지)
    public Restaurant updateRestaurant(Restaurant restaurant, List<Long> saveImageList,
                                       List<ImageDto.ImageRequestDto> imageRequestDtoList) {
        Restaurant findRestaurant = findVerifiedRestaurant(restaurant.getRestaurantId());

        Member member = restaurant.getMember();
        Optional<Member> verifiedMember = memberRepository.findById(member.getMemberId());
        if (!verifiedMember.isPresent() || !findRestaurant.getMember().getMemberId().equals(member.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        }
        // 1. 기존 이미지 중에서 삭제해야 할 이미지 삭제
        List<RestaurantImage> restaurantImageList = findRestaurant.getRestaurantImageList();
        List<RestaurantImage> deleteRestaurantImageList = new ArrayList<>();
        restaurantImageList.stream()
                .filter(restaurantImage -> !saveImageList.contains(restaurantImage.getImage().getImageId()))
                .forEach(restaurantImage -> {
                    imageFileRepository.delete(restaurantImage.getImage());
                    awsS3Service.deleteFile(restaurantImage.getImage().getUrl());
                    deleteRestaurantImageList.add(restaurantImage);
                });
        restaurantImageList.removeAll(deleteRestaurantImageList);

        // 2. 새로운 이미지들 저장
        List<RestaurantImage> newRestaurantImageList = new ArrayList<>();
        for (ImageDto.ImageRequestDto imageRequestDto : imageRequestDtoList) {
            Image image = imageMapper.imageRequestDtoToimage(imageRequestDto);
            Image savedImage = imageFileRepository.save(image);
            RestaurantImage restaurantImage = new RestaurantImage();
            restaurantImage.setImage(savedImage);
            restaurantImage.setRestaurant(findRestaurant);
            restaurantImageRepository.save(restaurantImage);
            newRestaurantImageList.add(restaurantImage);
        }

        // 3. 새로운 이미지들을 포함하여 식당 정보 저장 및 반환
        restaurantImageList.addAll(newRestaurantImageList);
        findRestaurant.setRestaurantImageList(restaurantImageList);

        // 4. 텍스트 정보 수정
        updateRestaurantInfo(restaurant, findRestaurant);

        return restaurantRepository.save(findRestaurant);
    }


    //식당 정보 수정 (텍스트 + 신규 이미지)
    public Restaurant updateRestaurant(Restaurant restaurant,
                                       List<ImageDto.ImageRequestDto> imageRequestDtoList) {
        Restaurant findRestaurant = findVerifiedRestaurant(restaurant.getRestaurantId());

        Member member = restaurant.getMember();
        Optional<Member> verifiedMember = memberRepository.findById(member.getMemberId());
        if (!verifiedMember.isPresent() || !findRestaurant.getMember().getMemberId().equals(member.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        }
        // 1. 새로운 이미지들 저장
        List<RestaurantImage> restaurantimageList = findRestaurant.getRestaurantImageList();
        List<RestaurantImage> newRestaurantImageList = new ArrayList<>();
        for (ImageDto.ImageRequestDto imageRequestDto : imageRequestDtoList) {
            Image image = imageMapper.imageRequestDtoToimage(imageRequestDto);
            Image savedImage = imageFileRepository.save(image);
            RestaurantImage restaurantImage = new RestaurantImage();
            restaurantImage.setImage(savedImage);
            restaurantImage.setRestaurant(findRestaurant);
            restaurantImageRepository.save(restaurantImage);
            newRestaurantImageList.add(restaurantImage);
        }
        // 2. 새로운 이미지들을 포함하여 식당 정보 저장 및 반환
        restaurantimageList.addAll(newRestaurantImageList);
        findRestaurant.setRestaurantImageList(restaurantimageList);

        // 3. 텍스트 정보 수정
        updateRestaurantInfo(restaurant, findRestaurant);

        return restaurantRepository.save(findRestaurant);
    }

    //식당 정보 수정 (텍스트만)
    public Restaurant updateRestaurant(Restaurant restaurant) {
        Restaurant findRestaurant = findVerifiedRestaurant(restaurant.getRestaurantId());

        Member member = restaurant.getMember();
        Optional<Member> verifiedMember = memberRepository.findById(member.getMemberId());
        if (!verifiedMember.isPresent() || !findRestaurant.getMember().getMemberId().equals(member.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        }
        // 1. 텍스트 정보 수정
        updateRestaurantInfo(restaurant, findRestaurant);

        return restaurantRepository.save(findRestaurant);
    }

    //식당 조회
    public Restaurant getRestaurant(long restaurantId) {
        Restaurant findRestaurant = findVerifiedRestaurant(restaurantId);

        return findRestaurant;
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

    public Restaurant findVerifiedRestaurant(long restaurantId) {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(restaurantId);
        Restaurant findRestaurant = optionalRestaurant.orElseThrow(()
                -> new BusinessLogicException(ExceptionCode.RESTAURANT_NOT_FOUND));
        return findRestaurant;
    }
}
