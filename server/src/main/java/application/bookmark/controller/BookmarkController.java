package application.bookmark.controller;

import application.bookmark.dto.BookmarkDto;
import application.bookmark.entity.Bookmark;
import application.bookmark.mapper.BookmarkMapper;
import application.bookmark.service.BookmarkService;
import application.dto.MultiResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
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
    @PostMapping("/restaurants/{member-id}/{restaurant-id}")
    public ResponseEntity postBookmark(@PathVariable("member-id") @Positive long memberId,
                                       @PathVariable("restaurant-id") @Positive long restaurantId,
                                      @RequestBody BookmarkDto.BookmarkPostDto bookmarkPostDto) {
        Bookmark bookmark = mapper.bookmarkPostDtoToBookmark(bookmarkPostDto);
        bookmarkService.createBookmark(bookmark, memberId, restaurantId);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/members/{member-id}/bookmark")
    public ResponseEntity getBookmarkList(@PathVariable("member-id") @Positive long memberId,
                                          @PageableDefault(page = 1, size = 15) Pageable pageable) {
        Page<Bookmark> bookmarkPage = bookmarkService.getBookmarkList(pageable, memberId);
        List<BookmarkDto.BookmarkResponseDto> bookmarkDtoList = mapper.bookmarkListToDtoList(bookmarkPage.getContent());
        bookmarkDtoList = bookmarkService.setRestaurant(bookmarkDtoList);
        MultiResponseDto<BookmarkDto.BookmarkResponseDto> responseDto = new MultiResponseDto<>(
                bookmarkDtoList, bookmarkPage);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }
}
