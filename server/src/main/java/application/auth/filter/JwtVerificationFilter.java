package application.auth.filter;

import application.auth.jwt.JwtTokenizer;
import application.auth.utils.CustomAuthorityUtils;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

public class JwtVerificationFilter extends OncePerRequestFilter {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException{

        // V1
        //Map<String, Object> claims = verifyJws(request);
        //setAuthenticationToContext(claims);

        // V2
        try{
            Map<String, Object> claims = verifyJws(request);
            setAuthenticationToContext(claims);
        } catch (SignatureException se){
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee){
            request.setAttribute("exception", ee);
        } catch (Exception e){
            request.setAttribute("exception", e);
        }

        filterChain.doFilter(request, response);

    }

    // OncePerRequestFilter의 메서드 오버라이드, 특정 조건에 맞으면(true) 필터의 동작을 수행하지 않고, 다음 필터로 건너뛴다
    // JWT가 없는 것을 걸러줄 뿐만 아니라, JWT 자격증명이 필요하지 않은 리소스에 접근할 때에도 사용된다
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException{
        // 엑세스 토큰을 담은 "Authorization"을 요청 HTTP 헤더에서 가져온다
        String authorization = request.getHeader("Authorization");

        // 엑세스 토큰이 null이거나 "Bearer"로 시작하지 않으면 true가 되어 동작하지 않는다
        return authorization == null || !authorization.startsWith("Bearer");
    }

    // JWT를 검증하여 토큰이 유효한지 확인하는 메서드
    private Map<String, Object> verifyJws(HttpServletRequest request){
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();

        return claims;
    }

    // 인증된 Authentication 객체를 SecurityContext에 저장하기 위한 메서드
    private void setAuthenticationToContext(Map<String, Object> claims){
        String username = (String) claims.get("username");
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);

        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
