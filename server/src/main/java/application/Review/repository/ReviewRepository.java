package application.Review.repository;

import application.Review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long>{
    @Override
    Optional<Review> findById(Long review_id);
}