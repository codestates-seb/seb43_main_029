//내부 import
import Category_Restaurant from './Category_Restaurant';
import { RestaurantsBox } from '../../styled';
import { SERVER_URL } from '../../config';

//외부 import
import { useEffect, useState } from 'react';
import axios from 'axios';

/**  랜덬카테고리 식당들을 담은 컴포넌트 */
const Category_Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/restaurants`);
        const data = response.data;
        setRestaurants(data);
      } catch (error) {
        console.error('식당 데이터를 불러올 수 없습니다', error);
      }
    };
    fetchRestaurants();
  }, []);

  // 별점 내림차순으로 정렬
  const sortedRestaurants = restaurants.sort((a, b) => b.score - a.score);
  // 가장 별점 많은 식당을 제거, 1번쨰 인덱스부터 5번째 인덱스 앞까지의 식당들을 담음
  const newRestaurants = sortedRestaurants.slice(1, 5);

  return (
    <RestaurantsBox>
      {newRestaurants.map(newRestaurant => (
        <Category_Restaurant
          key={newRestaurant.restaurantId}
          name={newRestaurant.name}
          images={newRestaurant.images}
          score={newRestaurant.score}
          bookmark={newRestaurant.bookmark}
          address={newRestaurant.address}
        />
      ))}
    </RestaurantsBox>
  );
};

export default Category_Restaurants;
