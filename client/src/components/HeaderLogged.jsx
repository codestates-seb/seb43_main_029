import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { BiSearchAlt2 } from 'react-icons/bi';
import { logout } from '../actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function HeaderLogged({ userInfo }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const memberId = userInfo.memberId;

  const handleLogOutBtn = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleMyPageBtn = () => {
    navigate(`/mypage/${memberId}`);
  };

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

        <ProfileBox>
          <ProfileLink onClick={handleMyPageBtn} />
          <LogoutLink onClick={handleLogOutBtn}>Log out</LogoutLink>
        </ProfileBox>
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
  z-index: 1;
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

const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  width: 216px;
`;

const ProfileLink = styled(CgProfile)`
  color: #ff0099;
  margin-right: 10px;
  width: 70px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;

  &:hover,
  &:focus {
    color: #fabbc6;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }
`;

const LogoutLink = styled.button`
  background-color: #ff0099;
  border-radius: 3px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  white-space: nowrap;
  transition: all 0.5s;

  &:hover,
  &:focus {
    background-color: #e11d48;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  &:active {
    background-color: #0064bd;
    box-shadow: none;
  }
`;

export default HeaderLogged;
