import styled from 'styled-components';
import { TiThumbsUp } from 'react-icons/ti';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import Modal from './Modal';
import { useState } from 'react';

export const ReviewComponent = ({ idx, review }) => {
  const [isModal, setIsModal] = useState(false);

  function openModal() {
    setIsModal(true);
  }
  function closeModal() {
    setIsModal(false);
  }

  return (
    <Review key={idx}>
      <div className="padding">
        <ReviewTitle className="underLine">
          <a href="/">
            <MarginP>{review.name}</MarginP>
          </a>
          <p>{review.score}</p>
        </ReviewTitle>
        <ReviewContent className="underLine">
          <p>{review.content}</p>
        </ReviewContent>
        <ReviewDate>
          <ReviewThumbsUp>
            <TiThumbsUp className="icon" />
            {review.voteCount}
          </ReviewThumbsUp>
          <MdOutlineInsertPhoto className="icon" onClick={openModal} />
          <p>작성날짜</p>
        </ReviewDate>
      </div>
      <Modal isOpen={isModal} closeModal={closeModal} gallery={review.images} />
    </Review>
  );
};

const Review = styled.li`
  border-radius: 10px;
  background: #f2f2f2;
  .underLine {
    border-bottom: 1px solid #e5e5e5;
  }
  .padding {
    padding: 5px 15px;
    width: 100%;
  }
  display: inline-flex;
  margin-right: 1rem;
  width: 22%;
  @media screen and (max-width: 1023px) {
    width: 30%;
  }
  @media screen and (max-width: 768px) {
    width: 45%;
  }
`;
const ReviewTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ReviewContent = styled.div`
  p {
    height: 120px;
    position: relative;
    line-height: 1.5rem;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    word-break: keep-all;
    margin: 12px 0 15px;
  }
`;
const ReviewDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 11px 0;
  .icon {
    font-size: 1.125rem;
  }
`;
const ReviewThumbsUp = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MarginP = styled.p`
  margin: 11px 0;
`;

export default ReviewComponent;
