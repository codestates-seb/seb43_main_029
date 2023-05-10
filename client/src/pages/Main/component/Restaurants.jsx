import styled from 'styled-components';
import Restaurant from './Restaurant';
import { useEffect, useState } from 'react';
// 식당 컴포넌트를 map 돌리는 곳
const Restaurants = () => {
  /* TODO : 데이터 가져오고, 필터링 하는 컴포넌트 따로 분리 해야함. */
  const [isRestaurants, setIsRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/restaurants')
      .then(res => res.json())
      .then(data => setIsRestaurants(data));
  }, []);

  const filteredRestaurants = isRestaurants.filter(
    data => data.category === '한식' && data.score > 4
  );

  return (
    <RestaurantsContainer>
      {filteredRestaurants.map(restaurant => (
        <Restaurant
          key={restaurant.restaurantId}
          name={restaurant.name}
          images={restaurant.images}
          address={restaurant.address}
          score={restaurant.score}
        />
      ))}
    </RestaurantsContainer>
  );
};

export default Restaurants;

//style
/** 식당 컴포넌트를 map돌려서 grid로 뿌려줌 */
export const RestaurantsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  width: 100%;
`;
