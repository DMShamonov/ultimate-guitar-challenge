import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PageTitle = ({ className, children }) => (
  <h1 className={classnames('ug-b-page__title', className)}>{children}</h1>
);

PageTitle.defaultProps = {
  className: '',
};

PageTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default PageTitle;
