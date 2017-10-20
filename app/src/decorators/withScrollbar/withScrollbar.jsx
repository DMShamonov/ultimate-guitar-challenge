import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import autobind from 'autobind-decorator';
import PerfectScrollbar from 'perfect-scrollbar';
import _isEqual from 'lodash/isEqual';

const withScrollbar = (Wrapped) => {
  @autobind
  class WithScrollbar extends Component {
    componentDidMount() {
      this._ps = new PerfectScrollbar(this._container);
    }

    shouldComponentUpdate(nextProps) {
      return !_isEqual(this.props, nextProps);
    }

    componentDidUpdate() {
      this._ps.update();
    }

    componentWillUnmount() {
      this._ps.destroy();
    }

    render() {
      return (
        <Wrapped
          {...this.props}
          ref={(container) => {
            this._container = findDOMNode(container); // eslint-disable-line react/no-find-dom-node
          }}
        />
      );
    }
  }

  return WithScrollbar;
};

export default withScrollbar;
