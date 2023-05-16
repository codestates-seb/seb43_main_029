//내부 import
import { SERVER_URL } from '../../config';
import { BigRestaurantInfo } from '../../styled';

//외부 import
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart, FaStar } from 'react-icons/fa';

/** 즐겨찾기 큰 이미지 식당 정보 */
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

  //가장 높은 즐겨찾기를 가진 식당을 필터링
  const findHighestBookmark = () => {
    if (restaurants.length === 0) return null;

    const highestBookmarkRestaurant = restaurants.reduce((prev, current) => {
      return current.bookmark > prev.bookmark ? current : prev;
    });

    return highestBookmarkRestaurant;
  };
  //가장 높은 즐겨찾기를 가진 식당
  const highestBookmarkRestaurant = findHighestBookmark();

  return (
    <>
      {highestBookmarkRestaurant && (
        <Bookmark_BigRestaurantInfo>
          <span className="BigRestaurant_Name">{highestBookmarkRestaurant.name}</span>
          <div>
            <span className="BigRestaurant_Score">
              예상 <FaStar className="icons" /> {highestBookmarkRestaurant.score}
            </span>
            <span className="BigRestaurant_Bookmark">
              <FaHeart className="icons" /> {highestBookmarkRestaurant.bookmark}
            </span>
          </div>
          <span className="BigRestaurant_Address">{highestBookmarkRestaurant.address}</span>
        </Bookmark_BigRestaurantInfo>
      )}
    </>
  );
};

export default Bookmark_BigRestaurant_Info;

//style
const Bookmark_BigRestaurantInfo = styled(BigRestaurantInfo)`
  align-items: start;
  padding-left: 1rem;
  .BigRestaurant_Score {
    padding-left: 0.2rem;
  }
  .BigRestaurant_Bookmark {
    padding-left: 0.5rem;
  }
  .BigRestaurant_Address {
    padding-top: 0.2rem;
    padding-left: 0.2rem;
  }
  .icons {
    font-size: 1rem;
  }
`;
