import { SERVER_URL } from '../../config';
import { BigRestaurantInfo } from '../../styled';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Bookmark_BigRestaurant_Info = () => {
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

  const findHighestBookmark = () => {
    if (restaurants.length === 0) return null;

    const highestBookmarkRestaurant = restaurants.reduce((prev, current) => {
      return current.bookmark > prev.bookmark ? current : prev;
    });

    return highestBookmarkRestaurant;
  };

  const highestBookmarkRestaurant = findHighestBookmark();
  return (
    <>
      {highestBookmarkRestaurant && (
        <Bookmark_BigRestaurantInfo key={highestBookmarkRestaurant.restaurantId}>
          <span className="BigRestaurant_Name">{highestBookmarkRestaurant.name}</span>
          {/* <span className="BigRestaurant_Score">예상 별점 {highestBookmarkRestaurant.score}</span> */}
          <span className="BigRestaurant_Bookmark">
            즐겨찾기 {highestBookmarkRestaurant.bookmark}개
          </span>
          <span className="BigRestaurant_Address">{highestBookmarkRestaurant.address}</span>
        </Bookmark_BigRestaurantInfo>
      )}
    </>
  );
};

export default Bookmark_BigRestaurant_Info;

//style;
const Bookmark_BigRestaurantInfo = styled(BigRestaurantInfo)`
  align-items: start;
  padding-left: 1rem;
  .BigRestaurant_Bookmark {
    padding-left: 0.2rem;
  }
  .BigRestaurant_Address {
    padding-left: 0.2rem;
  }
`;
