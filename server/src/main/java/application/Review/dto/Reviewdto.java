package application.Review.dto;

public class ReviewDto {
    private Long reviewId;
    private Long memberId;
    private Long restaurantId;
    private String content;
    private Double score;
    private List<String> images;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;

    // 생성자, 게터, 세터 생략

    // 이미지 URL을 추가하는 메소드
    public void addImage(String imageUrl) {
        if (images == null) {
            images = new ArrayList<>();
        }
        images.add(imageUrl);
    }
}