package application.Review.mapper;

@Component
public class ReviewMapper {

    public ReviewDto toDto(ReviewEntity entity) {
        ReviewDto dto = new ReviewDto();
        dto.setReviewId(entity.getReviewId());
        dto.setMemberId(entity.getMemberId());
        dto.setRestaurantId(entity.getRestaurantId());
        dto.setContent(entity.getContent());
        dto.setScore(entity.getScore());
        dto.setImages(entity.getImages().stream()
                .map(ReviewImageEntity::getImageUrl)
                .collect(Collectors.toList()));
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setLastModifiedAt(entity.getLastModifiedAt());
        return dto;
    }

    public ReviewEntity toEntity(ReviewDto dto) {
        ReviewEntity entity = new ReviewEntity();
        entity.setReviewId(dto.getReviewId());
        entity.setMemberId(dto.getMemberId());
        entity.setRestaurantId(dto.getRestaurantId());
        entity.setContent(dto.getContent());
        entity.setScore(dto.getScore());
        entity.setCreatedAt(dto.getCreatedAt());
        entity.setLastModifiedAt(dto.getLastModifiedAt());
        return entity;
    }
}