import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FormGroup = (props) => {
  const { className, children, ...attributes } = props;

  return (
    <div className={classnames('ug-b-form__group', className)} {...attributes}>
      {children}
    </div>
  );
};

FormGroup.defaultProps = {
  className: '',
};

FormGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormGroup;
