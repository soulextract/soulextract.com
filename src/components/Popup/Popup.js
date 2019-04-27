import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Text } from '../Text';
import { Button } from '../Button';
import { Secuence } from '../Secuence';
import { getPathLength } from '../../tools/general';

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
    const { energy } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    anime.set(paths, {
      strokeDasharray: getPathLength
    });

    anime({
      targets: paths,
      strokeDashoffset: [getPathLength, 0],
      easing: 'linear',
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
        <div className={classes.frame}>
          <svg
            className={classes.svg}
            ref={ref => (this.svgElement = ref)}
            viewBox='0 0 100 40'
            preserveAspectRatio='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            {/* left-top */}
            <path className={classes.path} d='M0,10 L0,0 L10,0' />
            {/* right-top */}
            <path className={classes.path} d='M90,0 L100,0 L100,10' />
            {/* left-bottom */}
            <path className={classes.path} d='M10,40 L0,40 L0,30' />
            {/* right-bottom */}
            <path className={classes.path} d='M100,30 L100,40 L90,40' />
          </svg>
        </div>
        <div className={classes.main}>
          <Secuence>
            <div className={classes.message}>
              <Text
                audio={audio}
                animation={{ animate: energy.animate }}
              >
                {message}
              </Text>
            </div>
            <div className={classes.options}>
              <Button
                className={classes.option}
                audio={audio}
                animation={{ animate: energy.animate }}
                onClick={onOption}
              >
                {option}
              </Button>
            </div>
          </Secuence>
        </div>
      </div>
    );
  }
}

export { Component };
