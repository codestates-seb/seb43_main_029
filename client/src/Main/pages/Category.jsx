import styled from 'styled-components';
import CategoryTitle from '../component/CategoryTitle';
// import CategoryFilter from '../component/CategoryFilter';
import Restaurants from '../component/Restaurants';
import BigRestaurant from '../component/BigRestaurant';
const M_Category = () => {
  return (
    <M_CategoryContainer>
      <div className="TopContainer">
        <TitleContainer>
          <CategoryTitle />
        </TitleContainer>
        <BigRestaurantContainer>
          <BigRestaurant />
        </BigRestaurantContainer>
      </div>
      <RestaurantContainer>
        <Restaurants />
      </RestaurantContainer>
    </M_CategoryContainer>
  );
};

export default M_Category;

//style
const M_CategoryContainer = styled.section`
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
const BigRestaurantContainer = styled.div`
  background-color: skyblue;
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
`;
const RestaurantContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
