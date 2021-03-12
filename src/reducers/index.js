import { combineReducers } from 'redux';

import modals from './modals';
import releases from './releases';

const appReducer = combineReducers({
  modals,
  releases,
});

export default appReducer;
