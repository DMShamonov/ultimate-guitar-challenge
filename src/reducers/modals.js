import _tail from 'lodash/tail';

import ActionTypes from '../actionTypes';

const modals = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.modal.SHOW:
      return [...state, action.modal];
    case ActionTypes.modal.HIDE:
      return _tail(state);
    default:
      return state;
  }
};

export default modals;
