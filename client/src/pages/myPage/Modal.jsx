import styled from 'styled-components';
import profile1 from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';

function Modal({ isOpen, closeModal, setImg }) {
  function changeImg(e) {
    setImg(e.target.src);
  }
  return (
    <ModalBackground style={{ display: isOpen ? 'flex' : 'none' }}>
      <ModalBlock>
        <h3>프로필 이미지</h3>
        <UserImgList>
          <UserImg src={profile1} onClick={changeImg} />
          <UserImg src={profile2} onClick={changeImg} />
        </UserImgList>

        <CloseBtn onClick={closeModal}>취소</CloseBtn>
      </ModalBlock>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  background: #000;
  max-width: 100%;
  max-height: 90%;
  color: #fff;
  padding: 3rem;
  h3 {
    font-size: 2rem;
  }
`;

const UserImgList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const UserImg = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  cursor: pointer;
`;

const CloseBtn = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  font-size: 1.125rem;
`;

export default Modal;
