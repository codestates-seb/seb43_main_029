//action types
export const FETCH_RESTAURANTS_REQUEST = 'FETCH_RESTAURANTS_REQUEST';
export const FETCH_RESTAURANTS_FAILURE = 'FETCH_RESTAURANTS_FAILURE';

/** 즐겨찾기 1위 */
export const FETCH_HIGHEST_BOOKMARK_RESTAURANT_SUCCESS =
  'FETCH_HIGHEST_BOOKMARK_RESTAURANT_SUCCESS';

/** 즐겨찾기 2~5위 */
export const FETCH_2TO5_BOOKMARK_RESTAURANTS_SUCCESS = 'FETCH_2TO5_BOOKMARK_RESTAURANTS_SUCCESS';

export const fetchRestaurantsRequest = () => ({
  type: FETCH_RESTAURANTS_REQUEST,
});
/** 실패 */
export const fetchRestaurantsFailure = error => ({
  type: FETCH_RESTAURANTS_FAILURE,
  payload: error,
});

/** 즐겨찾기 1순위 */
export const fetchHighestBookmarkRestaurantSuccess = sortedRestaurant => ({
  type: FETCH_HIGHEST_BOOKMARK_RESTAURANT_SUCCESS,
  payload: sortedRestaurant,
});

/** 즐겨찾기 2~5위 */
export const fetch2to5BookmarkRestaurantsSuccess = sortedRestaurants => ({
  type: FETCH_2TO5_BOOKMARK_RESTAURANTS_SUCCESS,
  payload: sortedRestaurants,
});
