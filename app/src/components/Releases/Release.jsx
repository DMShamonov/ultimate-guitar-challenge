import React from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/Button';

const Release = ({
  id, title, status, date, onRemove,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{status}</td>
    <td>{new Date(date).toLocaleString()}</td>
    <td>
      <Button onClick={onRemove}>Remove</Button>
    </td>
  </tr>
);

Release.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Release;
