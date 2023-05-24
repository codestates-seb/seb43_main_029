import axios from 'axios';
import { fetchReviewsRequest, fetchReviewsSuccess, fetchReviewsFailure } from './types';

export const fetchReviews = () => {
  return dispatch => {
    dispatch(fetchReviewsRequest());

    axios
      .get(`${process.env.REACT_APP_API_URL}/reviews`)
      .then(response => {
        const restaurants = response.data.data;
        console.log(restaurants);
        dispatch(fetchReviewsSuccess(restaurants));
      })
      .catch(error => dispatch(fetchReviewsFailure(error)));
  };
};
