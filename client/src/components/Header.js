import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import Login from '../Login';
import SignUp from '../SignUp';

function Header() {
  return (
    <HeaderBox>
      <ContentBox>
        <Logo>
          <LogoLink href="/">
            <LogoImg src={process.env.PUBLIC_URL + '/logo.svg'} />
          </LogoLink>
        </Logo>

        <SearchBox>
          <input className="searchInput" type="text" placeholder="맛집을 검색하세요!" />
          <BiSearchAlt2 className="searchIcon" />
        </SearchBox>

        <LogBox>
          <Login className="loginLink"> 로그인 </Login>
          {/* <LoginLink>로그인</LoginLink> */}
          <SignUp className="loginLink"> 회원가입 </SignUp>
          {/* <RegistLink>회원가입</RegistLink> */}
        </LogBox>
      </ContentBox>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 10px -10px #999;

  //헤더 천장에 달라 붙게 - sinyaenok
  background-color: #fff;
  position: sticky;

  top: 0;
  left: 0;
  //swiper보다 z-index를 높게 줌
  z-index: 10;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1264px;
  height: 100%;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`;

const LogoLink = styled.a``;

const LogoImg = styled.img`
  width: 200px;
  height: 40px;
`;

const SearchBox = styled.div`
  width: 50%;
  position: relative;
  .searchInput {
    &::placeholder {
      color: #ff0099;
    }
    box-sizing: border-box;
    width: 100%;
    padding: 12px 24px;
    background-color: transparent;
    transition: transform 250ms ease-in-out;
    border-radius: 50px;
    border: 2px solid #ff0099;
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    &:hover,
    &:focus {
      padding: 12px 24px;
      outline: 0;
      border: 1px solid transparent;
      border-bottom: 1px solid #ff0099;
      border-radius: 0;
    }
  }
  .searchIcon {
    position: absolute;
    top: calc(50% - 8px);
    right: 24px;
    color: #ff0099;
  }
`;

// const LoginLink = styled.button`
//   color: #ff0099;
//   background-color: #fff;
//   font-size: 13px;
//   margin-right: 10px;
//   padding: 10px;
//   border: 1px solid #ff0099;
//   border-radius: 3px;
//   width: 70px;
//   height: 33px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   transition: all 0.5s;

//   &:hover,
//   &:focus {
//     background-color: #fabbc6;
//     color: #fff;
//     border: none;
//   }

//   &:focus {
//     box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
//   }
// `;

const LogBox = styled.div`
  display: flex;
  justify-content: center;
  width: 216px;
`;

// const LoginLink = styled.button`
//   color: #ff0099;
//   background-color: #fff;
//   font-size: 13px;
//   margin-right: 10px;
//   padding: 10px;
//   border: 1px solid #ff0099;
//   border-radius: 3px;
//   width: 70px;
//   height: 33px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   transition: all 0.5s;

//   &:hover,
//   &:focus {
//     background-color: #fabbc6;
//     color: #fff;
//     border: none;
//   }

//   &:focus {
//     box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
//   }
// `;

// const RegistLink = styled.button`
//   background-color: #ff0099;
//   border-radius: 3px;
//   border: none;
//   color: #fff;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 13px;
//   margin: 0;
//   outline: none;
//   padding: 8px 0.8em;
//   white-space: nowrap;
//   transition: all 0.5s;

//   &:hover,
//   &:focus {
//     background-color: #e11d48;
//   }

//   &:focus {
//     box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
//   }

//   &:active {
//     background-color: #0064bd;
//     box-shadow: none;
//   }
// `;

export default Header;
