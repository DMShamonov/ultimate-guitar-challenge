import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import keepStateMiddleware from 'middlewares/keepStateMiddleware';
import reducer from '../reducers';

const configureStore = initialState => createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, keepStateMiddleware),
);

export default configureStore;
