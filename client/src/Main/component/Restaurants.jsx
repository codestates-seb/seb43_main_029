import styled from 'styled-components';
import Restaurant from './Restaurant';
import { useEffect, useState } from 'react';

const SCORES = {
  HISCORE: 4,
};

/**
 * 한식 중 4점 이상인 함수를 필터링 하는 함수
 * @param {Object} data
 * @param {string} data.category
 * @param {number} data.score
 */
const hiscoreKoreanFoorPredicator = data => {
  data.category === '한식' && data.score > SCORES.HISCORE;
};

// 식당 컴포넌트를 map 돌리는 곳
const Restaurants = () => {
  /* TODO : 데이터 가져오고, 필터링 하는 컴포넌트 따로 분리 해야함. */
  const [isRestaurants, setIsRestaurants] = useState([]);

  useEffect(() => {
    api.get(URL_RESTAURANTS).then(data => setIsRestaurants(data));
  }, []);

  const filteredRestaurants = isRestaurants.filter(hiscoreKoreanFoorPredicator);

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
const RestaurantsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 50px;
`;
