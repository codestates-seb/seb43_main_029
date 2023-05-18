//내부 import
import { BigRestaurantInfo } from '../../styled';
import { fetchRandomRestaurants } from '../../../../redux/randomRestaurants/actions';

//외부 import
import { useEffect } from 'react';
import styled from 'styled-components';
import { FaHeart, FaStar } from 'react-icons/fa';
import { connect } from 'react-redux';

/** 랜덤 카테고리 큰 이미지 식당 정보 */
const Category_BigRestaurant_Info = ({ fetchRandomRestaurants, restaurants }) => {
  useEffect(() => {
    fetchRandomRestaurants();
  }, []);

  //랜덤 카테고리 중, 가장 별점이 높은 식당 필터

  return (
    <>
      {restaurants && (
        <Category_BigRestaurantInfo>
          <span className="BigRestaurant_Name">{restaurants.name}</span>
          <div>
            <span className="BigRestaurant_Score">
              예상 <FaStar className="icons" />
              {restaurants.score}
            </span>
            <span className="BigRestaurant_Bookmark">
              <FaHeart className="icons" /> {restaurants.bookmark}
            </span>
          </div>
          <span className="BigRestaurant_Address">{restaurants.address}</span>
        </Category_BigRestaurantInfo>
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    restaurants: state.randomRestaurants.restaurants[0],
  };
};
export default connect(mapStateToProps, { fetchRandomRestaurants })(Category_BigRestaurant_Info);

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
