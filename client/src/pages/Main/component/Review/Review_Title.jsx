//내부 import

//외부 import
import styled from 'styled-components';

const Review_Title = () => {
  return (
    <ReviewTitleContainer>
      <HotReviewTitle>
        <div className="subTitle">푸피 감수성 MAX</div>
        <div className="Title">많은 공감을 받는 리뷰</div>
      </HotReviewTitle>
      <HotReviewBox>
        <HotReview>여기 요새 왤캐 폼 미츴냐이</HotReview>
      </HotReviewBox>
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

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: end;
`;
const HotReviewBox = styled.section`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HotReview = styled.div`
  background: url('https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')
    no-repeat center;
  background-size: cover;
  color: gray;

  font-weight: 700;
  font-size: 1.5rem;
  width: 700px;
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const MemberReviewTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  padding-bottom: 0.8rem;
  margin-left: 3.5rem;
`;
