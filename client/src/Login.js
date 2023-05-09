import React from 'react'; // eslint-disable-line no-unused-vars
import styled, { css } from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 14px;

  ${props => props.outline && css`
    background-color: transparent;
    color: #007bff;
    border: 1px solid #007bff;
  `}
`;

function Login({ onClose }) {
  return (
    <ModalBackground>
      <ModalContent>
        <h2>로그인</h2>
        <form>
          <FormGroup>
            <Label>아이디:</Label>
            <Input type="text" name="id" />
          </FormGroup>
          <FormGroup>
            <Label>비밀번호:</Label>
            <Input type="password" name="password" />
          </FormGroup>
          <Button type="submit">로그인</Button>
          <Button outline onClick={onClose}>닫기</Button>
        </form>
      </ModalContent>
    </ModalBackground>
  );
}

export default Login;