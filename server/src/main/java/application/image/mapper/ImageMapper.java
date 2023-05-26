package application.image.mapper;

import application.image.dto.ImageDto;
import application.image.entity.Image;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ImageMapper {
    Image imageRequestDtoToimage(ImageDto.ImageRequestDto imagePostDto);
    //Image imagePatchDto(ImageDto.ImagePatchDto imagePatchDto);
    ImageDto.ImageResponseDto imageToimageResponseDto(Image image);
    List<ImageDto.ImageResponseDto> imageToResponseDto(List<Image>imageList);
}
