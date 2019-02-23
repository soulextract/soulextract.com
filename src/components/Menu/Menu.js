import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import anime from 'animejs';

import { Text } from '../Text';

class Component extends React.PureComponent {
  static displayName = 'Menu';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object,
    className: PropTypes.any
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

  enter () {
    const { classes, energy } = this.props;
    const { duration } = energy;

    const divisors = this.element.querySelectorAll('.' + classes.divisor);

    anime({
      targets: divisors,
      easing: 'easeOutCubic',
      scaleY: [0, 1],
      duration: duration.enter,
      delay: (divisor, index) => index * duration.stagger * 2
    });

    setTimeout(() => this.setState({ show1: true }), duration.stagger);
    setTimeout(() => this.setState({ show2: true }), duration.stagger * 3);
    setTimeout(() => this.setState({ show3: true }), duration.stagger * 5);
    setTimeout(() => this.setState({ show4: true }), duration.stagger * 7);
  }

  exit () {
    //
  }

  render () {
    const { theme, classes, energy, audio, className, ...etc } = this.props;
    const { show1, show2, show3, show4 } = this.state;

    return (
      <nav
        className={cx(classes.root, className)}
        ref={ref => (this.element = ref)}
        {...etc}
      >
        <Link className={cx(classes.item, classes.link)} to='/news'>
          <Text
            animation={{ show: show1, stableTime: true, independent: true }}
            audio={{ silent: true }}
          >
            News
          </Text>
        </Link>
        <span className={cx(classes.item, classes.divisor)}>|</span>
        <Link className={cx(classes.item, classes.link)} to='/music'>
          <Text
            animation={{ show: show2, stableTime: true, independent: true }}
            audio={{ silent: true }}
          >
            Music
          </Text>
        </Link>
        <span className={cx(classes.item, classes.divisor)}>|</span>
        <Link className={cx(classes.item, classes.link)} to='/charity'>
          <Text
            animation={{ show: show3, stableTime: true, independent: true }}
            audio={{ silent: true }}
          >
            Charity
          </Text>
        </Link>
        <span className={cx(classes.item, classes.divisor)}>|</span>
        <Link className={cx(classes.item, classes.link)} to='/about'>
          <Text
            animation={{ show: show4, stableTime: true, independent: true }}
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
