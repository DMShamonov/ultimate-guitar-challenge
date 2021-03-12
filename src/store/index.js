import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import keepStateMiddleware from 'middlewares/keepStateMiddleware';
import reducer from 'reducers';
import DevTools from 'components/DevTools';

export default function configureStore(initialState, { exclude: excludes }) {
  return createStore(
    reducer,
    initialState,
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(thunk, keepStateMiddleware(excludes))
      : compose(
          applyMiddleware(thunk, createLogger(), keepStateMiddleware(excludes)),
          DevTools.instrument()
        )
  );
}
