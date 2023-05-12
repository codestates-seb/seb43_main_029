package application.member.service;

import application.auth.utils.CustomAuthorityUtils;
import application.exception.BusinessLogicException;
import application.exception.ExceptionCode;
import application.member.entity.Member;
import application.member.repository.MemberRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;


    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public Member createMember(Member member){
        verifyExistEmail(member.getEmail());

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getEmail(), member.getCompanyNumber());
        member.setRoles(roles);


        return memberRepository.save(member);
    }

    public Member updateMember(Member member){
        Member findMember = findMember(member.getMemberId());
        //findMember.setNickname(member.getNickname());

        // null이 아닌 쪽의 변경만 수행
        Optional.ofNullable(member.getNickname())
                .ifPresent(nickname -> findMember.setNickname(member.getNickname()));
        // TODO: 이미지 변경 추가시 수정
//        Optional.ofNullable(member.getProfileUrl())
//                .ifPresent(profile -> findMember.setProfileUrl(member.getProfileUrl()));

        return memberRepository.save(findMember);
    }

    public Member findMember(long memberId){
        Member findMember = findVerifiedMember(memberId);

        return findMember;
    }

    public void deleteMember(long memberId){
        Member findMember = findVerifiedMember(memberId);

        findMember.setMemberStatus(Member.MemberStatus.MEMBER_QUIT);

        memberRepository.save(findMember);
    }


    public Member findVerifiedMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);

        Member findMember = optionalMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }


    public void verifyExistEmail(String email){
        Optional<Member> optionalMember = memberRepository.findByEmail(email);

        if(optionalMember.isPresent()){
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    // 닉네임 중복 체크
    public boolean verifyExistNickname(String nickname){
        Optional<Member> optionalMember = memberRepository.findByNickname(nickname);

        // 닉네임이 이미 존재하면 true, 존재하지 않으면 false
        if(optionalMember.isPresent())
            return true;
        else
            return false;
    }
}
