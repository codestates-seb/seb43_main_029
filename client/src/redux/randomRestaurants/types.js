export const FETCH_RANDOM_RESTAURANTS_REQUEST = 'FETCH_RANDOM_RESTAURANTS_REQUEST';
export const FETCH_RANDOM_RESTAURANTS_SUCCESS = 'FETCH_RANDOM_RESTAURANTS_SUCCESS';
export const FETCH_RANDOM_RESTAURANTS_FAILURE = 'FETCH_RANDOM_RESTAURANTS_FAILURE';

export const fetchRandomRestaurantsRequest = () => ({
  type: FETCH_RANDOM_RESTAURANTS_REQUEST,
});

export const fetchRandomRestaurantsSuccess = restaurants => ({
  type: FETCH_RANDOM_RESTAURANTS_SUCCESS,
  payload: restaurants,
});

export const fetchRandomRestaurantsFailure = error => ({
  type: FETCH_RANDOM_RESTAURANTS_FAILURE,
  payload: error,
});
