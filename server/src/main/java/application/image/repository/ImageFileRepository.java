package application.image.repository;

import application.image.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageFileRepository extends JpaRepository<Image, Long> {
}