import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'; // eslint-disable-line import/no-extraneous-dependencies

import reducer from '../reducers';
import DevTools from '../components/DevTools';

const configureStore = initialState => createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk, createLogger()),
    DevTools.instrument(),
  ),
);

export default configureStore;
