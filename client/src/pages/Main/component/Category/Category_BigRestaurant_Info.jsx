//내부 import
import { BigRestaurantInfo } from '../../styled';
//redux
import { fetchRandomRestaurants } from '../../../../redux/randomRestaurants/actions';

//외부 import
import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';
//icon
import { FaHeart, FaStar } from 'react-icons/fa';

/** 랜덤 카테고리 중 별점이 가장 높은 식당 식당 정보 */
const Category_BigRestaurant_Info = ({ fetchRandomRestaurants, restaurants }) => {
  useEffect(() => {
    //첫 렌더시 서버에서 데이터 받아옴
    fetchRandomRestaurants();
  }, []);

  return (
    <>
      {restaurants && (
        <Category_BigRestaurantInfo>
          <span className="BigRestaurant_Name">{restaurants.name}</span>
          <div>
            <span className="BigRestaurant_Score">
              평균 <FaStar className="icons" />
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

//랜덤 카테고리 중 별점이 가장 높은 식당 정보를 불러옴
const mapStateToProps = state => {
  return {
    restaurants: state.randomRestaurants.restaurants[0],
  };
};
export default connect(mapStateToProps, { fetchRandomRestaurants })(Category_BigRestaurant_Info);

//style
const Category_BigRestaurantInfo = styled(BigRestaurantInfo)`
  padding-right: 20px;
  align-items: end;
  justify-content: end;
  .BigRestaurant_Name {
    padding-right: 5px;
  }
  .BigRestaurant_Score {
    padding-right: 10px;
  }
  .BigRestaurant_Bookmark {
    padding-right: 10px;
  }
  .icons {
    font-size: 14px;
    padding-right: 2px;
  }
`;
