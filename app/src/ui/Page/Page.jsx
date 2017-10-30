import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Page = ({ className, children }) => (
  <div className={classnames('ug-b-page', className)}>
    <div className="ug-b-page__container">
      {children}
    </div>
  </div>
);

Page.defaultProps = {
  className: '',
};

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Page;
