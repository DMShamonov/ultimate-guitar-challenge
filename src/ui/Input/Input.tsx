import React, { PureComponent } from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';
import { InputPropsType } from './Input.types';

@autobind
class Input extends PureComponent<InputPropsType> {
  static defaultProps = {
    type: 'text',
    fluid: false,
    className: '',
  };

  render() {
    const { fluid, className, ...props } = this.props;

    return (
      <input
        className={classnames(
          'ug-b-input',
          {
            'ug-b-input_theme_fluid': fluid,
          },
          className
        )}
        {...props}
      />
    );
  }
}

export default Input;
