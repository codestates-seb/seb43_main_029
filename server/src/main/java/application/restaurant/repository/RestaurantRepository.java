package application.restaurant.repository;

import application.restaurant.entity.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long>{
    @Override
    Optional<Restaurant> findById(Long restaurant_id);

    // 특정 키워드를 가진 레스토랑 조회
    @Query("SELECT DISTINCT r FROM Restaurant r " +
            "LEFT JOIN r.menuList m " +
            "WHERE r.name LIKE %:keyword% " +
            "OR r.address LIKE %:keyword% " +
            "OR m.name LIKE %:keyword%")
    Page<Restaurant> searchByKeyword(String keyword, Pageable pageable);
}
