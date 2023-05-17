//내부 import

//외부 import
import styled from 'styled-components';

const Review_Title = () => {
  return (
    <ReviewTitleContainer>
      <HotReviewTitle>푸피 감수성 MAX 많은 공감을 받는 리뷰</HotReviewTitle>
      <HotReviewBox>핫 리뷰</HotReviewBox>
      <MemberReviewTitle>회원님들의 식당리뷰</MemberReviewTitle>{' '}
    </ReviewTitleContainer>
  );
};
export default Review_Title;

//style

const ReviewTitleContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const HotReviewTitle = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;

  flex: 1;
  display: flex;
  align-items: end;

  padding-bottom: 10px;
`;
const HotReviewBox = styled.section`
  width: 100%;

  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemberReviewTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  padding-bottom: 0.8rem;
  margin-left: 3.5rem;
`;
