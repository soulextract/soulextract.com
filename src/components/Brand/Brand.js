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
    className: PropTypes.any,
    link: PropTypes.string
  };

  static defaultProps = {
    link: '/'
  };

  componentDidMount () {
    const { energy } = this.props;

    if (energy.animate) {
      anime.set(this.svgElement, { opacity: 0 });
    }
  }

  componentWillUnmount () {
    const paths = this.svgElement.querySelectorAll('path');
    anime.remove(paths);
  }

  enter () {
    const { theme } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    anime.set(this.svgElement, { opacity: 1 });

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutCubic',
      delay: (path, index) => index * theme.animation.stagger,
      duration: path => this.getPathDuration(path.getTotalLength())
    });
  }

  exit () {
    const { theme } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutCubic',
      direction: 'reverse',
      delay: (path, index) => index * theme.animation.stagger,
      duration: path => this.getPathDuration(path.getTotalLength()),
      complete: () => anime.set(this.svgElement, { opacity: 0 })
    });
  }

  getPathDuration (length) {
    const original = 1400;
    const actual = this.svgElement.getBBox().width;
    const factor = actual / original;

    return length * factor;
  }

  render () {
    const { theme, classes, energy, className, link, ...etc } = this.props;

    return (
      <Link className={cx(classes.root, className)} to={link} {...etc}>
        <svg
          ref={ref => (this.svgElement = ref)}
          className={classes.svg}
          viewBox='0 0 1400 92'
          xmlns='http://www.w3.org/2000/svg'
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
    );
  }
}

export { Component };
