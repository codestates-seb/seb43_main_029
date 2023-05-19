import axios from 'axios';
import { useEffect, useState } from 'react';
import ReviewUser from './ReviewUser';
import styled from 'styled-components';

function RestaurantReview({ restaurantId }) {
  const [initialReviews, setInitialReviews] = useState([]);

  const reviews = initialReviews.filter(el => el.restaurantId === restaurantId);

  const restaurantReviewApi = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`);
    setInitialReviews(response.data);
  };

  useEffect(() => {
    restaurantReviewApi();
  }, []);

  return (
    <ReviewBlock>
      <ReviewTitle>
        <h2>리뷰 ({reviews.length})</h2>
        <button>리뷰 남기기</button>
      </ReviewTitle>
      <ReviewList>
        {reviews &&
          reviews.map(review => {
            return (
              <Review key={review.reviewId}>
                <ReviewUser memberId={review.memberId} />
                <ReviwContent>
                  <p>{review.createdAt.slice(0, 10)}</p>
                  <p>{review.content}</p>
                  <ReviewImg>
                    {review.images &&
                      review.images.map((image, idx) => {
                        return <img src={image} key={idx} alt={idx} />;
                      })}
                  </ReviewImg>
                </ReviwContent>
                <div>
                  <p>{review.score}</p>
                </div>
              </Review>
            );
          })}
      </ReviewList>
    </ReviewBlock>
  );
}

const ReviewBlock = styled.section``;

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

const ReviewImg = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  img {
    width: 150px;
  }
`;

export default RestaurantReview;
