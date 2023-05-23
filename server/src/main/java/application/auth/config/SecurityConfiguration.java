package application.auth.config;


import application.auth.filter.JwtAuthenticationFilter;
import application.auth.filter.JwtVerificationFilter;
import application.auth.handler.*;
import application.auth.jwt.JwtTokenizer;
import application.auth.userdetails.MemberDetailsService;
import application.auth.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfiguration {

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberDetailsService memberService;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils, MemberDetailsService memberService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
    }

    // TODO: 페이지별 권한 부여, 식당, 리뷰 등 추가되면 진행할 것
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy((SessionCreationPolicy.STATELESS))
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/")
                .and()
                .oauth2Login()
                .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, authorityUtils, memberService))
                .and()
                .authorizeRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/members").anonymous() // 회원 가입
                        .antMatchers(HttpMethod.PATCH, "/members/{member-id}/nickname").hasAnyRole("USER", "OWNER", "ADMIN") // 회원 닉네임 수정
                        .antMatchers(HttpMethod.PATCH, "/members/{member-id}/profile").hasAnyRole("USER", "OWNER", "ADMIN") // 회원 프로필사진 수정
                        .antMatchers(HttpMethod.GET, "/members/{member-id}").hasAnyRole("USER", "OWNER", "ADMIN") // 회원 정보(마이페이지) 조회
                        .antMatchers(HttpMethod.GET, "members/{member-id}/review").hasAnyRole("USER", "ADMIN") // 회원 리뷰 조회
                        .antMatchers(HttpMethod.GET, "/members/{member-id}/bookmark").hasAnyRole("USER", "ADMIN") // 회원 즐겨찾기 검색
                        .antMatchers(HttpMethod.DELETE, "/members/{member-id}").hasAnyRole("USER", "OWNER", "ADMIN") // 회원 탈퇴
                        .antMatchers(HttpMethod.POST, "/login").anonymous() // 로그인
                        .antMatchers(HttpMethod.POST, "/logout").hasAnyRole("USER", "OWNER", "ADMIN") // 로그아웃
                        .antMatchers(HttpMethod.POST, "/restaurant").hasAnyRole("OWNER", "ADMIN") // 식당 등록
                        .antMatchers(HttpMethod.PATCH, "/restaurant/{member-id}/{restaurant-id}").hasAnyRole("OWNER", "ADMIN") // 식당 정보 수정
                        .antMatchers(HttpMethod.GET, "/restaurant/{restaurant-id}").permitAll() // 식당 정보 상세 조회
                        .antMatchers(HttpMethod.GET, "/restaurant/search").permitAll() // 식당 검색결과 조회
                        .antMatchers(HttpMethod.DELETE, "/restaurant/{member-id}/{restaurant-id}").hasAnyRole("OWNER", "ADMIN") // 식당 삭제
                        .antMatchers(HttpMethod.POST, "/restaurant/{member-id}/{restaurants-id}").hasAnyRole("USER", "ADMIN") // 식당 즐겨찾기 추가 및 삭제
                        .antMatchers(HttpMethod.POST, "/reviews").hasAnyRole("USER", "ADMIN") // 리뷰 등록
                        .antMatchers(HttpMethod.PATCH, "/reviews/{review-id}").hasAnyRole("USER", "ADMIN") // 리뷰 수정
                        .antMatchers(HttpMethod.GET, "/reviews/{review-id}").permitAll() // 리뷰 조회
                        .antMatchers(HttpMethod.DELETE, "/reviews/{review-id}").hasAnyRole("USER", "ADMIN") // 리뷰 삭제
                        .antMatchers(HttpMethod.POST, "/reviews/{review-id}/like").hasAnyRole("USER", "ADMIN") // 리뷰 좋아요
                        .antMatchers(HttpMethod.GET, "/restaurant/today").permitAll() // 오늘 뭐먹지
                        .anyRequest().permitAll());


                        //.anyRequest().permitAll());
//


        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        // CORS 요청에서 허용되는 origin을 설정하는 메서드, 모든 origin으로 부터의 요청을 허용한다
        // S3에서 정적 배포하는 경로가 origin이 된다
        configuration.setAllowedOrigins(Arrays.asList("http://seb43-main-029-client.s3-website.ap-northeast-2.amazonaws.com", "http://localhost:3000"));
        // 허용되는 HTTP Method 설정
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));
        // 허용되는 HTTP 요청 헤더 설정
        configuration.setAllowedHeaders(Arrays.asList("authorization", "content-type", "x-auth-token"));
        // 클라이언트가 접근할 수 있는 헤더 설정
        configuration.setExposedHeaders(Arrays.asList("x-auth-token"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity>{
        @Override
        public void configure(HttpSecurity builder) throws Exception{
            AuthenticationManager authenticationManager =
                    builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);

            // 로그인 URL
            jwtAuthenticationFilter.setFilterProcessesUrl("/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
