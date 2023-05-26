import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import axios from 'axios';

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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  align-items: right;
  justify-content: right;
`;

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
  margin-bottom: 20px;
`;

const SignUpInput = styled.input`
  /* 입력 필드 스타일 */
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
`;

const SignUpSubmitButton = styled.button`
  /* 회원가입 버튼 스타일 */
  background-color: #fff;
  color: #ff0099;
  border: 1px solid #ff0099;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 30px 0px 0px 0px;
  outline: none;
  padding: 8px 0.8em;
  white-space: nowrap;
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

const SignUpExitButton = styled.button`
  background-color: #fff;
  border: none;
  font-size: 20px;
`;

const CheckboxWrapper = styled.div`
  margin-top: 10px;
`;

const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessCode, setBusinessCode] = useState('');
  const [showBusinessCode, setShowBusinessCode] = useState(false);

  const handleCheckboxChange = () => {
    setShowBusinessCode(!showBusinessCode);
    setBusinessCode('');
  };

  const handleBusinessCodeChange = e => {
    setBusinessCode(e.target.value);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setNickName('');
    setPhone('');
    setBusinessCode('');
    setShowBusinessCode('');
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

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // 점주 회원가입 처리
    if (businessCode === '') {
      axios
        .post(`${process.env.REACT_APP_API_URL}/members`, {
          email,
          password,
          nickname,
          phone,
        })
        .then(response => {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/members`, {
          email,
          password,
          nickname,
          phone,
          companyNumber: `${businessCode}`,
        })
        .then(response => {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

    handleModalClose();
  };

  return (
    <>
      <SignUpButton onClick={handleModalOpen}>회원가입</SignUpButton>
      {isModalOpen && (
        <ModalBackground>
          <ModalContent>
            <SignUpExitButton onClick={handleModalClose}>X</SignUpExitButton>
            <Logo>
              <LogoImg src={process.env.PUBLIC_URL + '/logo.svg'} />
            </Logo>
            <H3> 회원가입 </H3>
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
                type="text"
                placeholder="닉네임"
                value={nickname}
                onChange={handleNickNameChange}
              />
              <SignUpInput
                type="text"
                placeholder="연락처"
                value={phone}
                onChange={handlePhoneChange}
              />
              <CheckboxWrapper>
                <label>
                  <input
                    type="checkbox"
                    checked={showBusinessCode}
                    onChange={handleCheckboxChange}
                  />
                  사업자이신가요?
                </label>
              </CheckboxWrapper>
              {showBusinessCode && (
                <SignUpInput
                  type="businesscodee"
                  placeholder="사업자 번호를 입력해주세요."
                  value={businessCode}
                  onChange={handleBusinessCodeChange}
                />
              )}
              <SignUpSubmitButton type="submit">회원가입</SignUpSubmitButton>
            </SignUpForm>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default SignUp;
