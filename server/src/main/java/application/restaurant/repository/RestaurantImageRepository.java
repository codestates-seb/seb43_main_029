package application.restaurant.repository;

import application.restaurant.entity.RestaurantImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RestaurantImageRepository extends JpaRepository<RestaurantImage, Long> {
    @Override
    Optional<RestaurantImage> findById(Long restaurantImage_id);
}
