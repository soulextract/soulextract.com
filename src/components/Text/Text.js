import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Component extends React.PureComponent {
  static displayName = 'Text';

  static propTypes = {
    theme: PropTypes.any.isRequired,
    classes: PropTypes.any.isRequired,
    energy: PropTypes.any.isRequired,
    className: PropTypes.any,
    children: PropTypes.string.isRequired
  };

  static defaultProps = {
    children: ''
  };

  constructor () {
    super(...arguments);

    this.state = { text: '' };
  }

  componentDidMount () {
    this.flow();
  }

  componentDidUpdate (prevProps) {
    const prevStatus = prevProps.energy.status;
    const { status } = this.props.energy;

    if (prevStatus !== status) {
      this.flow();
    }
  }

  flow () {
    const { energy } = this.props;

    if (energy.entering) {
      this.enter();
    } else if (energy.exiting) {
      this.exit();
    }
  }

  componentWillUnmount () {
    this.stopAnimation();
  }

  render () {
    const { text } = this.state;
    const { theme, classes, energy, className, children, ...etc } = this.props;

    const animating = energy.entering || energy.exiting;

    const cls = cx(
      classes.root,
      {
        [classes.hide]: energy.animate && !energy.show && !animating,
        [classes.animating]: animating
      },
      className
    );

    return (
      <span className={cx(cls)} {...etc}>
        <span className={classes.children}>{children}</span>
        {animating && (
          <span className={classes.text}>
            {text}
            <span className={classes.blink}>&#9611;</span>
          </span>
        )}
      </span>
    );
  }

  enter () {
    this.cancelNextAnimation();
    this.startAnimation(true);
  }

  exit () {
    this.cancelNextAnimation();
    this.startAnimation(false);
  }

  stopAnimation () {
    this.cancelNextAnimation();
    this.setState({ animating: false });
  }

  cancelNextAnimation () {
    window.cancelAnimationFrame(this.currentAnimationFrame);
  }

  startAnimation (isIn) {
    const { theme, children } = this.props;

    if (children.length === 0) {
      return;
    }

    // if (animate) {
    //  sounds.typing && sounds.typing.play();
    // }

    // 1s / frames per second (FPS)
    // 60 FPS are the default in requestAnimationFrame
    const interval = 1000 / 60;

    // The time it will take to add/remove a character per frame
    const realDuration = interval * children.length;

    const timeout = theme.animation.time;
    const duration = Math.min(realDuration, timeout);

    this.cancelNextAnimation();

    this.setState({
      animating: true,
      text: isIn ? '' : children
    });

    const length = children.length;
    let start = performance.now();
    let progress = null;

    const nextAnimation = timestamp => {
      if (!start) {
        start = timestamp;
      }

      progress = Math.max(timestamp - start, 0);
      if (!isIn) {
        progress = duration - progress;
      }

      // partialLength(n) = animationProgressDuration(ms)
      // textTotalLength(n) = totalDuration(ms)
      const newLength = Math.round((progress * length) / duration);
      const text = children.substring(0, newLength);

      this.setState({ text });

      const continueAnimation = isIn ? newLength <= length : newLength > 0;

      if (continueAnimation) {
        this.currentAnimationFrame = window.requestAnimationFrame(
          nextAnimation
        );
      } else {
        this.stopAnimation();
      }
    };

    this.currentAnimationFrame = window.requestAnimationFrame(nextAnimation);
  }
}

export { Component };
