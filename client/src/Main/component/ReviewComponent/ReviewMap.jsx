import styled from 'styled-components';
import MyReview from './MyReview';
import dummy from '../../dummy.json';
const ReviewMap = () => {
  const reviews = dummy.review;
  const ReviewMapContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 50px;
  `;
  return (
    <ReviewMapContainer>
      {reviews.map(review => (
        <div key={review.id}>
          <MyReview
            name={review.name}
            createdAt={review.createdAt}
            rating={review.rating}
            comment={review.comment}
          />
        </div>
      ))}
    </ReviewMapContainer>
  );
};

export default ReviewMap;
