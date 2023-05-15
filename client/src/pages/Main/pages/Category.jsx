//내부 import
import {
  M_RootContainer,
  M_TopContainer,
  M_BottomContainer,
  M_ContentBox,
  M_Title_And_BigRestaurant_InfoBox,
  M_TitleBox,
  M_BigRestaurant_InfoBox,
  M_BigRestaurant_ImgBox,
} from '../styled';
import Restaurants from '../component/Restaurants';
import BigRestaurant from '../component/Big_R';
import Res_Title from '../component/Res_Title';
import Big_R_Info from '../component/C_Big_R_Info';

/** 카테고리 감싸는 역할 */
const M_Category = () => {
  return (
    <M_RootContainer>
      <M_TopContainer>
        <M_ContentBox>
          <M_Title_And_BigRestaurant_InfoBox>
            <M_TitleBox>
              <Res_Title />
            </M_TitleBox>
            <M_BigRestaurant_InfoBox>
              <Big_R_Info />
            </M_BigRestaurant_InfoBox>
          </M_Title_And_BigRestaurant_InfoBox>
          <M_BigRestaurant_ImgBox>
            <BigRestaurant />
          </M_BigRestaurant_ImgBox>
        </M_ContentBox>
      </M_TopContainer>

      <M_BottomContainer>
        <M_ContentBox>
          <Restaurants />
        </M_ContentBox>
      </M_BottomContainer>
    </M_RootContainer>
  );
};

export default M_Category;
