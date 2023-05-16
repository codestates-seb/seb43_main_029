package application.Review.controller;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    // 리뷰 등록 API
    @PostMapping
    public ResponseEntity<ReviewResponseDto> addReview(@RequestParam("memberId") Long memberId,
                                                       @RequestParam("restaurantId") Long restaurantId,
                                                       @RequestParam("content") String content,
                                                       @RequestParam("score") Double score,
                                                       @RequestPart(value = "image", required = false) MultipartFile[] images) {
        // 요청 데이터를 ReviewRequestDto로 변환
        ReviewRequestDto requestDto = new ReviewRequestDto(memberId, restaurantId, content, score, images);

        // ReviewService를 사용하여 리뷰 등록 처리
        ReviewDto reviewDto = reviewService.addReview(requestDto);

        // 리뷰 등록 결과를 ReviewResponseDto로 변환하여 응답
        ReviewResponseDto responseDto = new ReviewResponseDto(reviewDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDto);
    }

    // 리뷰 수정 API
    @PatchMapping("/{reviewId}")
    public ResponseEntity<ReviewResponseDto> updateReview(@PathVariable("reviewId") Long reviewId,
                                                          @RequestParam("memberId") Long memberId,
                                                          @RequestParam("restaurantId") Long restaurantId,
                                                          @RequestParam("content") String content,
                                                          @RequestParam("score") Double score,
                                                          @RequestPart(value = "image", required = false) MultipartFile[] images) {
        // 요청 데이터를 ReviewRequestDto로 변환
        ReviewRequestDto requestDto = new ReviewRequestDto(reviewId, memberId, restaurantId, content, score, images);

        // ReviewService를 사용하여 리뷰 수정 처리
        ReviewDto reviewDto = reviewService.updateReview(requestDto);

        // 리뷰 수정 결과를 ReviewResponseDto로 변환하여 응답
        ReviewResponseDto responseDto = new ReviewResponseDto(reviewDto);
        return ResponseEntity.ok(responseDto);
    }

    // 리뷰 삭제 API
    @DeleteMapping("/{reviewId}")
    public ResponseEntity<Void> deleteReview(@PathVariable("reviewId") Long reviewId) {
        // ReviewService를 사용하여 리뷰 삭제 처리
        reviewService.deleteReview(reviewId);

        return ResponseEntity.noContent().build();
    }

    // 식당의 리뷰 조회 API
    @GetMapping("/{restaurantId}")
    public ResponseEntity<List<ReviewResponseDto>> getRestaurantReviews(@PathVariable("restaurantId") Long restaurantId) {
        // ReviewService를 사용하여 식당의 리뷰 조회
        List<ReviewDto> reviewDtoList = reviewService.getRestaurantReviews(restaurantId);

        // 리뷰 목록을 ReviewResponseDto로 변환하여 응답
        List<ReviewResponseDto> responseDtoList = reviewDtoList.stream()
                .map(ReviewResponseDto::new)
                .collect(Collectors.toList());

        return ResponseEntity.ok(responseDtoList);
    }
}