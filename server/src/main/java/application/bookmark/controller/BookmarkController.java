package application.bookmark.controller;

import application.bookmark.dto.BookmarkDto;
import application.bookmark.entity.Bookmark;
import application.bookmark.mapper.BookmarkMapper;
import application.bookmark.service.BookmarkService;
import application.dto.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping
@Validated
@RequiredArgsConstructor
public class BookmarkController {
    private final BookmarkMapper mapper;
    private final BookmarkService bookmarkService;
    @PostMapping("/restaurant/{member-id}/{restaurant-id}")
    public ResponseEntity postBookmark(@PathVariable("member-id") @Positive long memberId,
                                       @PathVariable("restaurant-id") @Positive long restaurantId,
                                      @RequestBody BookmarkDto.BookmarkPostDto bookmarkPostDto) {
        Bookmark bookmark = mapper.bookmarkPostDtoToBookmark(bookmarkPostDto);
        bookmarkService.createBookmark(bookmark, memberId, restaurantId);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/members/{member-id}/bookmark")
    public ResponseEntity getBookmarkList(@PathVariable("member-id") @Positive long memberId){
        List<Bookmark> bookmarkList = bookmarkService.getBookmarkList(memberId);

        List<BookmarkDto.BookmarkResponseDto> responseDtoList = mapper.bookmarkListToDtoList(bookmarkList);
        responseDtoList = bookmarkService.setRestaurant(responseDtoList);

        return new ResponseEntity<>(
                new SingleResponseDto<>(responseDtoList), HttpStatus.OK
        );
    }

}
