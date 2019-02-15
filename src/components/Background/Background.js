import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { getRandomNumber } from '../../tools';

class Component extends React.PureComponent {
  static displayName = 'Background';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.any
  };

  constructor () {
    super(...arguments);

    this.state = {
      line1Length: 0,
      line2ItemsPositions: []
    };
  }

  componentDidMount () {
    const line1Length = this.getLine1Length();
    const line2ItemsPositions = this.getLine2ItemsPositions();

    this.setState({ line1Length, line2ItemsPositions });
  }

  componentWillUnmount () {
    this.unanimateAll();
  }

  getLine1Length () {
    const line1Height = 10;
    const height = this.patternsElement.offsetHeight;
    return Math.ceil(height / line1Height);
  }

  getLine2ItemsPositions () {
    const lineSpace = 100;
    const width = this.patternsElement.offsetWidth;
    const length = Math.floor(width / lineSpace);

    const itemsPositions = [];

    for (let index = 0; index < length; index++) {
      const itemPosition = getRandomNumber(index * lineSpace, index * lineSpace + lineSpace);
      itemsPositions.push(itemPosition);
    }

    return itemsPositions;
  }

  enter () {
    const { theme } = this.props;
    const duration = theme.animation.time;

    this.animate(
      [this.light1Element, ...this.line1Container.childNodes],
      { opacity: 1, duration }
    );

    this.animate([...this.line2Container.childNodes], {
      strokeDasharray: '3 7',
      duration
    });
  }

  exit () {
    const { theme } = this.props;
    const duration = theme.animation.time;

    this.animate(
      [this.light1Element, ...this.line1Container.childNodes],
      { opacity: 0, duration }
    );

    this.animate([...this.line2Container.childNodes], {
      strokeDasharray: '0 10',
      duration
    });
  }

  animate (elements, params) {
    this.unanimate(elements);

    anime({
      targets: elements,
      easing: 'easeInOutQuad',
      ...params
    });
  }

  unanimate (elements) {
    anime.remove(elements);
  }

  unanimateAll () {
    this.unanimate(this.light1Element);
    this.unanimate(this.line1Container.childNodes);
    this.unanimate(this.line2Container.childNodes);
  }

  render () {
    const { line1Length, line2ItemsPositions } = this.state;
    const { theme, classes, energy, className, children, ...etc } = this.props;

    const patternsHeight = (this.patternsElement && this.patternsElement.offsetHeight) || 0;

    return (
      <div className={cx(classes.root, className)} {...etc}>
        <div
          className={classes.patterns}
          ref={ref => (this.patternsElement = ref)}
        >
          <div
            className={classes.light1}
            ref={ref => (this.light1Element = ref)}
          />
          <div
            className={classes.line1Container}
            ref={ref => (this.line1Container = ref)}
          >
            {Array(line1Length).fill().map((value, index) => (
              <div
                key={index}
                style={{ top: `${index * 10}px` }}
                className={classes.line1}
              />
            ))}
          </div>
          <svg
            className={classes.line2Container}
            ref={ref => (this.line2Container = ref)}
            xmlns='http://www.w3.org/2000/svg'
          >
            {line2ItemsPositions.map((value, index) => (
              <line
                className={classes.line2}
                key={index}
                y1='0px'
                y2={`${patternsHeight}px`}
                x1={`${value}px`}
                x2={`${value + 1}px`}
              />
            ))}
          </svg>
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    );
  }
}

export { Component };
