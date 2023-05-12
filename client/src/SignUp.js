import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';

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

// const SignUpButton = styled.a`
//   /* 버튼 스타일 */
// `;

const SignUpButton = styled.button`
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

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignUpInput = styled.input`
  /* 입력 필드 스타일 */
  margin-bottom: 10px;
`;

const SignUpSubmitButton = styled.button`
  /* 회원가입 버튼 스타일 */
`;

const SignUpExitButton = styled.button`
  background-color: #fff;
  border: none;
`;

const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickName, setNickName] = useState('');
  const [businessCode, setBusinessCode] = useState('');

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

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
  };

  const handleNickNameChange = e => {
    setNickName(e.target.value);
  };
  const handleBusinessCodeChange = e => {
    setBusinessCode(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    // 회원가입 처리를 실행하는 함수
    console.log('email:', email);
    console.log('password:', password);
    console.log('confirmPassword:', confirmPassword);

    handleModalClose();
  };

  return (
    <>
      <SignUpButton onClick={handleModalOpen}>회원가입</SignUpButton>
      {isModalOpen && (
        <ModalBackground>
          <ModalContent>
            <Logo>
              <LogoImg src={process.env.PUBLIC_URL + '/logo.svg'} />
            </Logo>
            <SignUpExitButton onClick={handleModalClose}>X</SignUpExitButton>
            <SignUpForm onSubmit={handleSubmit}>
              <SignUpInput
                type="email"
                placeholder="이메일을 입력해주세요."
                value={email}
                onChange={handleEmailChange}
              />
              <SignUpInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={handlePasswordChange}
              />
              <SignUpInput
                type="password"
                placeholder="비밀번호를 다시 입력해주세요."
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <SignUpInput
                type="nickname"
                placeholder="닉네임"
                value={nickName}
                onChange={handleNickNameChange}
              />
              <SignUpInput
                type="businesscodee"
                placeholder="사업자 번호를 입력해주세요."
                value={businessCode}
                onChange={handleBusinessCodeChange}
              />
              <SignUpSubmitButton type="submit">회원가입</SignUpSubmitButton>
            </SignUpForm>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default SignUp;
