import axios from 'axios';
import { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import ReviewUser from './ReviewUser';
import styled from 'styled-components';
import ReviewPostModal from './ReviewPostModal';
import { FiThumbsUp } from 'react-icons/fi';
import { useSelector } from 'react-redux';

function RestaurantReview({ restaurantId, name }) {
  const [reviews, setReviews] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const accessToken = useSelector(state => state.Auth.token);

  const restaurantReviewApi = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/reviews/${restaurantId}`);
    axios.defaults.headers.common['Authorization'] = `${accessToken}`;
    setReviews(response.data.data);
  };

  useEffect(() => {
    restaurantReviewApi();
  }, []);

  function openModal() {
    setIsModal(true);
  }
  function closeModal() {
    setIsModal(false);
  }

  return (
    <ReviewBlock>
      <ReviewTitle>
        <h2>
          리뷰 ({Array.isArray(reviews) ? reviews.length : !Array.isArray(reviews) ? 1 : null})
        </h2>
        <button onClick={openModal}>리뷰 남기기</button>
      </ReviewTitle>
      <ReviewList>
        {Array.isArray(reviews)
          ? reviews.map(review => {
              return (
                <Review key={review.reviewId}>
                  <ReviewUser memberId={review.memberId} likecount={review.likecount} />
                  <ReviwContent>
                    <p>{String(reviews.createdAt).slice(0, 10)}</p>
                    <p>{review.comment}</p>
                    <ReviewImg>
                      {reviews.imageList &&
                        reviews.imageList.map(image => {
                          return (
                            <li key={image.imageId}>
                              <img src={image.url} alt={image.imageId} />;
                            </li>
                          );
                        })}
                    </ReviewImg>
                  </ReviwContent>
                  <div>
                    <Rating name="read-only" value={review.score} precision={0.5} readOnly />
                  </div>
                </Review>
              );
            })
          : null}
        {!Array.isArray(reviews) ? (
          <Review>
            <ReviewUser memberId={reviews.memberId} likecount={reviews.likecount} />
            <ReviwContent>
              <p>{String(reviews.createdAt).slice(0, 10)}</p>
              <p>{reviews.comment}</p>
              <ReviewImg>
                {reviews.imageList &&
                  reviews.imageList.map(image => {
                    return (
                      <li key={image.imageId}>
                        <img src={image.url} alt={image.imageId} />;
                      </li>
                    );
                  })}
              </ReviewImg>
            </ReviwContent>
            <div>
              <Rating name="read-only" value={reviews.score} precision={0.5} readOnly />
              <FiThumbsUp className="icon" />
            </div>
          </Review>
        ) : null}
      </ReviewList>
      <ReviewPostModal
        isOpen={isModal}
        closeModal={closeModal}
        name={name}
        restaurantId={restaurantId}
      />
    </ReviewBlock>
  );
}

const ReviewBlock = styled.section`
  .icon {
    font-size: 1.5rem;
    color: #9e9e9e;
    margin-top: -2px;
  }
`;

const ReviewTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h2 {
    font-size: 2rem;
  }
`;

const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
`;

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

export default RestaurantReview;
