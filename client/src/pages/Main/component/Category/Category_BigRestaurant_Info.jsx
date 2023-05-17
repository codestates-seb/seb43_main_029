//내부 import
import { SERVER_URL } from '../../config';
import { BigRestaurantInfo } from '../../styled';

//외부 import
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart, FaStar } from 'react-icons/fa';

/** 랜덤 카테고리 큰 이미지 식당 정보 */
const Category_BigRestaurant_Info = () => {
  const [isCategory, setIsCategory] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/restaurants`);
        const { data } = response;
        setRestaurants(data);
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomCategory = data[randomIndex].category;
        setIsCategory(randomCategory);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  //랜덤 카테고리 중, 가장 별점이 높은 식당 필터
  const filteredRestaurants = restaurants.filter(restaurant => restaurant.category === isCategory);

  const highestScoreRestaurant = filteredRestaurants.reduce((highest, current) => {
    if (!highest || current.score > highest.score) {
      return current;
    }
    return highest;
  }, null);

  return (
    <>
      {highestScoreRestaurant && (
        <Category_BigRestaurantInfo>
          <span className="BigRestaurant_Name">{highestScoreRestaurant.name}</span>
          <div>
            <span className="BigRestaurant_Score">
              예상 <FaStar className="icons" />
              {highestScoreRestaurant.score}
            </span>
            <span className="BigRestaurant_Bookmark">
              <FaHeart className="icons" /> {highestScoreRestaurant.bookmark}
            </span>
          </div>
          <span className="BigRestaurant_Address">{highestScoreRestaurant.address}</span>
        </Category_BigRestaurantInfo>
      )}
    </>
  );
};

export default Category_BigRestaurant_Info;

//style
const Category_BigRestaurantInfo = styled(BigRestaurantInfo)`
  padding-right: 1rem;

  .BigRestaurant_Score {
    padding-right: 0.5rem;
  }
  .BigRestaurant_Bookmark {
    padding-right: 0.5rem;
  }
  .BigRestaurant_Address {
    padding-top: 0.2rem;
    padding-right: 0.5rem;
  }
  .icons {
    font-size: 0.9rem;
    padding-right: 2px;
  }
`;
