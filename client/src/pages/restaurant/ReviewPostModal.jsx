import Rating from '@mui/material/Rating';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { BsPlusSquare } from 'react-icons/bs';
import { useSelector } from 'react-redux';

function ReviewPostModal({ isOpen, closeModal, name, restaurantId }) {
  const userInfo = useSelector(state => state.userinfo.user);
  const memberId = userInfo.memberId;
  const accessToken = useSelector(state => state.Auth.token);

  const [score, setScore] = useState();
  const [comment, setComment] = useState();
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [PreviewImage, setPreviewImage] = useState([]);

  function handleChangeStarRating(e) {
    setScore(e.target.value);
  }

  function handleChangeComment(e) {
    setComment(e.target.value);
  }

  function imgChange(e) {
    let reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImages([...images, e.target.files[0]]);
      setFiles([...images, e.target.files[0]]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl) {
        setPreviewImage([...PreviewImage, previewImgUrl]);
      }
    };
    console.log(files);
  }

  const data = {
    memberId: Number(memberId),
    restaurantId: Number(restaurantId),
    comment,
    score: Number(score),
  };

  function handleClickFormData() {
    const formdata = new FormData();
    // formdata.append('reviewPostDto', data);
    //객체를 Json타입으로 파싱하여 Blob객테 생성, type에 json 타입 지정
    formdata.append(
      'reviewPostDto',
      new Blob([JSON.stringify(data)], {
        type: 'application/json',
      })
    );

    // Object.entries(data).forEach(item => formdata.append(item[0], item[1]));
    formdata.append('multipartFile', files);

    const config = {
      headers: {
        Authorization: `${accessToken}`,
      },
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/reviews`, formdata, config)
      .catch(error => console.log(error));

    closeModal();
    console.log(data);
    for (let key of formdata.keys()) {
      console.log(key);
    }

    /* value 확인하기 */
    for (let value of formdata.values()) {
      console.log(value);
    }
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
        <ReviewContent placeholder="리뷰를 남겨주세요" onChange={handleChangeComment} />
        <ReviewImage>
          <ReviewImageUpload htmlFor="file">
            <BsPlusSquare />
          </ReviewImageUpload>
          {images &&
            images.map((image, index) => {
              return <ReviewImagePreview key={index} background={PreviewImage[index]} />;
            })}
          <input id="file" type="file" onChange={imgChange} accept={'image/*'} className="hidden" />
        </ReviewImage>
        <div>
          <CloseButton onClick={closeModal}>취소</CloseButton>
          <button onClick={handleClickFormData}>올리기</button>
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
const ReviewImage = styled.div`
  .hidden {
    display: none;
  }
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const ReviewImageUpload = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 85px;
  background: ${props => `url(${props.background}) no-repeat center`};
  cursor: pointer;
  border: 1px solid #b9b9b9;
  color: #b9b9b9;
`;

const ReviewImagePreview = styled.div`
  width: 90px;
  height: 90px;
  background: ${props => `url(${props.background}) no-repeat center`};
  background-size: 200px;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.125rem;
  cursor: pointer;
`;

export default ReviewPostModal;
