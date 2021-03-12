import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

@autobind
class Form extends PureComponent {
  static defaultProps = {
    formRef: () => {},
    onSubmit: () => {},
    className: '',
    children: '',
  };

  static propTypes = {
    formRef: PropTypes.func,
    onSubmit: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  _onSubmit(e) {
    this.props.onSubmit(e);
  }

  render() {
    const { children, className, formRef } = this.props;

    return (
      <form
        className={classnames('ug-b-form', className)}
        onSubmit={this._onSubmit}
        ref={formRef}
      >
        {children}
      </form>
    );
  }
}

export default Form;
