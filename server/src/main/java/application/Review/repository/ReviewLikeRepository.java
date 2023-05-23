package application.Review.repository;

import application.Review.entity.ReviewLike;
import application.Review.entity.Review;
import application.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReviewLikeRepository extends JpaRepository<ReviewLike, Long>{
    Optional<ReviewLike> findByReviewAndMember(Review review, Member member);
}