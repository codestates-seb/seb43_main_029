import { SET_SEARCH_VALUE } from './actions';

const initialState = {
  searchValue: '',
};

const searchValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export default searchValueReducer;
