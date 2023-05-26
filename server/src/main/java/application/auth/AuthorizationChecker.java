package application.auth;

import application.Review.entity.Review;
import application.Review.repository.ReviewRepository;
import application.exception.BusinessLogicException;
import application.exception.ExceptionCode;
import application.member.entity.Member;
import application.member.repository.MemberRepository;
import application.restaurant.entity.Restaurant;
import application.restaurant.repository.RestaurantRepository;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Objects;
import java.util.Optional;

@Component
public class AuthorizationChecker {

    private final MemberRepository memberRepository;

    private final RestaurantRepository restaurantRepository;

    private final ReviewRepository reviewRepository;

    public AuthorizationChecker(MemberRepository memberRepository, RestaurantRepository restaurantRepository, ReviewRepository reviewRepository) {
        this.memberRepository = memberRepository;
        this.restaurantRepository = restaurantRepository;
        this.reviewRepository = reviewRepository;
    }

    public boolean check(Long memberId, Authentication authentication){
        // 현재 로그인한 회원 정보
        String username = (String) authentication.getPrincipal();

        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        // 로그인한 회원 정보와 현재 경로의 memberId가 같다면 true
        return Objects.equals(findMember.getMemberId(), memberId);

    }

    public boolean checkRestaurant(Long restaurantId, Authentication authentication){
        // 현재 로그인한 회원 정보
        String username = (String) authentication.getPrincipal();

        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        // 접근하려는 식당 정보
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(restaurantId);
        Restaurant findRestaurant = optionalRestaurant.orElseThrow(() -> new BusinessLogicException(ExceptionCode.RESTAURANT_NOT_FOUND));



        // 로그인한 회원 정보와 식당을 등록한 Member의 memberId가 같다면 true
        return Objects.equals(findMember.getMemberId(), findRestaurant.getMember().getMemberId());
    }

    public boolean checkReview(Long reviewId, Authentication authentication){
        // 현재 로그인한 회원 정보
        String username = (String) authentication.getPrincipal();

        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        // 접근하려는 리뷰 정보
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
        Review findReview = optionalReview.orElseThrow(() -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));


        return Objects.equals(findMember.getMemberId(), findReview.getMember().getMemberId());
    }


}
