//내부 import
import { M_RootContainer, M_TopContainer, M_BottomContainer, M_ContentBox } from '../styled';
import Rev_Title from '../component/Review/Review_Title';
import MyReivew from '../../myPage/MyReivew';

//외부 import

const M_Review = () => {
  return (
    <M_RootContainer>
      <M_TopContainer>
        <M_ContentBox>
          <Rev_Title />
        </M_ContentBox>
      </M_TopContainer>

      <M_BottomContainer>
        <M_ContentBox>
          <MyReivew />
        </M_ContentBox>
      </M_BottomContainer>
    </M_RootContainer>
  );
};

export default M_Review;

//style
