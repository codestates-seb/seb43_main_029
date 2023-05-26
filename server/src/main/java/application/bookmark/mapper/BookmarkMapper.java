package application.bookmark.mapper;

import application.bookmark.dto.BookmarkDto;
import application.bookmark.entity.Bookmark;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BookmarkMapper {
    @Mapping(source = "restaurantId", target = "restaurant.restaurantId")
    Bookmark bookmarkPostDtoToBookmark(BookmarkDto.BookmarkPostDto bookmarkPostDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "restaurant.restaurantId", target = "restaurantId")
    BookmarkDto.BookmarkResponseDto bookmarkToBookmarkDto(Bookmark bookmark);

    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "restaurantId", target = "restaurant.restaurantId")
    List<Bookmark> bookmarkDtoListToBookmarkList(List<BookmarkDto.BookmarkPostDto> bookmarkDtoList);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "restaurant.restaurantId", target = "restaurantId")
    @Mapping(source = "restaurant.name", target = "name")
    @Mapping(target = "url", expression = "java(restaurant == null || restaurant.getRestaurantImageList() == null || restaurant.getRestaurantImageList().isEmpty() ? null : restaurant.getRestaurantImageList().get(0).getImage().getUrl())")
    List<BookmarkDto.BookmarkResponseDto> bookmarkListToDtoList(List<Bookmark> bookmarkList);
}