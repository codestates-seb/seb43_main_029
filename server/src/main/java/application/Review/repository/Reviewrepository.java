package application.Review.repository;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewEntity, Long> {
    List<ReviewEntity> findByRestaurantId(Long restaurantId);
}