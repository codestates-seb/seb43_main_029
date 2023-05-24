//types
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

//actions
export const setSearchValue = searchValue => ({
  type: SET_SEARCH_VALUE,
  payload: searchValue,
});
