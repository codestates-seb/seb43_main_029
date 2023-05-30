package application.bookmark.repository;

import application.bookmark.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    @Query("SELECT b FROM Bookmark b WHERE b.member.memberId = :memberId ORDER BY b.createdAt DESC")
    List<Bookmark> findBookmarkListByMemberId(@Param("memberId") long memberId);
}
