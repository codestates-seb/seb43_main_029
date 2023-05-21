//내부 import
import Restaurant from '../main/component/Bookmark/Bookmark_Restaurant';
import { fetchBookmarkRestaurants } from '../../redux/bookmarkRestaurants/actions';

//외부 import
import { useEffect } from 'react';
import { connect } from 'react-redux';

/** 검색 결과 식당 컴포넌트들을 정렬 */
const SearchList = ({ fetchBookmarkRestaurants, restaurants, loading }) => {
  useEffect(() => {
    fetchBookmarkRestaurants();
  }, []);
  return (
    <div>
      {restaurants?.map(restaurant => (
        <Restaurant
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
    </div>
  );
};
const mapStateToProps = state => ({
  loading: state.bookmarkRestaurants.loading,
  restaurants: state.bookmarkRestaurants.restaurants.slice(1, 5),
});
export default connect(mapStateToProps, { fetchBookmarkRestaurants })(SearchList);
