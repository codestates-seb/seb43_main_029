import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import restaurantsReducer from './reducers';
const middleware = [logger, thunk];

export const store = createStore(restaurantsReducer, applyMiddleware(...middleware));

export default store;
