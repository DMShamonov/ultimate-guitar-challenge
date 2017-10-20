import _filter from 'lodash/filter';

import ActionTypes from '../actionTypes';

const releases = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.release.ADD:
      return { ...state, [action.release.id]: action.release };
    case ActionTypes.release.REMOVE:
      return { ..._filter(state, release => release.id !== action.id) };
    default:
      return state;
  }
};

export default releases;
