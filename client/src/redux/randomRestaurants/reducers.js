import {
  FETCH_RANDOM_RESTAURANTS_REQUEST,
  FETCH_RANDOM_RESTAURANTS_SUCCESS,
  FETCH_RANDOM_RESTAURANTS_FAILURE,
} from './types';

const initialState = {
  restaurants: [],
  loading: false,
  error: null,
};

const randomRestaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_RESTAURANTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_RANDOM_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
      };

    case FETCH_RANDOM_RESTAURANTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default randomRestaurantsReducer;
