import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'react-jss';
import anime from 'animejs';

import { withAnimation } from '../../tools';

export const styles = theme => ({
  root: {
    opacity: props => props.anim.entered ? 1 : 0
  }
});

export class Component extends React.Component {
  static displayName = 'Fader';

  componentDidMount () {
    this.flow();
  }

  componentWillUnmount () {
    this.unanimate();
  }

  componentDidUpdate (prevProps) {
    const prevStatus = prevProps.anim.status;
    const { status } = this.props.anim;

    if (prevStatus !== status) {
      this.flow();
    }
  }

  flow () {
    const { anim } = this.props;

    if (anim.entering) {
      this.enter();
    } else if (anim.exiting) {
      this.exit();
    }
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
      anim,
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

Component.propTypes = {
  theme: PropTypes.any.isRequired,
  classes: PropTypes.any.isRequired,
  anim: PropTypes.any.isRequired,
  className: PropTypes.any,
  children: PropTypes.any,
  node: PropTypes.string
};

Component.defaultProps = {
  node: 'span'
};

export const Fader = withAnimation()(withStyles(styles)(Component));
