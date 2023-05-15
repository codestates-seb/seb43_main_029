//내부 import
import { M_RootContainer, M_TopContainer, M_BottomContainer, M_ContentBox } from '../styled';
import Rev_Title from '../component/Rev_Title';
import Reviews from '../component/Reviews';

//외부 import
import styled from 'styled-components';

const M_Review = () => {
  return (
    <M_RootContainer>
      <M_TopContainer>
        <M_Review_ContentBox>
          <Rev_Title />
        </M_Review_ContentBox>
      </M_TopContainer>

      <M_BottomContainer>
        <M_ContentBox>
          <Reviews />
        </M_ContentBox>
      </M_BottomContainer>
    </M_RootContainer>
  );
};

export default M_Review;

//style
const M_Review_ContentBox = styled(M_ContentBox)`
  flex-direction: column;
  align-items: start;
  justify-content: end;
`;
