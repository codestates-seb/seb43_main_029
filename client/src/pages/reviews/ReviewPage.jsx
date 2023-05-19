import styled from 'styled-components';
import ReviewList from './ReviewList';

function Reviews() {
  return (
    <ReviewPageBox>
      <ContentBox>
        <ReviewTitle>리뷰 목록</ReviewTitle>
        <ReviewList />
      </ContentBox>
    </ReviewPageBox>
  );
}

const ReviewPageBox = styled.section`
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  a {
    color: #2f3134;
    text-decoration: none;
  }
`;

const ContentBox = styled.div`
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export default Reviews;
