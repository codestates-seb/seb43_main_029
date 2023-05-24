//내부 import
import Bookmark_Restaurant from './Bookmark_Restaurant';
import { RestaurantsBox } from '../../styled';
//redux
import { fetchBookmarkRestaurants } from '../../../../redux/bookmarkRestaurants/actions';

//외부 import
import { useEffect } from 'react';
import { connect } from 'react-redux';

/** 즐겨찾기 식당들을 담은 컴포넌트 */
const Bookmark_Restaurants = ({ fetchBookmarkRestaurants, restaurants, loading }) => {
  useEffect(() => {
    fetchBookmarkRestaurants();
  }, []);

  return (
    <RestaurantsBox>
      {restaurants?.map(restaurant => (
        <Bookmark_Restaurant
          key={restaurant.restaurantId}
          name={restaurant.name}
          url={restaurant.url}
          score={restaurant.score}
          bookmark={restaurant.bookmark}
          location={restaurant.location}
          loading={loading}
          restaurantId={restaurant.restaurantId}
        />
      ))}
    </RestaurantsBox>
  );
};
const mapStateToProps = state => ({
  loading: state.bookmarkRestaurants.loading,
  restaurants: state.bookmarkRestaurants.restaurants.slice(1, 5),
});
export default connect(mapStateToProps, { fetchBookmarkRestaurants })(Bookmark_Restaurants);
