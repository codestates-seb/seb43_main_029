import styled from 'styled-components';
import { VscGithub } from 'react-icons/vsc';

function Footer() {
  return (
    <FooterBox>
      <ContentBox>
        <FooterLeftBox>
          <Logo>
            <LogoLink href="#">
              <LogoImg src={process.env.PUBLIC_URL + '/logo.svg'} />
            </LogoLink>
          </Logo>
          <TeamInfo>
            <TeamName># Be Fearless</TeamName>
            <GithubLink href="#">
              <VscGithub />
            </GithubLink>
          </TeamInfo>
        </FooterLeftBox>
        <FooterRightBox>
          <FeMember>
            <Title>Front-end</Title>
            <Member>여동희 / @Latada</Member>
            <Member>심현보 / @NoblesseCode</Member>
            <Member>안현우 / @uyV-git</Member>
            <Member>황에녹 / @sinyaenok</Member>
          </FeMember>
          <BeMember>
            <Title>Back-end</Title>
            <Member>윤근상 / @YunGeunSang</Member>
            <Member>유제선 / @YuJeSeon</Member>
            <Member>장준영 / @SEBBE43JUN</Member>
          </BeMember>
        </FooterRightBox>
      </ContentBox>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  height: 200px;
  background-color: #2f3134;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1264px;
  height: 100%;
`;

const FooterLeftBox = styled.div``;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 20px;
`;

const LogoLink = styled.a``;

const LogoImg = styled.img`
  width: 200px;
  height: 60px;
`;

const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
`;

const TeamName = styled.div`
  color: #fff;
  font-size: 20px;
  margin-right: 15px;
  font-weight: bold;
`;

const GithubLink = styled.a`
  color: #fff;
  transition: all 0.5s;

  &:hover {
    color: #ff0099;
  }
  & svg {
    font-size: 30px;
  }
`;

const FooterRightBox = styled.div`
  display: flex;
`;

const FeMember = styled.div`
  color: #fff;
  margin-right: 40px;
`;

const BeMember = styled.div`
  color: #fff;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Member = styled.div`
  line-height: 1.5;
`;
export default Footer;
