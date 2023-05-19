import Rating from '@mui/material/Rating';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

function ReviewPostModal({ isOpen, closeModal, name }) {
  const [star, setStar] = useState();
  const [image, setImage] = useState(null);
  const [files, setFiles] = useState({});
  const [preview, setPreview] = useState(false);

  function handleChangeStarRating(e) {
    setStar(e.target.value);
  }
  console.log(star);

  function imgChange(e) {
    const file = e.target.files[0];

    setFiles(file);

    setPreview(!preview);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  function handleClickFormData() {
    const formdata = new FormData();
    formdata.append('multipartFile', files);
    console.log(files);
    const config = {
      Headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(`${process.env.REACT_APP_API_URL}/members/ `, formdata, config);
    closeModal();
  }
  return (
    <ModalBackground style={{ display: isOpen ? 'flex' : 'none' }}>
      <ModalBlock>
        <h3>{name}</h3>
        <ReviewRating>
          <p>평점을 매겨주세요!</p>
          <Rating
            name="half-rating"
            defaultValue={0}
            precision={0.5}
            size="large"
            onChange={handleChangeStarRating}
          />
        </ReviewRating>
        <ReviewContent placeholder="리뷰를 남겨주세요" />
        <div>
          <div>
            <ReviewImage background={image} htmlFor="file" />
            <form encType="multipart/form-data">
              <input
                id="file"
                type="file"
                onChange={imgChange}
                accept={'image/*'}
                className="hidden"
              />
            </form>
          </div>
          <div>
            <CloseButton onClick={closeModal}>취소</CloseButton>
            <button onClick={handleClickFormData}>올리기</button>
          </div>
        </div>
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
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const ModalBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #f0f0f0;
  max-width: 100%;
  max-height: 90%;
  padding: 3rem;
  border-radius: 30px;
  h3 {
    font-size: 1.5rem;
  }
`;

const ReviewRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const ReviewContent = styled.textarea`
  width: 500px;
  height: 200px;
  padding: 5px;
  font-size: 1.125rem;
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;

const ReviewImage = styled.label``;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.125rem;
  cursor: pointer;
`;

export default ReviewPostModal;
