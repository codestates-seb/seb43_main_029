export const FETCH_REVIEWS_REQUEST = 'FETCH_REVIEWS_REQUEST';
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE';

export const fetchReviewsRequest = () => ({
  type: FETCH_REVIEWS_REQUEST,
});

export const fetchReviewsSuccess = reviews => ({
  type: FETCH_REVIEWS_SUCCESS,
  payload: reviews,
});

export const fetchReviewsFailure = error => ({
  type: FETCH_REVIEWS_FAILURE,
  payload: error,
});
