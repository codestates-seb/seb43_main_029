package application.member.service;

import application.auth.utils.CustomAuthorityUtils;
import application.exception.BusinessLogicException;
import application.exception.ExceptionCode;
import application.image.dto.ImageDto;
import application.image.entity.Image;
import application.image.mapper.ImageMapper;
import application.image.repository.ImageFileRepository;
import application.image.service.AwsS3Service;
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
    private final ImageFileRepository imageFileRepository;
    private final ImageMapper imageMapper;
    private final AwsS3Service awsS3Service;


    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils, ImageFileRepository imageFileRepository, ImageMapper imageMapper, AwsS3Service awsS3Service) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
        this.imageFileRepository = imageFileRepository;
        this.imageMapper = imageMapper;
        this.awsS3Service = awsS3Service;
    }

    public Member createMember(Member member){
        verifyExistEmail(member.getEmail());

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getEmail(), member.getCompanyNumber());
        member.setRoles(roles);

        Optional<Image> image = imageFileRepository.findById(11L);

        Image findImage = image.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.IMAGE_NOT_FOUND));

        member.setImage(findImage);

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

    public Member addMemberImage(Member member, ImageDto.ImageRequestDto imageRequestDto){

        Image image = imageMapper.imageRequestDtoToimage(imageRequestDto);
        Image savedImage = imageFileRepository.save(image);

        member.setImage(savedImage);

        return memberRepository.save(member);
    }

    public Member deleteMemberImage(Member member){

        if(member.getImage().getImageId() != 11L){
            Image image = member.getImage();
            imageFileRepository.deleteById(image.getImageId());
            awsS3Service.deleteFile(image.getUrl());
            member.setImage(null);
        }



        return memberRepository.save(member);
    }
}
