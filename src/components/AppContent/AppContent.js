import React from 'react';
import PropTypes from 'prop-types';

import { getViewportRange } from '../../tools/viewport';

class Component extends React.Component {
  static displayName = 'Header';

  static propTypes = {
    theme: PropTypes.object.isRequired,
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
    const { theme } = this.props;
    const { small, medium } = getViewportRange();

    const enterFrame = (small || medium ? 2 : 4) * theme.animation.time;
    const elementsInFrames = 2;
    const enterElements = elementsInFrames * theme.animation.time;

    const enter = enterFrame + enterElements;

    return { enter };
  }

  render () {
    return this.props.children;
  }
}

export { Component };
