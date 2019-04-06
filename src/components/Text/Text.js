import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getRandomCharacters } from '../../tools/general';
import { createAnimationTick } from '../../tools/animationTick';
import { SCHEME_TRANSITION, SCHEME_TRANSFORM, RANDOM_CHARACTERS } from './Text.constants';

class Component extends React.PureComponent {
  static displayName = 'Text';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.string.isRequired,
    scheme: PropTypes.oneOf([SCHEME_TRANSITION, SCHEME_TRANSFORM]),
    randomCharacters: PropTypes.string,
    stableTime: PropTypes.bool
  };

  static defaultProps = {
    children: '',
    scheme: SCHEME_TRANSITION,
    randomCharacters: RANDOM_CHARACTERS
  };

  componentWillUnmount () {
    this.cancelAnimate();
  }

  enter () {
    this.animate(true);
  }

  exit () {
    this.animate(false);
  }

  cancelAnimate () {
    if (this.animationTick) {
      this.animationTick.cancel();
      this.animationTick = null;
    }
  }

  playSound () {
    const { energy, sounds } = this.props;

    if (energy.animate && sounds.typing && !sounds.typing.playing()) {
      sounds.typing.play();
    }
  }

  stopSound () {
    const { sounds } = this.props;

    if (sounds.typing) {
      sounds.typing.stop();
    }
  }

  animate (isEntering) {
    const { children, scheme } = this.props;

    if (children.length === 0) {
      return;
    }

    this.cancelAnimate();

    if (scheme === SCHEME_TRANSITION) {
      this.animateTransition(isEntering);
    } else {
      this.animateTransform(isEntering);
    }
  }

  getDuration () {
    const { theme, children, stableTime } = this.props;

    if (stableTime) {
      return theme.animation.time;
    }

    // requestAnimationFrame uses 60 FPS.
    // The time it will take to add/remove a character per frame for
    // the actual text.
    const realDuration = (1000 / 60) * children.length;

    // Animation duration will be at most the animation time setting.
    const duration = Math.min(realDuration, theme.animation.time);

    return duration;
  }

  animateTransition (isEntering) {
    const { children } = this.props;
    const duration = this.getDuration();
    const isInverted = !isEntering;

    this.setOverlayText(isEntering ? '' : children);

    const onCall = ({ timeProgress }) => {
      // If:
      // progressLength(n) = progressDuration(ms)
      // totalLength(n) = totalDuration(ms)
      // Then:
      const newLength = Math.round((timeProgress * children.length) / duration);

      const newText = children.substring(0, newLength);
      this.setOverlayText(newText);

      this.playSound();

      return isEntering ? newLength <= children.length : newLength > 0;
    };

    const onDone = () => this.stopSound();

    this.animationTick = createAnimationTick({ duration, isInverted, onCall, onDone });
  }

  animateTransform (isEntering) {
    const { children, randomCharacters } = this.props;
    const duration = this.getDuration();
    const isInverted = !isEntering;

    const initialText = getRandomCharacters(children.length, randomCharacters);
    this.setOverlayText(initialText);

    const onCall = ({ timeProgress }) => {
      // If:
      // progressLength(n) = progressDuration(ms)
      // totalLength(n) = totalDuration(ms)
      // Then:
      const newLength = Math.round((timeProgress * children.length) / duration);

      const newText1 = children.substring(0, newLength);
      const newText2 = getRandomCharacters(children.length - newLength, randomCharacters);
      this.setOverlayText(newText1 + newText2);

      this.playSound();

      return isEntering ? newLength <= children.length : newLength > 0;
    };

    const onDone = () => {
      if (isInverted) {
        this.setOverlayText('');
      }

      this.stopSound();
    };

    this.animationTick = createAnimationTick({ duration, isInverted, onCall, onDone });
  }

  setOverlayText (text) {
    if (this.overlayTextElement) {
      this.overlayTextElement.textContent = text;
    }
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
      scheme,
      randomCharacters,
      stableTime,
      ...etc
    } = this.props;
    const animating = energy.entering || energy.exiting;

    const cls = cx(
      classes.root,
      {
        [classes.hidden]: energy.animate && !energy.show && !animating,
        [classes.animating]: animating
      },
      className
    );

    return (
      <span className={cls} {...etc}>
        <span className={classes.actualText}>{children}</span>
        {animating && (
          <span className={classes.overlay}>
            <span
              className={classes.overlayText}
              ref={ref => (this.overlayTextElement = ref)}
            />
          </span>
        )}
      </span>
    );
  }
}

export { Component };
