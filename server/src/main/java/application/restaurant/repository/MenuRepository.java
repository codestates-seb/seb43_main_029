package application.restaurant.repository;

import application.restaurant.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MenuRepository extends JpaRepository<Menu, Long> {
    @Override
    Optional<Menu> findById(Long menu_id);
}
