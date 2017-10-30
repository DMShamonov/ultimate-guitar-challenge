import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import _filter from 'lodash/filter';

import connectToStore from 'decorators/connectToStore';
import LocalStorageController from 'controllers/LocalStorage';
import { Page, PageTitle, PageContent } from 'ui/Page';
import Search from 'ui/Search';
import Button from 'ui/Button';
import Modal from 'components/Modal';
import ModalController from 'controllers/Modal';
import AddReleaseModal from 'components/AddReleaseModal';
import ReleaseController from 'controllers/Release';

@connectToStore(state => ({
  releases: state.releases,
}))
@autobind
class ReleasesPage extends PureComponent {
  static defaultProps = {
    releases: {},
  };

  static propTypes = {
    releases: PropTypes.objectOf(PropTypes.object),
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this._saveReleasesInLocalStorage, false);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this._saveReleasesInLocalStorage, false);
  }

  _saveReleasesInLocalStorage() {
    const { releases } = this.props;

    new LocalStorageController().setItem('releases', JSON.stringify(releases));
  }

  /**
   * On search string change action
   *
   * @param {Event} e
   * @private
   */
  _onChangeSearchString(e) {
    this.setState({ search: e.target.value });
  }

  /**
   * Show add release modal form
   *
   * @private
   */
  _showAddReleaseModal() {
    const { dispatch } = this.props;

    ModalController.show(<AddReleaseModal {...{ dispatch }} />, {
      title: 'Add release',
      shouldCloseOnOverlayClick: false,
    })(dispatch);
  }

  /**
   * Handle on remove release
   *
   * @param {String} id
   * @private
   */
  _removeRelease(id) {
    const { dispatch } = this.props;

    ReleaseController.remove(id)(dispatch);
  }

  render() {
    const { search } = this.state;
    const { releases, dispatch } = this.props;
    const filteredReleases = (
      search ?
        _filter(releases, release =>
          release.id.includes(search) || release.title.includes(search)) : releases
    );

    return (
      <Page>
        <PageTitle>Releases</PageTitle>
        <Search
          fluid
          value={search}
          placeholder="For searching type id or title release where..."
          onChange={this._onChangeSearchString}
        />
        <PageContent>
          {
            !_isEmpty(filteredReleases) ?
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
                  {
                  _map(filteredReleases, (release, index) => (
                    <tr key={index}>
                      <td>{release.id}</td>
                      <td>{release.title}</td>
                      <td>{release.status}</td>
                      <td>{release.data}</td>
                      <td>
                        <Button onClick={() => this._removeRelease(release.id)}>Remove</Button>
                      </td>
                    </tr>
                  ))
                }
                </tbody>
              </table> :
              <p>Not have yet</p>
          }
          <Button onClick={this._showAddReleaseModal}>Add release</Button>
        </PageContent>
        <Modal {...{ dispatch }} />
      </Page>
    );
  }
}

export default ReleasesPage;

