import styled from 'styled-components';

const TitleReview = () => {
  return (
    <TitleReviewContainer>
      <div className="top">#리뷰</div>
      <div className="bottom">회원님들의 솔직한 리뷰</div>
    </TitleReviewContainer>
  );
};

export default TitleReview;

//style
const TitleReviewContainer = styled.div`
  background-color: #fff;
  width: 800px;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  .top {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .bottom {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;
