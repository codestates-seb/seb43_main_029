import {
  M_Page_Container,
  TopContainer,
  ContentBox,
  TitleContainer,
  Page_Desc,
  Big_R_Info_Container,
  BigRestaurantContainer,
  BottomContainer,
} from './Category';

import Res_Title from '../component/Res_Title';
import B_Big_R_Info from '../component/B_Big_R_Info';
import BigRestaurant from '../component/Big_R';
import Restaurants from '../component/Restaurants';

import styled from 'styled-components';
const M_Bookmark = () => {
  return (
    <M_Page_Container>
      <TopContainer>
        <ContentBox>
          <Book_BigRestaurantContainer>
            <BigRestaurant />
          </Book_BigRestaurantContainer>
          <TitleContainer>
            <Page_Desc>
              <Res_Title />
            </Page_Desc>
            <Book_Big_R_Info_Container>
              <B_Big_R_Info />
            </Book_Big_R_Info_Container>
          </TitleContainer>
        </ContentBox>
      </TopContainer>

      <BottomContainer>
        <ContentBox>
          <Restaurants />
        </ContentBox>
      </BottomContainer>
    </M_Page_Container>
  );
};

export default M_Bookmark;

//style
/**  큰 이미지 식당 사진 */
const Book_BigRestaurantContainer = styled(BigRestaurantContainer)`
  justify-content: start;
`;

/** 큰 이미지 식당의 정보*/
const Book_Big_R_Info_Container = styled(Big_R_Info_Container)`
  align-items: start;
`;
