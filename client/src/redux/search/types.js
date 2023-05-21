export const FETCH_SEARCH_RESTAURANT_REQUEST = 'FETCH_SEARCH_RESTAURANT_REQUEST';
export const FETCH_SEARCH_RESTAURANT_SUCCESS = 'FETCH_SEARCH_RESTAURANT_SUCCESS';
export const FETCH_SEARCH_RESTAURANT_FAILURE = 'FETCH_SEARCH_RESTAURANT_FAILURE';

export const fetchSearchRestaurantRequest = () => ({
  type: FETCH_SEARCH_RESTAURANT_REQUEST,
});

export const fetchSearchRestaurantSuccess = restaurant => ({
  type: FETCH_SEARCH_RESTAURANT_SUCCESS,
  payload: restaurant,
});

export const fetchSearchRestaurantFailure = error => ({
  type: FETCH_SEARCH_RESTAURANT_FAILURE,
  payload: error,
});
