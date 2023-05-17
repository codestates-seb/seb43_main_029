import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import restaurantsReducer from './reducers';

const store = createStore(restaurantsReducer, applyMiddleware(thunk));

export default store;
