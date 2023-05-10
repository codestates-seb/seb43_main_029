import styled from 'styled-components';
import TitleReview from '../component/ReviewComponent/TitleReview';
import ReviewMap from '../component/ReviewComponent/ReviewMap';

const M_Review = () => {
  return (
    <M_ReviewContainer>
      <div className="TopContainer">
        <TitleReview />
      </div>
      <div className="BottomContainer">
        <ReviewMap />
      </div>
    </M_ReviewContainer>
  );
};

export default M_Review;

//style
const M_ReviewContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .TopContainer {
    flex: 4;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
  }
  .BottomContainer {
    flex: 2;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
`;
