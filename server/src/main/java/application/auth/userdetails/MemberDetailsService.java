package application.auth.userdetails;

import application.auth.utils.CustomAuthorityUtils;
import application.exception.BusinessLogicException;
import application.exception.ExceptionCode;
import application.image.entity.Image;
import application.image.repository.ImageFileRepository;
import application.member.entity.Member;
import application.member.repository.MemberRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Component
public class MemberDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;
    private final CustomAuthorityUtils authorityUtils;
    private final ImageFileRepository imageFileRepository;

    public MemberDetailsService(MemberRepository memberRepository, CustomAuthorityUtils authorityUtils, ImageFileRepository imageFileRepository) {
        this.memberRepository = memberRepository;
        this.authorityUtils = authorityUtils;
        this.imageFileRepository = imageFileRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return new MemberDetails(findMember);
    }

    public Member createMember(Member member){
        verifyExistEmail(member.getEmail());

        Optional<Image> image = imageFileRepository.findById(11L);

        Image findImage = image.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.IMAGE_NOT_FOUND));

        member.setImage(findImage);

        return memberRepository.save(member);
    }

    public void verifyExistEmail(String email){
        Optional<Member> optionalMember = memberRepository.findByEmail(email);

        if (optionalMember.isPresent()){
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    public boolean findExistMember(String email){
        Optional<Member> optionalMember = memberRepository.findByEmail(email);

        if (optionalMember.isPresent()){
            return true;
        }
        else return false;
    }

    private final class MemberDetails extends Member implements UserDetails{
        MemberDetails(Member member){
            setMemberId(member.getMemberId());
            setEmail(member.getEmail());
            setPassword(member.getPassword());
            setRoles(member.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
