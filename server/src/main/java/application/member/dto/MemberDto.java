package application.member.dto;

import lombok.Getter;
import lombok.Setter;

public class MemberDto {

    @Getter
    @Setter
    public static class Post{
        private String email;
        private String password;
        private String nickname;
        private String phone;
        private String companyNumber;

    }
}
