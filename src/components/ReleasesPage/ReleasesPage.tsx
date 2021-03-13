import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import _filter from 'lodash/filter';

import connectToStore from 'decorators/connectToStore';
import { Page, PageTitle, PageContent } from 'ui/Page';
import Input from 'ui/Input';
import Releases from 'components/Releases';
import Button from 'ui/Button';
import Modal from 'components/Modal';
import ModalController from 'controllers/Modal';
import AddReleaseModal from 'components/AddReleaseModal';
import {
  ReleasesPagePropsType,
  ReleasesPageStateType,
} from './ReleasesPage.types';

// @ts-ignore
@connectToStore((state: Pick<ReleasesPagePropsType, 'releases'>) => ({
  releases: state.releases,
}))
@autobind
class ReleasesPage extends PureComponent<
  ReleasesPagePropsType,
  ReleasesPageStateType
> {
  static defaultProps = {
    releases: {},
  };

  static propTypes = {
    releases: PropTypes.objectOf(PropTypes.object),
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props: ReleasesPagePropsType) {
    super(props);

    this.state = {
      search: '',
    };
  }

  /**
   * On search string change action
   *
   * @param {Event} e
   * @private
   */
  _onChangeSearchString(e: any) {
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

  render() {
    const { search } = this.state;
    const { releases, dispatch } = this.props;
    const filteredReleases = search
      ? _filter(
          releases,
          (release) =>
            release.id.includes(search) || release.title.includes(search)
        )
      : releases;

    return (
      <Page>
        <PageTitle>Releases</PageTitle>
        <Input
          fluid
          value={search}
          placeholder="For searching type id or title release where..."
          onChange={this._onChangeSearchString}
        />
        <PageContent>
          <Releases items={filteredReleases} dispatch={dispatch} />
          <Button onClick={this._showAddReleaseModal}>Add release</Button>
        </PageContent>
        <Modal {...{ dispatch }} />
      </Page>
    );
  }
}

export default ReleasesPage;
