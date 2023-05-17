package application.member.dto;

import application.restaurant.dto.RestaurantDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.List;

public class MemberDto {

    @Getter
    @Setter
    public static class Post{

        @Pattern(regexp = "^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,}$",
                 message = "올바른 이메일 형식을 입력해주세요.")
        private String email;

        // TODO: 추후 패스워드 옵션 추가 논의 필요, 현재: 8자리 이상
        @Pattern(regexp = "^[0-9a-zA-Z]{8,}$",
                 message = "비밀번호는 8자리 이상을 입력해주세요.")
        private String password;

        @Pattern(regexp = "^[0-9a-zA-Z가-힣]{2,10}$",
                 message = "닉네임은 2자 이상 10자 이하로 입력해주세요.")
        private String nickname;

        // TODO: 전화번호 입력시 '-'의 처리 여부 논의 필요
        @Pattern(regexp = "^\\d{2,3}-\\d{3,4}-\\d{4}$",
                 message = "올바른 전화번호 형식을 입력해주세요.")
        private String phone;
        @Pattern(regexp = "^[0-9]{11}$",
                 message = "사업자 등록번호 11자리를 입력해주세요.")
        private String companyNumber;

    }

    @Getter
    @Setter
    public static class PatchNickname {
        private long memberId;
        @Pattern(regexp = "^[0-9a-zA-Z가-힣]{2,10}$",
                message = "닉네임은 2자 이상 10자 이하로 입력해주세요.")
        private String nickname;
    }

    @Getter
    @Setter
    public static class PatchProfile{
        private long memberId;
        // TODO: 이미지 등록 후 수정할 것
        private String url;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response{
        private long memberId;
        // TODO: 이미지 등록 후 수정할 것
        private String email;
        private String url;
        private String nickname;
        private String memberStatus;

        // Auditable에서 String 포맷으로 변환되므로 String 타입으로 선언
        private String createdAt;
        private String modifiedAt;
        private List<String> role;

        // TODO: 리뷰 추가시 구현
        //private List<Review> reviews;

        // TODO: 즐겨찾기 추가시 구현
        //private List<Bookmark> bookmarks;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ResponseOwner{
        private long memberId;
        // TODO: 이미지 등록 후 수정할
        private String email;
        private String url;
        private String nickname;
        private String createdAt;
        private String modifiedAt;
        private String companyNumber;
        private String memberStatus;
        private List<String> role;
        private List<RestaurantDto.RestaurantResponseDto> restaurantList = new ArrayList<>();


    }


}
