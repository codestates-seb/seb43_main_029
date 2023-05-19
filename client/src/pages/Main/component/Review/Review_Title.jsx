//내부 import

//외부 import
import styled from 'styled-components';

const Review_Title = () => {
  return (
    <ReviewTitleContainer>
      <ReviewDesc>&#35; 푸피 감수성 max</ReviewDesc>
      <ReviewTitle>많은 공감을 받는 회원님들의 리뷰</ReviewTitle>{' '}
    </ReviewTitleContainer>
  );
};
export default Review_Title;

//style
/** 타이틀을 감싸는 컨테이너 */
const ReviewTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  font-weight: 700;

  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 20px;
`;

/** 부가 텍스트 */
const ReviewDesc = styled.h2`
  font-size: 20px;
  color: gray;

  display: flex;
  flex-direction: column;

  padding-bottom: 5px;
`;

/** 리뷰 타이틀 */
const ReviewTitle = styled.h1`
  font-size: 26px;
`;
