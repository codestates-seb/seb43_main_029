//내부 import
import Modal from '../../../../components/Modal';
//외부 import
import styled from 'styled-components';
import { TiThumbsUp } from 'react-icons/ti';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ReviewComponent = ({
  reviewId,
  comment,
  restaurantId,
  restaurantName,
  score,
  likeCount,
  imageList,
  createdAt,
}) => {
  const [isModal, setIsModal] = useState(false);

  function openModal() {
    setIsModal(true);
  }
  function closeModal() {
    setIsModal(false);
  }
  return (
    <Review key={reviewId}>
      <div className="padding">
        <ReviewTitle className="underLine">
          <Link to={`/restaurant/${restaurantId}`}>
            <MarginP>{restaurantName}</MarginP>
          </Link>
          <p>{score}</p>
        </ReviewTitle>
        <ReviewContent className="underLine">
          <p>{comment}</p>
        </ReviewContent>
        <ReviewDate>
          <ReviewThumbsUp>
            <TiThumbsUp className="icon" />
            {likeCount}
          </ReviewThumbsUp>

          {imageList === null ? null : (
            <MdOutlineInsertPhoto className="icon" onClick={openModal} />
          )}
          <p>{createdAt.slice(0, 10)}</p>
        </ReviewDate>
      </div>
      <Modal isOpen={isModal} closeModal={closeModal} gallery={imageList} />
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
