import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_HIGHEST_BOOKMARK_RESTAURANTS_SUCCESS,
  FETCH_NEXT_BOOKMARK_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
} from './actions/main/actions';

const initialState = {
  restaurants: [],
  loading: false,
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
    case FETCH_HIGHEST_BOOKMARK_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
        error: null,
      };
    case FETCH_NEXT_BOOKMARK_RESTAURANTS_SUCCESS:
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
