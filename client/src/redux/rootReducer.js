import { combineReducers } from 'redux';
import randomRestaurantsReducer from './randomRestaurants/reducers';
import bookmarkRestaurantsReducer from './bookmarkRestaurants/reducers';
import reviewsReducer from './reviews/reducers';

const rootReducer = combineReducers({
  randomRestaurants: randomRestaurantsReducer,
  bookmarkRestaurants: bookmarkRestaurantsReducer,
  reviews: reviewsReducer,
});

export default rootReducer;
