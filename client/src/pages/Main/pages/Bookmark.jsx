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
import Big_R_Info from '../component/Big_R_Info';
import BigRestaurant from '../component/Big_R';
import Restaurants from '../component/Restaurants';
const M_Bookmark = () => {
  return (
    <M_Page_Container>
      <TopContainer>
        <ContentBox>
          <TitleContainer>
            <Page_Desc>
              <Res_Title />
            </Page_Desc>
            <Big_R_Info_Container>
              <Big_R_Info />
            </Big_R_Info_Container>
          </TitleContainer>
          <BigRestaurantContainer>
            <BigRestaurant />
          </BigRestaurantContainer>
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
