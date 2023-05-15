//내부 import
import Bookmark_Restaurant from './Bookmark_Restaurant';
import { RestaurantsBox } from '../../styled';
import { SERVER_URL } from '../../config';

//외부 import
import { useEffect, useState } from 'react';
import axios from 'axios';

const Bookmark_Restaurants = () => {
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

  const sortedRestaurants = restaurants.sort((a, b) => b.bookmark - a.bookmark);
  const newRestaurants = sortedRestaurants.slice(1, 5);
  console.log(newRestaurants);

  return (
    <RestaurantsBox>
      {newRestaurants.map(newRestaurant => (
        <Bookmark_Restaurant
          key={newRestaurant.restaurantId}
          name={newRestaurant.name}
          images={newRestaurant.images}
          bookmark={newRestaurant.bookmark}
          address={newRestaurant.address}
        />
      ))}
    </RestaurantsBox>
  );
};

export default Bookmark_Restaurants;
