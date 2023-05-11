import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';

const SignUpButton = styled.a`
  /* 버튼 스타일 */
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

const SignUp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
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
                        <button onClick={handleModalClose}>닫기</button>
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
                            <SignUpSubmitButton type="submit">회원가입</SignUpSubmitButton>
                        </SignUpForm>

                    </ModalContent>
                </ModalBackground>
            )}
        </>
    );
};

export default SignUp;