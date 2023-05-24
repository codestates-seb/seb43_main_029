//내부 import
import {
  fetchSearchRestaurantRequest,
  fetchSearchRestaurantSuccess,
  fetchSearchRestaurantFailure,
} from './types';

//외부 import
import axios from 'axios';

export const fetchSearchRestaurant = () => {
  return dispatch => {
    dispatch(fetchSearchRestaurantRequest());

    axios
      .get(`${process.env.REACT_APP_API_URL}/restaurant/search/keyword=김밥`)
      .then(response => {
        const restaurants = response.data;
        dispatch(fetchSearchRestaurantSuccess(restaurants));
      })
      .catch(error => dispatch(fetchSearchRestaurantFailure(error)));
  };
};
