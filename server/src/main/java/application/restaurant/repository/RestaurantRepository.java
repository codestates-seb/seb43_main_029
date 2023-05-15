package application.restaurant.repository;

import application.restaurant.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    @Override
    Optional<Restaurant> findById(Long restaurant_id);
}
