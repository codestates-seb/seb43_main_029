//내부 import
import { BigRestaurantInfo } from '../../styled';
import { fetchHighestBookmarkRestaurant } from '../../../../redux/main/highestBookmark';
//외부 import
import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { FaHeart, FaStar } from 'react-icons/fa';

/** 즐겨찾기 큰 이미지 식당 정보 */
const Bookmark_BigRestaurant_Info = ({
  fetchHighestBookmarkRestaurant,
  restaurants,
  isLoading,
  error,
}) => {
  useEffect(() => {
    fetchHighestBookmarkRestaurant();
  }, []);

  if (isLoading) {
    console.log(isLoading);
  }
  if (error) {
    console.log(error);
  }

  return (
    <>
      {restaurants && (
        <Bookmark_BigRestaurantInfo>
          <span className="BigRestaurant_Name">{restaurants.name}</span>
          <div>
            <span className="BigRestaurant_Score">
              예상 <FaStar className="icons" /> {restaurants.score}
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

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  isLoading: state.isLoading,
  error: state.error,
});
export default connect(mapStateToProps, { fetchHighestBookmarkRestaurant })(
  Bookmark_BigRestaurant_Info
);

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
