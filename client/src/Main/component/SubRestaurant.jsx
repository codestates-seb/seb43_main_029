import styled from 'styled-components';

// 식당 컴포넌트
const SubRestaurant = props => {
  const TitleRestaurantContainer = styled.div`
    width: 300px;
    height: 200px;
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
        <img src={props.img} alt="" />
      </RestaurantImage>
      <NameAndRating>
        <RestaurantName>{props.name}</RestaurantName>
        <RestaurantRating>예상 {props.rating}</RestaurantRating>
        <div>{props.location}</div>
      </NameAndRating>
    </TitleRestaurantContainer>
  );
};

export default SubRestaurant;
