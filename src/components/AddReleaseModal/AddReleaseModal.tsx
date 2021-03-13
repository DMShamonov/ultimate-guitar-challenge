import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import _isEmpty from 'lodash/isEmpty';

import connectToStore from 'decorators/connectToStore';
import { Form, FormMessage, FormGroup, FormFooter } from 'ui/Form';
import Input from 'ui/Input';
import Button from 'ui/Button';
import ReleaseApi from 'controllers/api/ReleaseApi';
import ReleaseController from 'controllers/Release';
import Modal from 'controllers/Modal';

// @ts-ignore
@connectToStore((state) => ({
  releases: state.releases,
}))
@autobind
class AddReleaseModal extends PureComponent<any, any> {
  static defaultProps = {
    releases: {},
  };

  static propTypes = {
    releases: PropTypes.objectOf(PropTypes.object),
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props: any) {
    super(props);

    this.state = {
      id: '',
      error: false,
      processing: false,
    };
  }

  _handleOnSubmit(e: any) {
    e.preventDefault();

    this._setProcessing();

    const { id } = this.state;
    const { releases, dispatch } = this.props;

    if (!releases[id]) {
      new ReleaseApi()
        .get(id)
        .then(({ data }) => ReleaseController.add(data)(dispatch))
        .then(() => {
          Modal.hide()(dispatch);
        })
        .catch((error) => this._setErrors(error.message));
    } else {
      this._setErrors('That release is already exists!');
    }
  }

  _setProcessing() {
    this.setState({ processing: true, error: false });
  }

  _setErrors(error: any) {
    this.setState({ error, processing: false });
  }

  render() {
    const { id, error, processing } = this.state;
    const disabledSubmit = processing || _isEmpty(id);

    return (
      <Form onSubmit={this._handleOnSubmit}>
        {error && <FormMessage type="error">{error}</FormMessage>}
        <FormGroup>
          <Input
            fluid
            value={id}
            placeholder="Type MusicBrainz release id"
            autoFocus
            required
            onChange={(e) => this.setState({ id: e.target.value })}
          />
        </FormGroup>
        <FormFooter>
          <Button type="submit" disabled={disabledSubmit}>
            Add
          </Button>
        </FormFooter>
      </Form>
    );
  }
}

export default AddReleaseModal;
