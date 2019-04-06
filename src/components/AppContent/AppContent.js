import React from 'react';
import PropTypes from 'prop-types';

import { getViewportRange } from '../../tools/viewport';

class Component extends React.Component {
  static displayName = 'Header';

  static propTypes = {
    energy: PropTypes.object.isRequired,
    children: PropTypes.any
  };

  constructor () {
    super(...arguments);

    const { energy } = this.props;
    const duration = this.getDuration();

    energy.updateDuration(duration);
  }

  getDuration () {
    const { energy } = this.props;
    const { small, medium } = getViewportRange();

    const enterFrame = small || medium ? 500 : 1000;
    const elementsInFrames = 2;
    const enterElements = elementsInFrames * energy.duration.enter;

    const enter = enterFrame + enterElements;

    return { enter };
  }

  render () {
    return this.props.children;
  }
}

export { Component };
