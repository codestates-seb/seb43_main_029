import styled from 'styled-components';
import dummy from '../dummy.json';

// 제일 큰 식당 컴포넌트
const BigRestaurant = () => {
  const filteredData = dummy.foods.filter(data => data.name === '감동식당');
  return (
    <BigR_Container>
      <img src={filteredData[0].img} alt={filteredData[0].name} />
    </BigR_Container>
  );
};

export default BigRestaurant;

//style
const BigR_Container = styled.section`
  width: 600px;
  height: 400px;
  img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
  }
`;
