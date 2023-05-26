export const FETCH_BOOKMARK_RESTAURANTS_REQUEST = 'FETCH_BOOKMARK_RESTAURANTS_REQUEST';
export const FETCH_BOOKMARK_RESTAURANTS_SUCCESS = 'FETCH_BOOKMARK_RESTAURANTS_SUCCESS';
export const FETCH_BOOKMARK_RESTAURANTS_FAILURE = 'FETCH_BOOKMARK_RESTAURANTS_FAILURE';

export const fetchBookmarkRestaurantsRequest = () => ({
  type: FETCH_BOOKMARK_RESTAURANTS_REQUEST,
});

export const fetchBookmarkRestaurantsSuccess = bookmarkRestaurants => ({
  type: FETCH_BOOKMARK_RESTAURANTS_SUCCESS,
  payload: bookmarkRestaurants,
});

export const fetchBookmarkRestaurantsFailure = error => ({
  type: FETCH_BOOKMARK_RESTAURANTS_FAILURE,
  payload: error,
});
