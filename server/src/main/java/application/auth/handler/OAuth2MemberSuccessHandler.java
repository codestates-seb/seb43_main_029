package application.auth.handler;

import application.auth.jwt.JwtTokenizer;
import application.auth.userdetails.MemberDetailsService;
import application.auth.utils.CustomAuthorityUtils;
import application.member.entity.Member;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OAuth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberDetailsService memberService;

    public OAuth2MemberSuccessHandler(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils, MemberDetailsService memberService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException{
        OAuth2User oAuth2User = (OAuth2User)authentication.getPrincipal();
        OAuth2AuthenticationToken oauth2Authentication = (OAuth2AuthenticationToken) authentication;

        String registrationId = oauth2Authentication.getAuthorizedClientRegistrationId();

        if ("google".equals(registrationId)) {
            // Google 로그인 처리
            googleOAuth2Login(request, response, oAuth2User);
        } else if ("kakao".equals(registrationId)) {
            // 카카오 로그인 처리
            kakaoOAuth2Login(request, response, oAuth2User);
        }
    }

    private void googleOAuth2Login(HttpServletRequest request, HttpServletResponse response, OAuth2User oAuth2User) throws IOException{
        String email = String.valueOf(oAuth2User.getAttributes().get("email"));

        List<String> authorities = authorityUtils.createOAuthRoles();
        String name = String.valueOf(oAuth2User.getAttributes().get("name"));

        // 가입한 회원이 존재하지 않으면 DB에 회원 저장
        // 이미 가입한 회원이 있으면 액세스 토큰, 리프레시 토큰을 담아 redirect
        if(!memberService.findExistMember(email)){
            saveMember(email, name, authorities);
        }

        redirect(request, response, email, authorities);

    }

    private void kakaoOAuth2Login(HttpServletRequest request, HttpServletResponse response, OAuth2User oAuth2User) throws IOException{

        Map<String, Object> attributes = oAuth2User.getAttributes();

        Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
        Map<String, Object> properties = (Map<String, Object>) attributes.get("properties");

        String email = (String) kakaoAccount.get("email");

        List<String> authorities = authorityUtils.createOAuthRoles();

        String name = (String) properties.get("nickname");

        // 가입한 회원이 존재하지 않으면 DB에 회원 저장
        // 이미 가입한 회원이 있으면 액세스 토큰, 리프레시 토큰을 담아 redirect
        if(!memberService.findExistMember(email)){
            saveMember(email, name, authorities);
        }

        redirect(request, response, email, authorities);
    }

    private void saveMember(String email, String name, List<String> authorities){
        Member member = new Member(email, name, authorities);
        memberService.createMember(member);
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, String username, List<String> authorities) throws IOException{
        String accessToken = delegateAccessToken(username, authorities);
        String refreshToken = delegateRefreshToken(username);

        String url = createURI(accessToken, refreshToken).toString();
        // 프론트 애플리케이션으로 리다이렉트
        getRedirectStrategy().sendRedirect(request, response, url);
    }

    private String delegateAccessToken(String username, List<String> authorities){
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("roles", authorities);

        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    private String delegateRefreshToken(String username){
        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }

    private URI createURI(String accessToken, String refreshToken){
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("access_token", accessToken);
        queryParams.add("refresh_token", refreshToken);

        // TODO: 추후 프론트 페이지 완료 후 host, path 재설정
        // port 설정을 하지 않을시 기본값 80포트, http://localhost:80/receive-token.html
        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("localhost")
                .path("/receive-token.html")
                .queryParams(queryParams)
                .build()
                .toUri();
    }
}
