import styled from 'styled-components';

function Modal({ isOpen, closeModal, gallery }) {
  return (
    <ModalBackground style={{ display: isOpen ? 'flex' : 'none' }}>
      <ModalBlock>
        <h3>리뷰 이미지</h3>
        <Gallery>
          {gallery.map((image, idx) => {
            return (
              <li key={idx}>
                <img src={image} alt={idx} />
              </li>
            );
          })}
        </Gallery>
        <CloseBtn onClick={closeModal}>취소</CloseBtn>
      </ModalBlock>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 5;
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
  padding: 5rem;
  border-radius: 30px;
  h3 {
    font-size: 2rem;
  }
`;

const Gallery = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  img {
    max-width: 400px;
    width: 100%;
  }
`;

const CloseBtn = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  font-size: 1.125rem;
  cursor: pointer;
`;

export default Modal;
