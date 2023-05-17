package application.member.mapper;

import application.member.dto.MemberDto;
import application.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostDtoToMember(MemberDto.Post requestBody);
    Member memberPatchNicknameDtoToMember(MemberDto.PatchNickname requestBody);
    @Mapping(source = "url", target = "image.url")
    Member memberPatchProfileDtoToMember(MemberDto.PatchProfile requestBody);
    @Mapping(source = "image.url", target = "url")
    @Mapping(source = "member.roles", target = "role")
    MemberDto.Response memberToMemberResponseDto(Member member);
    @Mapping(source = "member.restaurants", target = "restaurantList")
    @Mapping(source = "image.url", target = "url")
    @Mapping(source = "member.roles", target = "role")
    MemberDto.ResponseOwner memberToMemberResponseOwnerDto(Member member);
}
