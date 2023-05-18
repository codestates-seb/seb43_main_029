import {
  FETCH_BOOKMARK_RESTAURANTS_REQUEST,
  FETCH_BOOKMARK_RESTAURANTS_SUCCESS,
  FETCH_BOOKMARK_RESTAURANTS_FAILURE,
} from './types';

const initialState = {
  restaurants: [],
  loading: false,
  error: null,
};

const bookmarkRestaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKMARK_RESTAURANTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BOOKMARK_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
      };

    case FETCH_BOOKMARK_RESTAURANTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookmarkRestaurantsReducer;
