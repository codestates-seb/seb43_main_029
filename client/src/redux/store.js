//내부 import
import rootReducer from './rootReducer';

//외부 import
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [thunk];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
