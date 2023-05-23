import axios from 'axios';
import {
  fetchSearchRestaurantRequest,
  fetchSearchRestaurantSuccess,
  fetchSearchRestaurantFailure,
} from './types';

export const fetchSearchRestaurant = () => {
  return dispatch => {
    dispatch(fetchSearchRestaurantRequest());

    axios
      .get(`${process.env.REACT_APP_API_URL}/restaurant/search/keyword=서울`)
      .then(response => {
        const restaurants = response.data;
        console.log(restaurants);
        dispatch(fetchSearchRestaurantSuccess(restaurants));
      })
      .catch(error => dispatch(fetchSearchRestaurantFailure(error)));
  };
};
