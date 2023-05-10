import styled from 'styled-components';
import CategoryTitle from '../component/CategoryTitle';
// import CategoryFilter from '../component/CategoryFilter';
import Restaurants from '../component/Restaurants';
import BigRestaurant from '../component/BigRestaurant';
const M_Category = () => {
  return (
    <M_CategoryContainer>
      <MaxWidth>
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
      </MaxWidth>
    </M_CategoryContainer>
  );
};

export default M_Category;

//style
const MaxWidth = styled.div`
  border: 1px solid black;
  height: 100%;
  max-width: 1500px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const M_CategoryContainer = styled.section`
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
  border-right: 1px solid black;
`;
const BigRestaurantContainer = styled.div`
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
  border-bottom: 1px solid black;
`;
