package application.bookmark.service;

import application.bookmark.dto.BookmarkDto;
import application.bookmark.entity.Bookmark;
import application.bookmark.repository.BookmarkRepository;
import application.exception.BusinessLogicException;
import application.exception.ExceptionCode;
import application.image.repository.ImageFileRepository;
import application.member.entity.Member;
import application.member.repository.MemberRepository;
import application.restaurant.entity.Restaurant;
import application.restaurant.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BookmarkService {
    private final MemberRepository memberRepository;
    private final BookmarkRepository bookmarkRepository;
    private final RestaurantRepository restaurantRepository;
    public void createBookmark(Bookmark bookmark, long memberId, long restaurantId){
        Member member = findMemberById(memberId);
        Restaurant restaurant = findRestaurantById(restaurantId);

        boolean isBookmarked = member.getBookmarkList()
                .stream()
                .anyMatch(b -> b.getRestaurant().getRestaurantId().equals(restaurant.getRestaurantId()));
        if (!isBookmarked) { // 멤버가 해당 레스토랑을 즐겨찾기하지 않았다면, 즐겨찾기 생성
            bookmark.setMember(member);
            bookmark.setRestaurant(restaurant);
            member.getBookmarkList().add(bookmark);
            restaurant.setBookmark(restaurant.getBookmark() + 1); // 즐겨찾기 수 +1
            bookmarkRepository.save(bookmark);
        } else { // 멤버가 해당 레스토랑을 이미 즐겨찾기한 경우, 즐겨찾기 삭제
            List<Bookmark> bookmarks = member.getBookmarkList();
            restaurant.setBookmark(restaurant.getBookmark() - 1); // 즐겨찾기 수 -1

            // 삭제할 북마크 찾기
            Optional<Bookmark> bookmarkToDelete = bookmarks.stream()
                    .filter(b -> b.getRestaurant().getRestaurantId().equals(restaurant.getRestaurantId()))
                    .findFirst();

            // 찾은 북마크 ㅡ삭제
            bookmarkToDelete.ifPresent(findbookmark -> {
                bookmarks.remove(findbookmark); // Remove from the list
                bookmarkRepository.delete(findbookmark); // Delete from the repository
            });
        }
    }

    public List<Bookmark> getBookmarkList(long memberId) {

        return bookmarkRepository.findBookmarkListByMemberId(memberId);
    }

    public BookmarkDto.BookmarkHeartResponseDto getBookmarkHeart(long memberId, long restaurantId) {
        Member member = findMemberById(memberId);
        List<Bookmark> bookmarkList = member.getBookmarkList();
        String heart = "false";

        for (Bookmark bookmark : bookmarkList) {
            if (bookmark.getRestaurant().getRestaurantId() == restaurantId) {
                heart = "true";
                break;
            }
        }

        BookmarkDto.BookmarkHeartResponseDto responseDto = new BookmarkDto.BookmarkHeartResponseDto();
        responseDto.setHeart(heart);

        return responseDto;
    }

    public List<BookmarkDto.BookmarkResponseDto> setRestaurant(List<BookmarkDto.BookmarkResponseDto> bookmarkResponseDtoList){
        for(BookmarkDto.BookmarkResponseDto bookmarkResponseDto : bookmarkResponseDtoList){
            Restaurant restaurant = findRestaurantById(bookmarkResponseDto.getRestaurantId());
            bookmarkResponseDto.setName(restaurant.getName());
            bookmarkResponseDto.setUrl(restaurant.getRestaurantImageList()
                    .stream()
                    .findFirst()
                    .map(restaurantImage -> restaurantImage.getImage().getUrl())
                    .orElse(null));
        }

        return bookmarkResponseDtoList;
    }

    public Member findMemberById(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member member = optionalMember.orElseThrow(()
                -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return member;
    }

    public Restaurant findRestaurantById(long restaurantId) {
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(restaurantId);
        Restaurant restaurant = optionalRestaurant.orElseThrow(()
                -> new BusinessLogicException(ExceptionCode.RESTAURANT_NOT_FOUND));
        return restaurant;
    }

    public Bookmark findBookmarkById(long bookmarkId) {
        Optional<Bookmark> optionalBookmark = bookmarkRepository.findById(bookmarkId);
        Bookmark bookmark = optionalBookmark.orElseThrow(()
                -> new BusinessLogicException(ExceptionCode.BOOKMARK_NOT_FOUND));
        return bookmark;
    }
}
