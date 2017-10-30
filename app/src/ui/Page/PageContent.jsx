import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PageContent = ({ className, children }) => (
  <div className={classnames('ug-b-page__content', className)}>
    {children}
  </div>
);

PageContent.defaultProps = {
  className: '',
};

PageContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default PageContent;
