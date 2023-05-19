package application.member.mapper;

import application.member.dto.MemberDto;
import application.member.entity.Member;
import application.restaurant.dto.RestaurantImageDto;
import application.restaurant.entity.Restaurant;
import application.restaurant.entity.RestaurantImage;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;

import java.util.ArrayList;
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
//    @Mapping(source = "member.restaurants", target = "restaurantList")
//    @Mapping(source = "image.url", target = "url")
//    @Mapping(source = "member.roles", target = "role")
//    MemberDto.ResponseOwner memberToMemberResponseOwnerDto(Member member);

    @Mapping(source = "member.restaurants", target = "restaurantList")
    @Mapping(source = "member.restaurants", target = "imageList", qualifiedByName = "restaurantToImageList")
    @Mapping(source = "member.roles", target = "role")
    @Mapping(source = "image.url", target = "url")
    MemberDto.ResponseOwner memberToMemberResponseOwnerDto(Member member);

    @Named("restaurantToImageList")
    static List<RestaurantImageDto.RestaurantImageResponseDto> restaurantToImageList(List<Restaurant> restaurants) {
        List<RestaurantImageDto.RestaurantImageResponseDto> imageList = new ArrayList<>();
        for (Restaurant restaurant : restaurants) {
            for (RestaurantImage restaurantImage : restaurant.getRestaurantImageList()) {
                RestaurantImageDto.RestaurantImageResponseDto imageResponseDto = new RestaurantImageDto.RestaurantImageResponseDto();
                imageResponseDto.setImageId(restaurantImage.getImage().getImageId());
                imageResponseDto.setUrl(restaurantImage.getImage().getUrl());
                imageList.add(imageResponseDto);
            }
        }
        return imageList;
    }
}
