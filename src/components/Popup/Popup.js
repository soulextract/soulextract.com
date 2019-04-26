import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Text } from '../Text';

function getPathLength (path) {
  const length = path.getTotalLength();
  const actualWidth = path.getBoundingClientRect().width;
  const realWidth = path.getBBox().width;
  const scale = actualWidth / realWidth || 1;
  return length * scale;
}

class Component extends React.Component {
  static displayName = 'Popup';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    message: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
    onOption: PropTypes.func
  };

  enter () {
    const paths = this.frameElement.querySelectorAll('path');

    anime({
      targets: paths,
      strokeDashoffset: [getPathLength, 0],
      easing: 'linear',
      duration: 250
    });
  }

  exit () {
    const paths = this.frameElement.querySelectorAll('path');

    anime({
      targets: paths,
      strokeDashoffset: [0, getPathLength],
      easing: 'linear',
      duration: 250
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
      message,
      option,
      onOption,
      ...etc
    } = this.props;

    return (
      <div
        className={cx(classes.root, className)}
        {...etc}
      >
        <svg
          className={classes.frame}
          ref={ref => (this.frameElement = ref)}
          viewBox='0 0 100 40'
          preserveAspectRatio='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          {/* left-top */}
          <path className={classes.line} d='M0,0 L10,0' />
          <path className={classes.line} d='M0,0 L0,10' />
          {/* right-top */}
          <path className={classes.line} d='M100,0 L90,0' />
          <path className={classes.line} d='M100,0 L100,10' />
          {/* left-bottom */}
          <path className={classes.line} d='M0,40 L10,40' />
          <path className={classes.line} d='M0,40 L0,30' />
        </svg>
        <div className={classes.main}>
          <div className={classes.message}>
            <Text
              audio={audio}
              animation={{ animate: energy.animate }}
            >
              {message}
            </Text>
          </div>
          <div className={classes.options}>
            <button className={classes.option} onClick={onOption}>
              <Text
                audio={audio}
                animation={{ animate: energy.animate }}
              >
                {option}
              </Text>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { Component };
