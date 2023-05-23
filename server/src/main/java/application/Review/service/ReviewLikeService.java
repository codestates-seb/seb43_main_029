package application.Review.service;

import application.Review.entity.Review;
import application.Review.entity.ReviewLike;
import application.Review.repository.ReviewLikeRepository;
import application.Review.repository.ReviewRepository;
import application.member.entity.Member;
import application.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ReviewLikeService {

    private final ReviewLikeRepository reviewLikeRepository;
    private final ReviewRepository reviewRepository;
    private final MemberRepository memberRepository;

    public ReviewLike addLikeToReview(Long reviewId, Long memberId) {
        Review review = reviewRepository.findById(reviewId).orElseThrow(
                () -> new RuntimeException("Review not found with id " + reviewId));
        Member member = memberRepository.findById(memberId).orElseThrow(
                () -> new RuntimeException("Member not found with id " + memberId));

        ReviewLike reviewLike = new ReviewLike();
        reviewLike.setReview(review);
        reviewLike.setMember(member);
        review.setLikeCount(review.getLikeCount() + 1);
        reviewRepository.save(review);

        return reviewLikeRepository.save(reviewLike);
    }

    public void removeLikeFromReview(Long reviewId, Long memberId) {
        Review review = reviewRepository.findById(reviewId).orElseThrow(
                () -> new RuntimeException("Review not found with id " + reviewId));
        Member member = memberRepository.findById(memberId).orElseThrow(
                () -> new RuntimeException("Member not found with id " + memberId));

        ReviewLike reviewLike = reviewLikeRepository.findByReviewAndMember(review, member).orElseThrow(
                () -> new RuntimeException("Like not found for the review with id " + reviewId
                        + " and member with id " + memberId));
        review.setLikeCount(review.getLikeCount() - 1);
        reviewRepository.save(review);

        reviewLikeRepository.delete(reviewLike);
    }
}