import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import Loader from 'ui/Loader';

const loadable = process => (Wrapped) => {
  @autobind
  class Loadable extends Component {
    constructor(props) {
      super(props);

      this.state = {
        processing: true,
      };
    }

    componentWillMount() {
      this._processing()
        .then(this._processed)
        .catch(this._processed);
    }

    /**
     * Processing process function
     *
     * @return {Promise.<*>}
     * @private
     */
    async _processing() {
      try {
        return await process(this.props);
      } catch (error) {
        throw error;
      }
    }

    /**
     * Finish processing
     *
     * @private
     */
    _processed() {
      this.setState({ processing: false });
    }

    render() {
      const { processing } = this.state;

      return (
        processing ? <Loader /> : <Wrapped {...this.props} />
      );
    }
  }

  return Loadable;
};

export default loadable;
