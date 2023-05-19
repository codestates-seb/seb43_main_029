//내부 import
import Category_Restaurant from './Category_Restaurant';
import { RestaurantsBox } from '../../styled';
//redux
import { fetchRandomRestaurants } from '../../../../redux/randomRestaurants/actions';

//외부 import
import { useEffect } from 'react';
import { connect } from 'react-redux';

/**  랜덬카테고리 식당들을 담은 컴포넌트 */
const Category_Restaurants = ({ fetchRandomRestaurants, restaurants, loading }) => {
  useEffect(() => {
    fetchRandomRestaurants();
  }, []);

  return (
    <RestaurantsBox>
      {restaurants?.map(restaurant => (
        <Category_Restaurant
          key={restaurant.restaurantId}
          name={restaurant.name}
          images={restaurant.images}
          score={restaurant.score}
          bookmark={restaurant.bookmark}
          address={restaurant.address}
          loading={loading}
          restaurantId={restaurant.restaurantId}
        />
      ))}
    </RestaurantsBox>
  );
};
const mapStateToProps = state => {
  return {
    restaurants: state.randomRestaurants.restaurants.slice(1, 5),
    loading: state.randomRestaurants.loading,
  };
};

export default connect(mapStateToProps, { fetchRandomRestaurants })(Category_Restaurants);
