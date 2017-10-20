import React, { PureComponent } from 'react';

import connectToStore from 'decorators/connectToStore';

@connectToStore(state => ({
  releases: state.releases,
}))
class Releases extends PureComponent {
  render() {
    return (
      <p>Hi!</p>
    );
  }
}

export default Releases;

