import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

@autobind
class Button extends PureComponent {
  static defaultProps = {
    type: 'button',
    onClick: () => {},
    buttonRef: () => {},
    className: '',
    children: '',
  };

  static propTypes = {
    type: PropTypes.oneOf(['submit', 'button']),
    onClick: PropTypes.func,
    buttonRef: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  onClick(e) {
    this.props.onClick(e);
  }

  render() {
    const { className, buttonRef, children, ...props } = this.props;

    return (
      <button
        className={classnames('ug-b-button', className)}
        onClick={this.onClick}
        ref={buttonRef}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
