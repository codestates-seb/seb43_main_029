import axios from 'axios';
import Rating from '@mui/material/Rating';
import ReviewUser from './ReviewUser';
import { FiThumbsUp } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../../components/Button';

function ReviewComponent({ review, reviewId }) {
  const userInfo = useSelector(state => state.userinfo.user);
  const memberId = userInfo.memberId;
  const accessToken = useSelector(state => state.Auth.token);

  function thumbsUpReview() {
    axios
      .post(`${process.env.REACT_APP_API_URL}/reviews/${reviewId}/like/${memberId}`, {
        headers: {
          Authorization: `${accessToken}`,
        },
      })
      .then()
      .catch(error => console.log(error));
  }

  function deleteReview() {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/reviews/${reviewId}/${memberId}`, {
        headers: {
          Authorization: `${accessToken}`,
        },
      })
      .catch(error => console.log(error));
  }

  return (
    <Review key={review.reviewId}>
      <ReviewUser memberId={review.memberId} likeCount={review.likeCount} />
      <ReviwContent>
        <p>{String(review.createdAt).slice(0, 10)}</p>
        <p>{review.comment}</p>
        <ReviewImg>
          {review.imageList &&
            review.imageList
              .slice(0)
              .reverse()
              .map(image => {
                return (
                  <li key={image.imageId}>
                    <img src={image.url} alt={image.imageId} />;
                  </li>
                );
              })}
        </ReviewImg>
      </ReviwContent>
      <ReviewMore>
        <Rating name="read-only" value={review.score} precision={0.5} readOnly />
        <LikeButton onClick={thumbsUpReview}>
          <ReviewLike className="icon" />
        </LikeButton>
        {Number(review.memberId) === Number(memberId) ? (
          <>
            <Button
              onClick={deleteReview}
              background={'#D9D9D9'}
              border={'#D9D9D9'}
              color={'#2f3134'}
            >
              삭제
            </Button>
            {/* <button onClick={editReview}>수정</button> */}
          </>
        ) : null}
      </ReviewMore>
    </Review>
  );
}

const Review = styled.li`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding: 2rem 0 3rem;
  border-bottom: 1px solid #2f3134;
`;

const ReviwContent = styled.div`
  line-height: 1.5rem;
  flex: 1;
`;

const ReviewImg = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  li {
    position: relative;
    width: 128px;
    height: 128px;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
  }
`;

const ReviewMore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  }
`;
const LikeButton = styled.button`
  background: transparent;
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  &:hover {
    background: #ff0099;
    .icon {
      color: #fff;
    }
  }
`;
const ReviewLike = styled(FiThumbsUp)`
  cursor: pointer;
  transition: ease-in-out 0.3s;
  &:hover {
    color: #fff;
  }
`;
export default ReviewComponent;
