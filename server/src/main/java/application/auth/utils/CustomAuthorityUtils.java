package application.auth.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Component
public class CustomAuthorityUtils {
    @Value("${mail.address.admin}")
    private String adminMailAddress;

    private final List<GrantedAuthority> ADMIN_ROLES = AuthorityUtils.createAuthorityList("ROLE_ADMIN", "ROLE_USER");

    private final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");

    private final List<GrantedAuthority> OWNER_ROLES = AuthorityUtils.createAuthorityList("ROLE_OWNER");

    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN", "USER");
    private final List<String> USER_ROLES_STRING = List.of("USER");
    private final List<String> OWNER_ROLES_STRING = List.of("OWNER");

    public List<GrantedAuthority> createAuthorities(String email, String companyNumber){
        if (email.equals(adminMailAddress)){
            return ADMIN_ROLES;
        }

        Optional<String> optionalNumber = Optional.ofNullable(companyNumber);

        if(optionalNumber.isPresent()){
            return OWNER_ROLES;
        }
        else return USER_ROLES;
    }

    public List<String> createRoles(String email, String companyNumber){
        if (email.equals(adminMailAddress)){
            return ADMIN_ROLES_STRING;
        }

        Optional<String> optionalNumber = Optional.ofNullable(companyNumber);

        if(optionalNumber.isPresent()){
            return OWNER_ROLES_STRING;
        }
        else return USER_ROLES_STRING;
    }

    public List<GrantedAuthority> createAuthorities(List<String> roles){
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());

        return authorities;
    }
}
