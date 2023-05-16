package application.Review.service;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final ReviewMapper reviewMapper;

    public ReviewService(ReviewRepository reviewRepository, ReviewMapper reviewMapper) {
        this.reviewRepository = reviewRepository;
        this.reviewMapper = reviewMapper;
    }

    public ReviewDto addReview(ReviewRequestDto requestDto) {
        // 요청 데이터를 ReviewEntity로 변환
        ReviewEntity reviewEntity = reviewMapper.toEntity(requestDto);

        // ReviewEntity에 이미지 정보를 설정
        List<ReviewImageEntity> imageEntities = convertToImageEntities(requestDto.getImages());
        for (ReviewImageEntity imageEntity : imageEntities) {
            reviewEntity.addImage(imageEntity);
        }

        // ReviewEntity를 저장하고 저장된 엔티티를 다시 ReviewDto로 변환하여 반환
        ReviewEntity savedReview = reviewRepository.save(reviewEntity);
        return reviewMapper.toDto(savedReview);
    }

    public ReviewDto updateReview(ReviewRequestDto requestDto) {
        // 요청 데이터를 ReviewEntity로 변환
        ReviewEntity reviewEntity = reviewMapper.toEntity(requestDto);

        // ReviewEntity에 이미지 정보를 설정
        List<ReviewImageEntity> imageEntities = convertToImageEntities(requestDto.getImages());
        for (ReviewImageEntity imageEntity : imageEntities) {
            reviewEntity.addImage(imageEntity);
        }

        // ReviewEntity를 저장하고 저장된 엔티티를 다시 ReviewDto로 변환하여 반환
        ReviewEntity updatedReview = reviewRepository.save(reviewEntity);
        return reviewMapper.toDto(updatedReview);
    }

    public void deleteReview(Long reviewId) {
        reviewRepository.deleteById(reviewId);
    }

    public List<ReviewDto> getRestaurantReviews(Long restaurantId) {
        List<ReviewEntity> reviewEntities = reviewRepository.findByRestaurantId(restaurantId);
        return reviewEntities.stream()
                .map(reviewMapper::toDto)
                .collect(Collectors.toList());
    }

    private List<ReviewImageEntity> convertToImageEntities(MultipartFile[] images) {
        // 임시))) 이미지 변환 로직 구현
        // MultipartFile을 ReviewImageEntity로 변환하여 리스트로 반환
        // 로직구현 필요!
        return null;
    }
}