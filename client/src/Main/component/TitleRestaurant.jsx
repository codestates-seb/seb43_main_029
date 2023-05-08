import styled from 'styled-components';
import dummy from '../dummy.json';
// 식당 컴포넌트
const TitleRestaurant = () => {
  const categoryFood = dummy.dummy[4];
  const TitleRestaurantContainer = styled.div`
    width: 450px;
    height: 300px;
    display: flex;
    flex-direction: column;
  `;
  const RestaurantImage = styled.div`
    height: calc(100% - 40px);
    width: 100%;
    img {
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
  `;
  const NameAndRating = styled.div`
    background-color: #fff;
    flex: 1;
    display: flex;
    align-items: center;
  `;
  const RestaurantName = styled.div`
    padding: 0 10px;
  `;
  const RestaurantRating = styled.div``;

  return (
    <TitleRestaurantContainer>
      <RestaurantImage>
        <img src={categoryFood.img} alt="" />
      </RestaurantImage>
      <NameAndRating>
        <RestaurantName>{categoryFood.name}</RestaurantName>
        <RestaurantRating>예상 {categoryFood.rating}</RestaurantRating>
        <div>{categoryFood.location}</div>
      </NameAndRating>
    </TitleRestaurantContainer>
  );
};

export default TitleRestaurant;
