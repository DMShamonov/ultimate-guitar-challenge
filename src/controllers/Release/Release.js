import ActionTypes from '../../actionTypes';

/**
 * Release controller
 */
class Release {
  /**
   * Add release
   *
   * @param {Object} release
   * @return {function(*): *}
   */
  static add(release) {
    return (dispatch) => dispatch({ type: ActionTypes.release.ADD, release });
  }

  /**
   * Remove release
   *
   * @param {String} id
   * @return {function(*): *}
   */
  static remove(id) {
    return (dispatch) => dispatch({ type: ActionTypes.release.REMOVE, id });
  }
}

export default Release;
