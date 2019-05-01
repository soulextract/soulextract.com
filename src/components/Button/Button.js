import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Text } from '../Text';
import { getPathLength } from '../../tools/general';

class Component extends React.Component {
  static displayName = 'Button';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.string.isRequired
  };

  enter () {
    const { energy } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    anime.set(paths, {
      opacity: 1,
      strokeDasharray: getPathLength
    });
    anime.set(this.backgroundElement, { opacity: 1 });

    anime({
      targets: paths,
      strokeDashoffset: [getPathLength, 0],
      easing: 'linear',
      duration: energy.duration.enter
    });
    anime({
      targets: this.backgroundElement,
      easing: 'linear',
      opacity: [0, 1],
      duration: energy.duration.enter
    });
  }

  exit () {
    const { energy } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    anime({
      targets: paths,
      strokeDashoffset: [0, getPathLength],
      easing: 'linear',
      duration: energy.duration.exit
    });
    anime({
      targets: this.backgroundElement,
      easing: 'linear',
      opacity: [1, 0],
      duration: energy.duration.enter
    });
  }

  render () {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      children,
      ...etc
    } = this.props;

    return (
      <button
        className={cx(classes.root, className)}
        {...etc}
      >
        <div
          className={classes.background}
          ref={ref => (this.backgroundElement = ref)}
        />
        <div className={classes.frame}>
          <svg
            className={classes.svg}
            ref={ref => (this.svgElement = ref)}
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path className={classes.path} d='M0,0 L100,0 L100,100' />
            <path className={classes.path} d='M100,100 L0,100 L0,0' />
          </svg>
        </div>
        <div
          className={classes.main}
          onMouseEnter={() => sounds.hover && sounds.hover.play()}
        >
          <Text
            audio={audio}
            animation={{ animate: energy.animate }}
          >
            {children}
          </Text>
        </div>
      </button>
    );
  }
}

export { Component };
