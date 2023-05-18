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
import Bookmark_Title from '../component/Bookmark/Bookmark_Title';
import Bookmark_BigRestaurant_Info from '../component/Bookmark/Bookmark_BigRestaurant_Info';
import Bookmark_BigRestaurant_Image from '../component/Bookmark/Bookmark_BigRestaurant_Image';
import Bookmark_Restaurants from '../component/Bookmark/Bookmark_Restaurants';

//외부 import
import styled from 'styled-components';
const M_Bookmark = () => {
  return (
    <M_RootContainer>
      <M_TopContainer>
        <M_ContentBox>
          <M_Bookmark_BigRestaurant_Image_Box>
            <Bookmark_BigRestaurant_Image />
          </M_Bookmark_BigRestaurant_Image_Box>
          <M_Title_And_BigRestaurant_InfoBox>
            <M_TitleBox>
              <Bookmark_Title />
            </M_TitleBox>
            <M_Bookmark_BigRestaurant_InfoBox>
              <Bookmark_BigRestaurant_Info />
            </M_Bookmark_BigRestaurant_InfoBox>
          </M_Title_And_BigRestaurant_InfoBox>
        </M_ContentBox>
      </M_TopContainer>

      <M_BottomContainer>
        <M_ContentBox>
          <Bookmark_Restaurants />
        </M_ContentBox>
      </M_BottomContainer>
    </M_RootContainer>
  );
};

export default M_Bookmark;

//style
/**  큰 이미지 식당 사진 */
const M_Bookmark_BigRestaurant_Image_Box = styled(M_BigRestaurant_Image_Box)`
  justify-content: end;
`;

/** 큰 이미지 식당의 정보*/
const M_Bookmark_BigRestaurant_InfoBox = styled(M_BigRestaurant_InfoBox)`
  align-items: start;
`;
