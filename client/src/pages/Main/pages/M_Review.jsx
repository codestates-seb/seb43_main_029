//내부 import
import {
  M_RootContainer,
  M_TopContainer,
  // M_BottomContainer,
  M_ContentBox,
} from '../styled';
import Review_Title from '../component/Review/Review_Title';
import Reviews from '../component/Review/Reivews';

//외부 import
import styled from 'styled-components';

const M_Review = () => {
  return (
    <R_RootContainer>
      <M_TopContainer>
        <M_ContentBox>
          <Review_Title />
        </M_ContentBox>
      </M_TopContainer>

      {/* <M_BottomContainer> */}
      {/* <M_ContentBox> */}
      <Reviews />
      {/* </M_ContentBox> */}
      {/* </M_BottomContainer> */}
    </R_RootContainer>
  );
};

export default M_Review;

//style
const R_RootContainer = styled(M_RootContainer)`
  background-color: #cee6eb;
  height: 80vh;
`;
