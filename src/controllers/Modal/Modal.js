import ActionTypes from '../../actionTypes';

/**
 * Modal controller
 */
class Modal {
  /**
   * Show modal
   *
   * @param {object} modal
   * @param {object} props
   * @return {function(*): *}
   */
  static show(modal, props = {}) {
    return (dispatch) =>
      dispatch({
        type: ActionTypes.modal.SHOW,
        modal: { content: modal, props },
      });
  }

  /**
   * Hide modal
   *
   * @return {function(*): *}
   */
  static hide() {
    return (dispatch) => dispatch({ type: ActionTypes.modal.HIDE });
  }
}

export default Modal;
