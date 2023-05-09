import styled from 'styled-components';
import dummy from '../dummy.json';
import { Foo } from 'components';

// 제일 크게 나오는 식당 컴포넌트
const BigRestaurant = () => {
  const filteredData = dummy.foods.filter(data => data.name === '감동식당');
  return (
    <Container>
      <div className="foo">
        <Column>
          <img src={filteredData[0].img} alt={filteredData[0].name} />
        </Column>
        <BigRestaurantInfo>
          <BigRestaurantName>{filteredData[0].name}</BigRestaurantName>
          <BigRestaurantScore>예상 {filteredData[0].rating}</BigRestaurantScore>
          <BigRestaurantAddress>{filteredData[0].location}</BigRestaurantAddress>
        </BigRestaurantInfo>
        <Foo></Foo>
        <S_Foo></S_Foo>
      </div>
    </Container>
  );
};

export default BigRestaurant;

//style
const Container = styled.div`
  .foo {
    width: 450px;
    height: 300px;
    display: flex;
    flex-direction: column;
  }
`;
const BigRestaurantContainer = styled.div`
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
const BigRestaurantInfo = styled.div`
  background-color: #fff;
  flex: 1;
  display: flex;
  align-items: center;
`;
const BigRestaurantName = styled.div`
  padding: 0 10px;
`;
const BigRestaurantScore = styled.div``;
const BigRestaurantAddress = styled.div``;
