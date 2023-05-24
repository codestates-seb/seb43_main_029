import { combineReducers } from 'redux';
import randomRestaurantsReducer from './randomRestaurants/reducers';
import bookmarkRestaurantsReducer from './bookmarkRestaurants/reducers';
import { persistReducer } from 'redux-persist';
import { loginReducer } from './loginReducer';
import { userInfoReducer } from './userInfoReducer';
import { AuthReducer } from './authReducer';

// 세션에 저장
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'userinfo', 'Auth'], // 브라우저 새로고침시 데이터 storage에 저장
  blacklist: ['randomRestaurants', 'bookmarkRestaurants'], // 제외
};
import reviewsReducer from './reviews/reducers';
import searchRestaurantReducer from './search/reducers';
import searchValueReducer from './searchValue/reducers';

const rootReducer = combineReducers({
  randomRestaurants: randomRestaurantsReducer,
  bookmarkRestaurants: bookmarkRestaurantsReducer,
  login: loginReducer,
  userinfo: userInfoReducer,
  Auth: AuthReducer,
  reviews: reviewsReducer,
  search: searchRestaurantReducer,
  searchValue: searchValueReducer,
});

export default persistReducer(persistConfig, rootReducer);
