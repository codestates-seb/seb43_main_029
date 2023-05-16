package application.Review.entity;

@Entity
@Table(name = "review")
public class ReviewEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long reviewId;

    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "restaurant_id")
    private Long restaurantId;

    @Column(name = "content", columnDefinition = "TEXT")
    private String content;

    @Column(name = "score")
    private Double score;

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ReviewImageEntity> images = new ArrayList<>();

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "last_modified_at")
    private LocalDateTime lastModifiedAt;

    // 생성자, 게터, 세터 생략

    // 이미지 추가 메소드
    public void addImage(ReviewImageEntity image) {
        images.add(image);
        image.setReview(this);
    }

    // 이미지 삭제 메소드
    public void removeImage(ReviewImageEntity image) {
        images.remove(image);
        image.setReview(null);
    }
}