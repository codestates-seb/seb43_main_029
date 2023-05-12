import Restaurant from './Restaurant';
import { SERVER_URL_RESTAURANTS, MaxScore } from '../config';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

// 식당 컴포넌트를 map 돌리는 곳
const Restaurants = () => {
  /* TODO : 데이터 가져오고, 필터링 하는 컴포넌트 따로 분리 해야함. */
  const [isRestaurants, setIsRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get(SERVER_URL_RESTAURANTS) //
      .then(res => setIsRestaurants(res.data));
  }, []);

  const filteredData = isRestaurants.filter(data => data.score < MaxScore);

  return (
    <RestaurantsContainer>
      {filteredData.map(restaurant => (
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
