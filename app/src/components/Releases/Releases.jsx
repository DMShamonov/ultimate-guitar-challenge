import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';

import ReleaseController from 'controllers/Release';
import Release from './Release';

@autobind
class Releases extends PureComponent {
  static propTypes = {
    items: PropTypes.objectOf(PropTypes.object).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  /**
   * Handle on remove release
   *
   * @param {String} id
   * @return {function(): *}
   * @private
   */
  _removeRelease(id) {
    const { dispatch } = this.props;

    return () => ReleaseController.remove(id)(dispatch);
  }

  render() {
    const { items } = this.props;

    return (
      !_isEmpty(items) ?
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Status</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {_map(items, release => (
              <Release {...release} onRemove={this._removeRelease(release.id)} key={release.id} />
            ))}
          </tbody>
        </table> :
        <p>Not have yet</p>
    );
  }
}

export default Releases;
