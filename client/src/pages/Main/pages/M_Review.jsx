//내부 import
import { M_RootContainer, M_TopContainer, M_BottomContainer, M_ContentBox } from '../styled';
import Review_Title from '../component/Review/Review_Title';
// import Review from '../component/Review/ReviewList';
import ReviewPagination from '../component/Review/ReviewPagination';
//외부 import
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
const M_Review = () => {
  const [reviews, setReviews] = useState([]);
  const firstSlice = 0;
  const lastSlice = 7;
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/reviews/mostLiked`).then(response => {
      const sortedData = response.data.slice(firstSlice, lastSlice);
      setReviews(sortedData);
    });
  }, []);

  console.log(reviews);

  return (
    <R_RootContainer>
      <M_TopContainer>
        <M_ContentBox>
          <Review_Title />
        </M_ContentBox>
      </M_TopContainer>
      <M_BottomContainer>
        <M_ContentBox>
          <ReviewPagination reviews={reviews} />
          {/* {reviews.map(review => {
            return (
              <Review
                key={review.reviewsId}
                reviewId={review.reviewId}
                comment={review.comment}
                restaurantId={review.restaurantId}
                restaurantName={review.restaurantName}
                score={review.score}
                likeCount={review.likeCount}
                imageList={review.imageList}
                createdAt={review.createdAt}
              />
            );
          })} */}
        </M_ContentBox>
      </M_BottomContainer>
    </R_RootContainer>
  );
};

export default M_Review;

//style
const R_RootContainer = styled(M_RootContainer)`
  background-color: #cee6eb;
`;
