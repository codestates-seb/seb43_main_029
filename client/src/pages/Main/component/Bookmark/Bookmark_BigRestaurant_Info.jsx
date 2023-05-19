//내부 import
import { BigRestaurantInfo } from '../../styled';
//redux
import { fetchBookmarkRestaurants } from '../../../../redux/bookmarkRestaurants/actions';

//외부 import
import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';
//icon
import { FaHeart, FaStar } from 'react-icons/fa';

/** 즐겨찾기가 가장 많은 식당 정보 */
const Bookmark_BigRestaurant_Info = ({ fetchBookmarkRestaurants, restaurants }) => {
  useEffect(() => {
    //첫 렌더시 서버에서 데이터 받아옴
    fetchBookmarkRestaurants();
  }, []);

  return (
    <>
      {restaurants && (
        <Bookmark_BigRestaurantInfo>
          <span className="BigRestaurant_Name">{restaurants.name}</span>
          <div>
            <span className="BigRestaurant_Score">
              평균 <FaStar className="icons" /> {restaurants.score}
            </span>
            <span className="BigRestaurant_Bookmark">
              <FaHeart className="icons" /> {restaurants.bookmark}
            </span>
          </div>
          <span className="BigRestaurant_Address">{restaurants.address}</span>
        </Bookmark_BigRestaurantInfo>
      )}
    </>
  );
};

//즐겨찾기가 가장 많은 식당의 정보를 불러옴
const mapStateToProps = state => ({
  restaurants: state.bookmarkRestaurants.restaurants[0],
});
export default connect(mapStateToProps, { fetchBookmarkRestaurants })(Bookmark_BigRestaurant_Info);

//style
const Bookmark_BigRestaurantInfo = styled(BigRestaurantInfo)`
  align-items: start;
  padding-left: 20px;
  justify-content: end;
  .BigRestaurant_Name {
    padding-left: 5px;
  }
  .BigRestaurant_Score {
    padding-left: 8px;
  }
  .BigRestaurant_Bookmark {
    padding-left: 5px;
  }
  .BigRestaurant_Address {
    padding-top: 5px;
    padding-left: 8px;
  }
  .icons {
    font-size: 14px;
    padding-left: 2px;
  }
`;
