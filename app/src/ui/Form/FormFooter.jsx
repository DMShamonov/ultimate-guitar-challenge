import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FormFooter = (props) => {
  const { className, children } = props;

  return (
    <div className={classnames('ug-b-form__footer', className)}>
      {children}
    </div>
  );
};

FormFooter.defaultProps = {
  className: '',
};

FormFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormFooter;
