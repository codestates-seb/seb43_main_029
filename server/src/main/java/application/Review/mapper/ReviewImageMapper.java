package application.Review.mapper;

import application.Review.dto.ReviewImageDto;
import application.Review.entity.ReviewImage;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReviewImageMapper {
    @Mapping(target = "imageId", source = "reviewImage.image.imageId")
    @Mapping(target = "url", source = "reviewImage.image.url")
    ReviewImageDto.ReviewImageResponseDto reviewImageToDto(ReviewImage reviewImage);

    List<ReviewImageDto.ReviewImageResponseDto> reviewImageListToDtoList(List<ReviewImage> reviewImageList);
}