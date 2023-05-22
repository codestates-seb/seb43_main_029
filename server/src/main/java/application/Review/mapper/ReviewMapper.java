package application.Review.mapper;

import application.Review.dto.ReviewDto;
import application.Review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {ReviewImageMapper.class})
public interface ReviewMapper {
    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "restaurantId", target = "restaurant.restaurantId")
    Review reviewPostDtoToReview(ReviewDto.ReviewPostDto reviewPostDto);

    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "restaurantId", target = "restaurant.restaurantId")
    Review reviewPatchDtoToReview(ReviewDto.ReviewPatchDto reviewPatchDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "reviewImageList", target = "imageList")
    ReviewDto.ReviewResponseDto reviewToReviewResponseDto(Review review);


}