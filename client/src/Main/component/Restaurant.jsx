import styled from 'styled-components';

// 식당 컴포넌트
const Restaurant = props => {
  return (
    <RestaurantContainer>
      <RestaurantImage>
        <img src={props.images} alt={props.name} />
      </RestaurantImage>
      <RestaurantInfo>
        <RestaurantName>{props.name}</RestaurantName>
        <RestaurantScore>예상 {props.score}</RestaurantScore>
        <RestaurantAddress>{props.address}</RestaurantAddress>
      </RestaurantInfo>
    </RestaurantContainer>
  );
};

export default Restaurant;

//style
const RestaurantContainer = styled.div`
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
const RestaurantInfo = styled.div`
  background-color: #fff;
  flex: 1;
  display: flex;
  align-items: center;
`;
const RestaurantName = styled.div`
  padding: 0 10px;
`;
const RestaurantScore = styled.div``;
const RestaurantAddress = styled.div``;
