package application.member.controller;

import application.dto.SingleResponseDto;
import application.image.service.AwsS3Service;
import application.member.dto.MemberDto;
import application.member.entity.Member;
import application.member.mapper.MemberMapper;
import application.member.service.MemberService;
import application.utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@Validated
@RequestMapping("/members")
public class MemberController {

    private final MemberMapper memberMapper;
    private final MemberService memberService;
    private final AwsS3Service awsS3Service;
    private static String dirName = "profile-images";


    public MemberController(MemberMapper memberMapper, MemberService memberService, AwsS3Service awsS3Service) {
        this.memberMapper = memberMapper;
        this.memberService = memberService;
        this.awsS3Service = awsS3Service;
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody){
        Member member = memberMapper.memberPostDtoToMember(requestBody);

        Member createdMember = memberService.createMember(member);
        URI location = UriCreator.createUri("/members", createdMember.getMemberId());

        return ResponseEntity.created(location).build();
    }


    @GetMapping("/check")
    public ResponseEntity checkNickname(@Valid @RequestBody MemberDto.PatchNickname requestBody){

        Member member = memberMapper.memberPatchNicknameDtoToMember(requestBody);
        boolean exist = memberService.verifyExistNickname(member.getNickname());

        if(exist)
            return ResponseEntity.badRequest().build();
        else
            return ResponseEntity.ok().build();
    }

    // 닉네임 변경
    @PatchMapping("/{member-id}/nickname")
    public ResponseEntity patchMemberNickname(@PathVariable("member-id") @Positive long memberId,
                                              @Valid @RequestBody MemberDto.PatchNickname requestBody){
        requestBody.setMemberId(memberId);

        Member member = memberMapper.memberPatchNicknameDtoToMember(requestBody);
        Member updatedMember = memberService.updateMember(member);

        return new ResponseEntity<>(
                new SingleResponseDto<>(memberMapper.memberToMemberResponseDto(updatedMember)),
                HttpStatus.OK);
    }

    // 프로필 변경
    // TODO : 이미지 변경 추가시 수정
    @PatchMapping("/{member-id}/profile")
    public ResponseEntity patchMemberProfile(@PathVariable("member-id") @Positive long memberId,
                                             @RequestPart(required = false) MultipartFile multipartFile
                                             ){


        Member member = memberService.findVerifiedMember(memberId);

        //member = memberService.deleteMemberImage(member);

        member = memberService.addMemberImage(member, awsS3Service.uploadProfileFile(multipartFile, dirName));


        return new ResponseEntity<>(
                new SingleResponseDto<>(memberMapper.memberToMemberResponseDto(member)),
                HttpStatus.OK);
    }

    // 회원 마이페이지(일반회원-점주)
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){

        Member member = memberService.findMember(memberId);

        List<String> roles = member.getRoles();
        String role = roles.get(0);

        if(role.equals("OWNER")){
            return new ResponseEntity<>(
                    new SingleResponseDto<>(memberMapper.memberToMemberResponseOwnerDto(member)), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(
                    new SingleResponseDto<>(memberMapper.memberToMemberResponseDto(member)), HttpStatus.OK);
        }

    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){
        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
