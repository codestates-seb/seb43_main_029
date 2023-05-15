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
import Res_Title from '../component/Res_Title';
import B_Big_R_Info from '../component/B_Big_R_Info';
import BigRestaurant from '../component/Big_R';
import Restaurants from '../component/Restaurants';

//외부 import
import styled from 'styled-components';
const M_Bookmark = () => {
  return (
    <M_RootContainer>
      <M_TopContainer>
        <M_ContentBox>
          <M_Bookmark_BigRestaurant_Img_Box>
            <BigRestaurant />
          </M_Bookmark_BigRestaurant_Img_Box>
          <M_Title_And_BigRestaurant_InfoBox>
            <M_TitleBox>
              <Res_Title />
            </M_TitleBox>
            <M_Bookmark_BigRestaurant_InfoBox>
              <B_Big_R_Info />
            </M_Bookmark_BigRestaurant_InfoBox>
          </M_Title_And_BigRestaurant_InfoBox>
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

export default M_Bookmark;

//style
/**  큰 이미지 식당 사진 */
const M_Bookmark_BigRestaurant_Img_Box = styled(M_BigRestaurant_ImgBox)`
  justify-content: start;
`;

/** 큰 이미지 식당의 정보*/
const M_Bookmark_BigRestaurant_InfoBox = styled(M_BigRestaurant_InfoBox)`
  align-items: start;
`;
