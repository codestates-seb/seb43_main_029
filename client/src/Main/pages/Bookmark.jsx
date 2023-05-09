import styled from 'styled-components';
import CategoryTitle from '../component/CategoryTitle';
import BigRestaurant from '../component/BigRestaurant';
// import CategoryFilter from '../component/CategoryFilter';
import Restaurants from '../component/Restaurants';
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
      <SubRestaurantContainer>
        <Restaurants />
      </SubRestaurantContainer>
    </M_BookmarkContainer>
  );
};

export default M_Bookmark;

//style
const M_BookmarkContainer = styled.section`
  background-color: orange;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .TopContainer {
    display: flex;
    flex: 4;
  }
`;
const TitleContainer = styled.div`
  background-color: pink;
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleRestaurantContainer = styled.div`
  background-color: skyblue;
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
`;
const SubRestaurantContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
