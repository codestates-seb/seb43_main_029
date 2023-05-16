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
import Category_Title from '../component/Category/Category_Title';
import Category_BigRestaurant_Image from '../component/Category/Category_BigRestaurant_Image';
import Category_BigRestaurant_Info from '../component/Category/Category_BigRestaurant_Info';
import Category_Restaurants from '../component/../component/Category/Category_Restaurants';

/** 카테고리 감싸는 역할 */
const M_Category = () => {
  return (
    <M_RootContainer>
      <M_TopContainer>
        <M_ContentBox>
          <M_Title_And_BigRestaurant_InfoBox>
            <M_TitleBox>
              <Category_Title />
            </M_TitleBox>
            <M_BigRestaurant_InfoBox>
              <Category_BigRestaurant_Info />
            </M_BigRestaurant_InfoBox>
          </M_Title_And_BigRestaurant_InfoBox>
          <M_BigRestaurant_ImgBox>
            <Category_BigRestaurant_Image />
          </M_BigRestaurant_ImgBox>
        </M_ContentBox>
      </M_TopContainer>

      <M_BottomContainer>
        <M_ContentBox>
          <Category_Restaurants />
        </M_ContentBox>
      </M_BottomContainer>
    </M_RootContainer>
  );
};

export default M_Category;
