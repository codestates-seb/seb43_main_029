//내부 import
import { fetch2to5BookmarkRestaurants } from '../../../../redux/main/2to5BookmarkRestaurants';

// import Bookmark_Restaurant from './Bookmark_Restaurant';
import { RestaurantsBox } from '../../styled';
// import { SERVER_URL } from '../../config';
//외부 import
import { useEffect } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

/** 즐겨찾기 식당들을 담은 컴포넌트 */
const Bookmark_Restaurants = () => {
  // const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   const fetchRestaurants = async () => {
  //     try {
  //       const response = await axios.get(`${SERVER_URL}/restaurants`);
  //       const data = response.data;
  //       setRestaurants(data);
  //     } catch (error) {
  //       console.error('식당 데이터를 불러올 수 없습니다', error);
  //     }
  //   };
  //   fetchRestaurants();
  // }, []);

  // //즐겨찾기 내림차순으로 정렬
  // const sortedRestaurants = restaurants.sort((a, b) => b.bookmark - a.bookmark);
  // //가장 즐겨찾기가 많은 식당을 제거, 1번쨰 인덱스부터 5번째 인덱스 앞까지의 식당들을 담음
  // const newRestaurants = sortedRestaurants.slice(1, 5);
  useEffect(() => {
    fetch2to5BookmarkRestaurants();
  }, []);
  // console.log(props, '레스토랑스');
  return (
    <RestaurantsBox>
      {/* {newRestaurants?.map(newRestaurant => (
        <Bookmark_Restaurant
          key={newRestaurant.restaurantId}
          name={newRestaurant.name}
          images={newRestaurant.images}
          score={newRestaurant.score}
          bookmark={newRestaurant.bookmark}
          address={newRestaurant.address}
        />
      ))} */}
    </RestaurantsBox>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    restaurants: state.restaurants,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetch2to5BookmarkRestaurants })(Bookmark_Restaurants);
