import axios from 'axios';
import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginSuccess } from '../../actions/index';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../redux/authReducer';

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [clickLogin, setClickLogin] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.Auth.token);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setUsername('');
    setPassword('');
  };

  const handleEmailChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setClickLogin(!clickLogin);

    // 로그인 처리
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        username,
        password,
      })
      .then(response => {
        if (response.status === 200) {
          // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
          axios.defaults.headers.common['Authorization'] = `${accessToken}`;
          // memberId를 기존 회원들과 비교하도록 변수처리
          const apiMemberId = response.headers.memberid;
          // 기존 db의 회원정보중 memberId가 같은 정보 조회

          dispatch(setToken(response.headers.authorization));
          axios.get(`${process.env.REACT_APP_API_URL}/members/${apiMemberId}`).then(response => {
            if (response.status === 200) {
              // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
              axios.defaults.headers.common['Authorization'] = `${accessToken}`;

              const nickname = response.data.data.nickname;
              const url = response.data.data.url;
              const memberId = response.data.data.memberId;
              dispatch(login());
              dispatch(
                loginSuccess({
                  nickname,
                  url,
                  memberId,
                })
              );
            }
          });

          navigate();
        }
      })
      .catch(error => {
        console.log(error);
      });

    handleModalClose();
  };

  return (
    <>
      <LoginButton onClick={handleModalOpen}>로그인</LoginButton>
      {isModalOpen && (
        <ModalBackground>
          <ModalContent onClick={e => e.stopPropagation()}>
            <LoginExitButton onClick={handleModalClose}>X</LoginExitButton>
            <Logo>
              <LogoImg src={process.env.PUBLIC_URL + '/logo.svg'} />
            </Logo>
            <H3> 로그인 </H3>
            <LoginForm onSubmit={handleSubmit}>
              <LoginInput
                type="email"
                placeholder="example@email.com"
                value={username}
                onChange={handleEmailChange}
              />
              <LoginInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <LoginSubmitButton type="submit">로그인</LoginSubmitButton>
              <p> 아직 계정이 없으신가요? 회원가입</p>
              <p> ID / 비밀번호를 잊어버리셨나요?</p>
            </LoginForm>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
}

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  margin: 0px 0px 20px 0px;
`;

const LogoImg = styled.img`
  width: 400px;
  height: 80px;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  align-items: right;
  justify-content: right;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const LoginButton = styled.a`
  color: #ff0099;
  background-color: #fff;
  font-size: 13px;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ff0099;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;

  &:hover,
  &:focus {
    background-color: #fabbc6;
    color: #fff;
    border: none;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const LoginInput = styled.input`
  /* 입력  */
  margin: 10px 0px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 20px;
  &:hover,
  &:focus {
    border: 1px solid #ff0099;
  }
`;

const H3 = styled.h3`
  color: #ff0099;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 20px 0px;
`;

const LoginSubmitButton = styled.button`
  background-color: #fff;
  color: #ff0099;
  font-size: 16px;
  border: 1px solid #ff0099;
  border-radius: 3px;
  margin: 10px 0px 10px 0px;
  padding: 8px 0.8em;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;

  &:hover,
  &:focus {
    background-color: #fabbc6;
    color: #fff;
    border: none;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  &:active {
    background-color: #0064bd;
    box-shadow: none;
  }
`;

const LoginExitButton = styled.button`
  background-color: #fff;
  border: none;
  font-size: 20px;
`;

export default Login;
