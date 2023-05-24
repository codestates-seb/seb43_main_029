import {
  FETCH_SEARCH_RESTAURANT_REQUEST,
  FETCH_SEARCH_RESTAURANT_SUCCESS,
  FETCH_SEARCH_RESTAURANT_FAILURE,
} from './types';

const initialState = {
  restaurants: [],
  loading: false,
  error: null,
};

const searchRestaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESTAURANT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SEARCH_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
      };

    case FETCH_SEARCH_RESTAURANT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchRestaurantReducer;
