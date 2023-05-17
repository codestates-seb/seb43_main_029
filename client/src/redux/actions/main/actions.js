import { SERVER_URL } from '../../../pages/main/config';
import axios from 'axios';

// Action types
export const FETCH_RESTAURANTS_REQUEST = 'FETCH_RESTAURANTS_REQUEST';
export const FETCH_RESTAURANTS_FAILURE = 'FETCH_RESTAURANTS_FAILURE';
//즐겨찾기 1위
export const FETCH_HIGHEST_BOOKMARK_RESTAURANTS_SUCCESS =
  'FETCH_HIGHEST_BOOKMARK_RESTAURANTS_SUCCESS';

export const FETCH_NEXT_BOOKMARK_RESTAURANTS_SUCCESS = 'FETCH_NEXT_BOOKMARK_RESTAURANTS_SUCCESS';

//즐겨찾기 1위
export const fetchHighestBookmarkRestaurantsSuccess = sortedRestaurant => ({
  type: FETCH_HIGHEST_BOOKMARK_RESTAURANTS_SUCCESS,
  payload: sortedRestaurant,
});
//즐겨찾기 2위~5위
export const fetchNextBookmarkRestaurantsSuccess = sortedRestaurants => ({
  type: FETCH_NEXT_BOOKMARK_RESTAURANTS_SUCCESS,
  payload: sortedRestaurants,
});

//실패
export const fetchRestaurantsFailure = error => ({
  type: FETCH_RESTAURANTS_FAILURE,
  payload: error,
});

export const fetchRestaurants = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${SERVER_URL}/restaurants`);
      const responseData = response.data;
      const sortedData = responseData.sort((a, b) => b.bookmark - a.bookmark);

      const highestBookmarkRestaurant = sortedData[0];
      dispatch(fetchHighestBookmarkRestaurantsSuccess(highestBookmarkRestaurant));

      // const nextBookmarkRestaurants = sortedData.slice(1, 5);
      // dispatch(fetchNextBookmarkRestaurantsSuccess(nextBookmarkRestaurants));
    } catch (error) {
      dispatch({
        type: FETCH_RESTAURANTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Action creators
// export const fetchRestaurantsRequest = () => ({
//   type: FETCH_RESTAURANTS_REQUEST,
// });
