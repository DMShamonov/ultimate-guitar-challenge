import ActionTypes from '../actionTypes';

const releases = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.release.ADD:
      return [...state, action.release];
    case ActionTypes.release.REMOVE:
      return [...state.filter(release => release.id === action.id)];
    default:
      return state;
  }
};

export default releases;
