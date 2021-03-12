import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FormMessage = (props) => {
  const { type, className, children } = props;

  return (
    <div
      className={classnames(
        'ug-b-form__message',
        {
          [`ug-b-form__message_type_${type}`]: type,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

FormMessage.defaultProps = {
  type: null,
  className: '',
};

FormMessage.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormMessage;
