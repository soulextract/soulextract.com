import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Link } from '../Link';

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
    stableTime: PropTypes.bool,
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func
  };

  static defaultProps = {
    link: '/'
  };

  constructor () {
    super(...arguments);

    const { energy, stableTime } = this.props;

    if (!stableTime) {
      energy.updateDuration({ enter: 820 });
    }
  }

  componentWillUnmount () {
    const paths = this.svgElement.querySelectorAll('path');
    anime.remove(paths);
  }

  enter () {
    const { energy, sounds, stableTime, onEnter } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    anime.set(this.svgElement, { opacity: 1 });

    sounds.logo.play();

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      delay: (path, index) => stableTime ? 0 : index * energy.duration.stagger,
      duration: path => stableTime ? energy.duration.enter : path.getTotalLength(),
      complete: () => {
        onEnter && onEnter();
      }
    });
  }

  exit () {
    const { energy, sounds, onExit } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    sounds.fade.play();

    anime({
      targets: this.svgElement,
      easing: 'easeInCubic',
      duration: energy.duration.exit,
      opacity: 0
    });
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
      stableTime,
      onEnter,
      onExit,
      onLinkStart,
      onLinkEnd,
      ...etc
    } = this.props;

    return (
      <h1 className={cx(classes.root, hover && classes.hover, className)} {...etc}>
        <Link
          className={classes.link}
          href={link}
          title='Soul Extract logo'
          onLinkStart={onLinkStart}
          onLinkEnd={onLinkEnd}
        >
          <span className={classes.title}>SoulExtract</span>
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
      </h1>
    );
  }
}

export { Component };
