import styled from 'styled-components';
import CategoryTitle from '../component/CategoryTitle';
import BigRestaurant from '../component/BigRestaurant';
// import CategoryFilter from '../component/CategoryFilter';
import Restaurants from '../component/Restaurants';

import { BottomContainer, ContentBox } from './Category';
const M_Bookmark = () => {
  return (
    <M_BookmarkContainer>
      <div className="TopContainer">
        <TitleRestaurantContainer>
          <BigRestaurant />
        </TitleRestaurantContainer>
        <TitleContainer>
          <CategoryTitle />
        </TitleContainer>
      </div>
      <BottomContainer>
        <ContentBox>
          <Restaurants />
        </ContentBox>
      </BottomContainer>
    </M_BookmarkContainer>
  );
};

export default M_Bookmark;

//style
const M_BookmarkContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .TopContainer {
    display: flex;
    flex: 4;
    border-bottom: 1px solid black;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleRestaurantContainer = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
`;
// const SubRestaurantContainer = styled.div`
//   flex: 2;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-bottom: 1px solid black;
// `;
