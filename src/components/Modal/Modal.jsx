import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import autobind from 'autobind-decorator';
import classnames from 'classnames';
import _head from 'lodash/head';
import _isFunction from 'lodash/isFunction';

import connectToStore from 'decorators/connectToStore';
import ModalController from 'controllers/Modal';

if (process.env.NODE_ENV !== 'test') {
  ReactModal.setAppElement('#root');
}

@connectToStore((state) => ({
  modal: _head(state.modals),
}))
@autobind
class Modal extends PureComponent {
  static defaultProps = {
    modal: {
      content: null,
      props: {},
    },
  };

  static propTypes = {
    modal: PropTypes.shape({
      content: PropTypes.node,
      props: PropTypes.shape({}),
    }),
    dispatch: PropTypes.func.isRequired,
  };

  /**
   * Hide modal
   *
   * @private
   */
  _hide() {
    const {
      dispatch,
      modal: { props },
    } = this.props;
    const { onRequestClose } = props;

    ModalController.hide()(dispatch);

    if (_isFunction(onRequestClose)) {
      onRequestClose();
    }
  }

  render() {
    const {
      modal: { props, content },
    } = this.props;
    const { title, type, className } = props;

    return (
      <ReactModal
        contentLabel="App modal"
        shouldCloseOnOverlayClick
        {...props}
        isOpen={!!content}
        portalClassName={classnames(
          'ug-b-modal',
          {
            [`ug-b-modal_type_${type}`]: type,
          },
          className
        )}
        overlayClassName="ug-b-modal__overlay"
        className="ug-b-modal__dialog"
        bodyOpenClassName="modal-open"
        onRequestClose={this._hide}
      >
        <div className="ug-b-modal__header">
          <span
            className="ug-b-modal__close"
            role="button"
            tabIndex={-1}
            onClick={this._hide}
            onKeyPress={(e) => (e.which || e.keyCode) === 13 && this._hide()}
          />
          {title && <h2 className="ug-b-modal__title">{title}</h2>}
        </div>
        <div content="ug-b-modal__content">{content}</div>
      </ReactModal>
    );
  }
}

export default Modal;
