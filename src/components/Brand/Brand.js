import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import anime from 'animejs';

class Component extends React.Component {
  static displayName = 'Brand';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    link: PropTypes.string,
    hover: PropTypes.bool,
    onEnter: PropTypes.func,
    onExit: PropTypes.func
  };

  static defaultProps = {
    link: '/'
  };

  componentWillUnmount () {
    const paths = this.svgElement.querySelectorAll('path');
    anime.remove(paths);
  }

  enter () {
    const { energy, sounds, onEnter } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    anime.set(this.svgElement, { opacity: 1 });

    sounds.logo.play();

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      delay: (path, index) => index * energy.duration.stagger,
      duration: path => this.getPathDuration(path.getTotalLength()),
      complete: () => onEnter && onEnter()
    });
  }

  exit () {
    const { energy, onExit } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      direction: 'reverse',
      duration: energy.duration.exit,
      complete: () => {
        anime.set(this.svgElement, { opacity: 0 });
        onExit && onExit();
      }
    });
  }

  getPathDuration (length) {
    const original = 1400;
    const actual = this.svgElement.getBBox().width;
    const factor = actual / original;

    return length * factor;
  }

  render () {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      link,
      hover,
      onEnter,
      onExit,
      ...etc
    } = this.props;

    return (
      <div className={cx(classes.root, hover && classes.hover, className)} {...etc}>
        <Link className={classes.link} to={link}>
          <svg
            ref={ref => (this.svgElement = ref)}
            className={classes.svg}
            viewBox='0 0 1400 92'
            xmlns='http://www.w3.org/2000/svg'
            onMouseEnter={() => sounds.hover.play()}
          >
            <path className={classes.path} d='M0,81 L263,81 L263,46 L158,46 L158,10 L501,10' />
            <path className={classes.path} d='M290,81 L378,81 L378,37 L290,37 L290,89' />
            <path className={classes.path} d='M405,29 L405,81 L493,81 L493,29' />
            <path className={classes.path} d='M520,2 L520,81 L599,81' />
            <path className={classes.path} d='M547,46 L563,46' />
            <path className={classes.path} d='M538,10 L624,10 L704,90 M616,90 L704,2' />
            <path className={classes.path} d='M711,10 L833,10 M753,18 L753,89' />
            <path className={classes.path} d='M841,89 L841,10 L929,10 L929,46 L853,46 L879,77' />
            <path className={classes.path} d='M953,89 L953,10 L1041,10 L1041,89 M961,46 L1033,46' />
            <path className={classes.path} d='M1126,10 L1068,10 L1068,81 L1181,81' />
            <path className={classes.path} d='M1141,10 L1400,10 M1199,18 L1199,89' />
          </svg>
        </Link>
      </div>
    );
  }
}

export { Component };
