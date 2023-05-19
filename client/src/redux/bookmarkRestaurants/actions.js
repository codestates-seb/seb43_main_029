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
      .get(`${process.env.REACT_APP_API_URL}/restaurant`)
      .then(response => {
        const restaurants = response.data;
        const sortedByBookmark = restaurants.sort((a, b) => b.bookmark - a.bookmark);
        dispatch(fetchBookmarkRestaurantsSuccess(sortedByBookmark));
      })
      .catch(error => dispatch(fetchBookmarkRestaurantsFailure(error)));
  };
};
