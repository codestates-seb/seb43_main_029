package application.Review.repository;

import application.Review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long>{
    @Override
    Optional<Review> findById(Long review_id);

    List<Review> findAllByRestaurantRestaurantId(Long restaurantId); // 특정 레스토랑의 리뷰를 가져오는 방법

    List<Review> findAllByMember_MemberId(Long memberId); // 특정 사용자가 작성한 리뷰를 가져오는 방법

    List<Review> findAllByOrderByLikesDesc(); // 모든 리뷰를 좋아요 순으로 내림차순 정렬하여 가져오는 방법
}