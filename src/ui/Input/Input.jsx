import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

@autobind
class Input extends PureComponent {
  static defaultProps = {
    type: 'text',
    fluid: false,
    className: '',
    onChange: () => {},
    inputRef: () => {},
  };

  static propTypes = {
    type: PropTypes.oneOf([
      'text',
      'email',
      'number',
      'file',
      'tel',
      'password',
    ]),
    fluid: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    inputRef: PropTypes.func,
  };

  onChange(e) {
    this.props.onChange(e);
  }

  render() {
    const { inputRef, fluid, className, ...props } = this.props;

    return (
      <input
        {...props}
        className={classnames(
          'ug-b-input',
          {
            'ug-b-input_theme_fluid': fluid,
          },
          className
        )}
        onChange={this.onChange}
        ref={inputRef}
      />
    );
  }
}

export default Input;
