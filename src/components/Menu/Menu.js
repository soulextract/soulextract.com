import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import anime from 'animejs';

import { getViewportRange } from '../../tools';
import { Text } from '../Text';
import { SCHEME_NORMAL, SCHEME_EXPAND } from './Menu.constants';

class Component extends React.PureComponent {
  static displayName = 'Menu';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    scheme: PropTypes.oneOf([SCHEME_NORMAL, SCHEME_EXPAND]),
    onEnter: PropTypes.func,
    onExit: PropTypes.func
  };

  static defaultProps = {
    scheme: SCHEME_NORMAL
  };

  constructor () {
    super(...arguments);

    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false
    };
  }

  componentDidMount () {
    const { sounds } = this.props;
    const linksElements = Array.from(this.element.querySelectorAll('a'));

    linksElements.forEach(linkElement => {
      linkElement.addEventListener('mouseenter', () => sounds.hover.play());
    });
  }

  componentWillUnmount () {
    const elements = this.element.querySelectorAll('a, b');
    anime.remove(elements);
  }

  enter () {
    const { scheme } = this.props;

    if (scheme === SCHEME_NORMAL) {
      this.animateNormalEnter();
    } else {
      this.animateExpandEnter();
    }
  }

  animateNormalEnter () {
    const { energy, onEnter } = this.props;
    const { duration } = energy;

    const divisors = this.element.querySelectorAll('b');

    anime({
      targets: divisors,
      easing: 'easeOutCubic',
      scaleY: [0, 1],
      duration: duration.enter,
      delay: (divisor, index) => index * duration.stagger * 2,
      complete: () => onEnter && onEnter()
    });

    // TODO: Remove timeouts on component unmount.

    setTimeout(() => this.setState({ show1: true }), duration.stagger);
    setTimeout(() => this.setState({ show2: true }), duration.stagger * 3);
    setTimeout(() => this.setState({ show3: true }), duration.stagger * 5);
    setTimeout(() => this.setState({ show4: true }), duration.stagger * 7);
  }

  animateExpandEnter () {
    const { energy, sounds, onEnter } = this.props;
    const { duration } = energy;
    const viewportRange = getViewportRange();

    const divisors = this.element.querySelectorAll('b');
    const links = this.element.querySelectorAll('a');

    sounds.expand.play();

    if (!viewportRange.small) {
      anime({
        targets: divisors[1],
        easing: 'easeOutCubic',
        scaleY: [0, 1],
        duration: duration.enter / 2
      });
      anime({
        targets: [divisors[0], divisors[2]],
        easing: 'easeOutCubic',
        scaleY: [0, 1],
        translateX: (divisor, index) => [[100, 0, -100][index], 0],
        delay: duration.enter / 2,
        duration: duration.enter / 2
      });
    }

    anime({
      targets: links,
      easing: 'easeOutCubic',
      opacity: 1,
      translateX: (link, index) => [[150, 75, -75, -150][index], 0],
      delay: viewportRange.small ? 0 : duration.enter / 2,
      duration: viewportRange.small ? duration.enter : duration.enter / 2,
      complete: () => onEnter && onEnter()
    });
  }

  exit () {
    const { energy, onExit } = this.props;
    const { duration } = energy;

    const divisors = this.element.querySelectorAll('b');
    const links = this.element.querySelectorAll('a');

    anime({
      targets: divisors,
      easing: 'easeOutCubic',
      scaleY: [1, 0],
      duration: duration.exit
    });
    anime({
      targets: links,
      easing: 'easeOutCubic',
      opacity: 0,
      duration: duration.exit,
      complete: () => onExit && onExit()
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
      scheme,
      onEnter,
      onExit,
      ...etc
    } = this.props;
    const { show1, show2, show3, show4 } = this.state;

    const animateText = scheme === SCHEME_NORMAL;

    return (
      <nav
        className={cx(classes.root, className)}
        ref={ref => (this.element = ref)}
        {...etc}
      >
        <Link className={cx(classes.item, classes.link)} to='/news'>
          <Text
            animation={{ animate: animateText, show: show1, stableTime: true, independent: true }}
            audio={{ silent: true }}
          >
            News
          </Text>
        </Link>
        <b className={cx(classes.item, classes.divisor)}>|</b>
        <Link className={cx(classes.item, classes.link)} to='/music'>
          <Text
            animation={{ animate: animateText, show: show2, stableTime: true, independent: true }}
            audio={{ silent: true }}
          >
            Music
          </Text>
        </Link>
        <b className={cx(classes.item, classes.divisor)}>|</b>
        <Link className={cx(classes.item, classes.link)} to='/charity'>
          <Text
            animation={{ animate: animateText, show: show3, stableTime: true, independent: true }}
            audio={{ silent: true }}
          >
            Charity
          </Text>
        </Link>
        <b className={cx(classes.item, classes.divisor)}>|</b>
        <Link className={cx(classes.item, classes.link)} to='/about'>
          <Text
            animation={{ animate: animateText, show: show4, stableTime: true, independent: true }}
            audio={{ silent: true }}
          >
            About
          </Text>
        </Link>
      </nav>
    );
  }
}

export { Component };
