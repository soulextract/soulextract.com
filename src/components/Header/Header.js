import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { rgba } from 'polished';
import anime from 'animejs';

import { getViewportRange } from '../../tools/viewport';
import { Secuence } from '../Secuence';
import { Brand } from '../Brand';
import { Menu } from '../Menu';

class Component extends React.Component {
  static displayName = 'Header';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.any,
    itemActive: PropTypes.string
  };

  constructor () {
    super(...arguments);

    this.state = {
      show: true, // TODO: false
      shapes: []
    };

    const { energy } = this.props;
    const durationEnter = this.getDurationEnter();

    energy.updateDuration({ enter: durationEnter });
  }

  componentDidMount () {
    this.draw();

    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount () {
    this.stop();

    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.draw();
    this.reset();
  }

  draw () {
    const { theme } = this.props;
    const { small } = getViewportRange();
    const width = this.element.offsetWidth;
    const height = this.element.offsetHeight;

    this.svg.setAttribute('width', width);
    this.svg.setAttribute('height', height);

    const boxWidth = Math.min(800, width);
    const offset = small ? 5 : 20;
    const pit = height - (small ? 5 : 10);
    const double = small ? 0 : 12;

    const x1 = ((width - boxWidth) / 2);
    const x2 = ((width - boxWidth) / 2) + offset;
    const x3 = x2 + (boxWidth / 2);
    const x4 = x2 + boxWidth - (offset * 2);
    const x5 = x4 + offset;

    const backgroundColor = rgba(theme.color.background.dark, theme.color.alpha);

    const ground = {
      d: `M0,0 L${width},0 L${width},${height} L${x5},${height} L${x4},${pit} L${x3},${pit} L${x2},${pit} L${x1},${height} L0,${height} L0,0`,
      fill: backgroundColor,
      stroke: backgroundColor
    };
    const line1 = {
      d: `M0,${height} L${x1},${height}`
    };
    const slash1 = {
      d: `M${x1},${height} L${x2},${pit} M${x1 - double},${height} L${x2 - double},${pit}`,
      stroke: theme.color.secondary.main,
      strokeWidth: 3
    };
    const line2 = {
      d: `M${x2 - double},${pit} L${x3},${pit}`
    };
    const line3 = {
      d: `M${x4 + double},${pit} L${x3},${pit}`
    };
    const slash2 = {
      d: `M${x5},${height} L${x4},${pit} M${x5 + double},${height} L${x4 + double},${pit}`,
      stroke: theme.color.secondary.main,
      strokeWidth: 3
    };
    const line4 = {
      d: `M${width},${height} L${x5},${height}`
    };

    const shapes = [ground, line1, slash1, line2, line3, slash2, line4];

    this.setState({ shapes });
  }

  getDurationEnter () {
    const { small, medium } = getViewportRange();
    return small || medium ? 500 : 1000;
  }

  enter () {
    //
  }

  exit () {
    //
  }

  stop () {
    const shapes = this.svg.querySelectorAll('path');

    anime.remove(shapes);
    anime.remove(this.element);
  }

  reset () {
    const { energy } = this.props;
    const show = energy.entering || energy.entered;
    const shapes = Array.from(this.svg.querySelectorAll('path'));

    this.setState({ show });

    shapes.forEach(shape => {
      shape.removeAttribute('style');
      shape.removeAttribute('stroke-dasharray');
      shape.removeAttribute('stroke-dashoffset');
    });

    anime.set(this.element, { translateY: 0 });
    anime.set(shapes, { opacity: show ? 1 : 0 });
  }

  render () {
    const {
      theme,
      classes,
      energy,
      className,
      itemActive,
      ...etc
    } = this.props;
    const { show, shapes } = this.state;

    return (
      <header
        className={cx(classes.root, className)}
        ref={ref => (this.element = ref)}
        {...etc}
      >
        <svg
          className={classes.svg}
          ref={ref => (this.svg = ref)}
          xmlns='http://www.w3.org/2000/svg'
        >
          {shapes.map((shape, index) => (
            <path
              key={index}
              className={classes.path}
              stroke={shape.stroke || theme.color.primary.dark}
              strokeWidth={shape.strokeWidth || 1}
              fill={shape.fill}
              d={shape.d}
            />
          ))}
        </svg>
        <div className={classes.content}>
          <Secuence animation={{ show, independent: true }}>
            <Brand className={classes.brand} />
            <Menu className={classes.menu} itemActive={itemActive} />
          </Secuence>
        </div>
      </header>
    );
  }
}

export { Component };
