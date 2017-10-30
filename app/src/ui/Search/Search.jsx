import React from 'react';
import PropTypes from 'prop-types';

import Input from 'ui/Input';

const Search = ({ value, ...props }) => (
  <Input
    fluid
    value={value}
    {...props}
  />
);

Search.defaultProps = {
  value: '',
};

Search.propTypes = {
  value: PropTypes.string,
};

export default Search;
