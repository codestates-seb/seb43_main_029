import styled from 'styled-components';
import TitleCategory from '../component/TitleCategory';
import TitleRestaurant from '../component/TitleRestaurant';
import CategoryMap from '../component/CategoryMap';
const M_Bookmark = () => {
  const M_BookmarkContainer = styled.div`
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
  return (
    <M_BookmarkContainer>
      <div className="TopContainer">
        <TitleRestaurantContainer>
          <TitleRestaurant />
        </TitleRestaurantContainer>
        <TitleContainer>
          <TitleCategory />
        </TitleContainer>
      </div>
      <SubRestaurantContainer>
        <CategoryMap />
      </SubRestaurantContainer>
    </M_BookmarkContainer>
  );
};

export default M_Bookmark;
