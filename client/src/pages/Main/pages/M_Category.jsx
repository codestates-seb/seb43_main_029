//내부 import
import {
  M_RootContainer,
  M_TopContainer,
  M_BottomContainer,
  M_ContentBox,
  M_Title_And_BigRestaurant_InfoBox,
  M_TitleBox,
  M_BigRestaurant_InfoBox,
  M_BigRestaurant_Image_Box,
} from '../styled';
import Category_Title from '../component/Category/Category_Title';
import Category_BigRestaurant_Image from '../component/Category/Category_BigRestaurant_Image';
import Category_BigRestaurant_Info from '../component/Category/Category_BigRestaurant_Info';
import Category_Restaurants from '../component/Category/Category_Restaurants';

//외부 import
import styled from 'styled-components';

/** 메인페이지의 카테고리 컴포넌트*/
const M_Category = () => {
  return (
    <C_RootContainer>
      <M_TopContainer>
        <M_ContentBox>
          <M_Title_And_BigRestaurant_InfoBox>
            <M_TitleBox>
              <Category_Title />
            </M_TitleBox>
            <C_BigRestaurant_InfoBox>
              <Category_BigRestaurant_Info />
            </C_BigRestaurant_InfoBox>
          </M_Title_And_BigRestaurant_InfoBox>
          <M_BigRestaurant_Image_Box>
            <Category_BigRestaurant_Image />
          </M_BigRestaurant_Image_Box>
        </M_ContentBox>
      </M_TopContainer>

      <M_BottomContainer>
        <M_ContentBox>
          <Category_Restaurants />
        </M_ContentBox>
      </M_BottomContainer>
    </C_RootContainer>
  );
};

export default M_Category;

const C_RootContainer = styled(M_RootContainer)`
  background-color: #fff1f2;
`;
const C_BigRestaurant_InfoBox = styled(M_BigRestaurant_InfoBox)`
  align-items: end;
`;
