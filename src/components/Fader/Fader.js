import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

class Component extends React.PureComponent {
  static displayName = 'Fader';

  static propTypes = {
    theme: PropTypes.any.isRequired,
    classes: PropTypes.any.isRequired,
    energy: PropTypes.any.isRequired,
    audio: PropTypes.any.isRequired,
    sounds: PropTypes.any.isRequired,
    className: PropTypes.any,
    children: PropTypes.any,
    node: PropTypes.string
  };

  static defaultProps = {
    node: 'span'
  };

  componentWillUnmount () {
    const { sounds } = this.props;

    this.unanimate();
    sounds.fade && sounds.fade.stop();
  }

  enter () {
    const { energy, sounds } = this.props;
    const time = energy.duration.enter;

    sounds.fade && sounds.fade.play();

    this.animate({
      keyframes: [
        { opacity: 1, duration: time / 3 },
        { opacity: 0, duration: time / 5 },
        { opacity: 1, duration: time / 2 }
      ]
    });
  }

  exit () {
    const { energy, sounds } = this.props;
    const time = energy.duration.exit;

    sounds.fade && sounds.fade.play();

    this.animate({
      keyframes: [
        { opacity: 0, duration: time / 3 },
        { opacity: 1, duration: time / 5 },
        { opacity: 0, duration: time / 2 }
      ]
    });
  }

  animate (params) {
    this.unanimate();

    anime({
      targets: this.element,
      easing: 'easeOutCubic',
      ...params
    });
  }

  unanimate () {
    anime.remove(this.element);
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
      node,
      ...rest
    } = this.props;

    return React.createElement(
      node,
      {
        ref: ref => (this.element = ref),
        className: cx(classes.root, className),
        ...rest
      },
      children
    );
  }
}

export { Component };
