import { LOGIN_SUCCESS } from '../actions';

export const userInfoReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
