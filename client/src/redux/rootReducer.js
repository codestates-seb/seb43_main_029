import { combineReducers } from 'redux';
import randomRestaurantsReducer from './randomRestaurants/reducers';
import bookmarkRestaurantsReducer from './bookmarkRestaurants/reducers';

const rootReducer = combineReducers({
  randomRestaurants: randomRestaurantsReducer,
  bookmarkRestaurants: bookmarkRestaurantsReducer,
});

export default rootReducer;
