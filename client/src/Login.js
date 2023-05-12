import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
// import LoginLink from './components/Header.js';

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`;

const LogoImg = styled.img`
  width: 200px;
  height: 40px;
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
`;

const LoginInput = styled.input`
  /* 입력  */
  margin-bottom: 10px;
`;

const LoginSubmitButton = styled.button`
  color: #ff0099;
  background-color: #fff;
  font-size: 13px;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ff0099;
  border-radius: 3px;
  width: 100rm;
  height: 33px;
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

const LoginExitButton = styled.button`
  background-color: #fff;
  border: none;
`;

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // 로그인 처리
    console.log('email:', email);
    console.log('password:', password);

    handleModalClose();
  };

  return (
    <>
      <LoginButton onClick={handleModalOpen}>로그인</LoginButton>
      {isModalOpen && (
        <ModalBackground>
          <ModalContent>
            <Logo>
              <LogoImg src={process.env.PUBLIC_URL + '/logo.svg'} />
            </Logo>
            <LoginExitButton onClick={handleModalClose}>X</LoginExitButton>
            <LoginForm onSubmit={handleSubmit}>
              <LoginInput
                type="email"
                placeholder="example@email.com"
                value={email}
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
};

export default Login;
