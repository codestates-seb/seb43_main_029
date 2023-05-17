import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_FAILURE,
  FETCH_HIGHEST_BOOKMARK_RESTAURANT_SUCCESS,
  FETCH_2TO5_BOOKMARK_RESTAURANTS_SUCCESS,
} from './actions';

const initialState = {
  restaurants: [],
  loading: true,
  error: '',
};

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_HIGHEST_BOOKMARK_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurants: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_2TO5_BOOKMARK_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
        error: null,
      };
    case FETCH_RESTAURANTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantsReducer;
