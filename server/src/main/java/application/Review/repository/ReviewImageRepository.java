package application.Review.repository;

import application.Review.entity.ReviewImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReviewImageRepository extends JpaRepository<ReviewImage, Long> {
    @Override
    Optional<ReviewImage> findById(Long reviewImage_id);
}