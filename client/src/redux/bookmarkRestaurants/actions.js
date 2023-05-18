import { SERVER_URL } from '../../pages/main/config';
import axios from 'axios';
import {
  fetchBookmarkRestaurantsRequest,
  fetchBookmarkRestaurantsSuccess,
  fetchBookmarkRestaurantsFailure,
} from './types';

export const fetchBookmarkRestaurants = () => {
  return dispatch => {
    dispatch(fetchBookmarkRestaurantsRequest());

    axios
      .get(`${SERVER_URL}/restaurants`)
      .then(response => {
        const restaurants = response.data;
        const sortedByBookmark = restaurants.sort((a, b) => b.bookmark - a.bookmark);
        dispatch(fetchBookmarkRestaurantsSuccess(sortedByBookmark));
      })
      .catch(error => dispatch(fetchBookmarkRestaurantsFailure(error)));
  };
};