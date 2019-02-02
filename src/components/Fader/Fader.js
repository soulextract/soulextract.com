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
    className: PropTypes.any,
    children: PropTypes.any,
    node: PropTypes.string
  };

  static defaultProps = {
    node: 'span'
  };

  componentWillUnmount () {
    this.unanimate();
  }

  enter () {
    const { time } = this.props.theme.animation;

    this.animate({
      keyframes: [
        { opacity: 1, duration: time / 3 },
        { opacity: 0, duration: time / 5 },
        { opacity: 1, duration: time / 2 }
      ]
    });
  }

  exit () {
    const { time } = this.props.theme.animation;

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
      easing: 'easeInOutQuad',
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
