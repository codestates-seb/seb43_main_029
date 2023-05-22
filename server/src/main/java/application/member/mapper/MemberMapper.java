package application.member.mapper;

import application.member.dto.MemberDto;
import application.member.entity.Member;
import application.restaurant.dto.RestaurantDto;
import application.restaurant.dto.RestaurantImageDto;
import application.restaurant.entity.Restaurant;
import application.restaurant.entity.RestaurantImage;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostDtoToMember(MemberDto.Post requestBody);
    Member memberPatchNicknameDtoToMember(MemberDto.PatchNickname requestBody);
    @Mapping(source = "url", target = "image.url")
    Member memberPatchProfileDtoToMember(MemberDto.PatchProfile requestBody);
    @Mapping(source = "image.url", target = "url")
    @Mapping(source = "member.roles", target = "role")
    MemberDto.Response memberToMemberResponseDto(Member member);

    @Mapping(source = "member.restaurants", target = "restaurantList")
    @Mapping(source = "image.url", target = "url")
    @Mapping(source = "member.roles", target = "role")
    MemberDto.ResponseOwner memberToMemberResponseOwnerDto(Member member);

    @Mapping(source = "restaurantImageList", target = "imageList")
    @Mapping(source = "menuList", target = "menuList")
    @Mapping(source = "category.name", target = "categoryName")
    RestaurantDto.RestaurantResponseDto restaurantToRestaurantResponseDto(Restaurant restaurant);

    List<RestaurantImageDto.RestaurantImageResponseDto> restaurantImageListToDtoList(List<RestaurantImage> restaurantImageList);

    @Mapping(target = "imageId", source = "restaurantImage.image.imageId")
    @Mapping(target = "url", source = "restaurantImage.image.url")
    RestaurantImageDto.RestaurantImageResponseDto restaurantImageToDto(RestaurantImage restaurantImage);
}
