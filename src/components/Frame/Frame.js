import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { getViewportRange } from '../../tools/viewport';
import { geometry } from './Frame.geometry';

class Component extends React.Component {
  static displayName = 'Frame';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    className: PropTypes.any,
    contentClassName: PropTypes.any,
    children: PropTypes.any
  };

  constructor () {
    super(...arguments);

    this.state = {
      shapes: []
    };
  }

  componentDidMount () {
    this.draw();
  }

  draw () {
    const { small } = getViewportRange();

    const originalWidth = 1080;
    const originalHeight = 74;

    const width = this.frame.offsetWidth;
    const height = this.frame.offsetHeight;

    const xScale = width / originalWidth;
    const yScale = height / originalHeight;

    const viewportShapes = small ? geometry.slice(0, 4) : geometry;
    const shapes = viewportShapes.map(shape => {
      shape.lines = shape.lines.map(line => {
        return line.map(([x, y]) => [x * xScale, y * yScale]);
      });
      return shape;
    });

    this.setState({ shapes });
  }

  enter () {
    const { small, medium } = getViewportRange();
    const shapes = this.frame.querySelectorAll('path');

    anime.set(shapes, { opacity: 0 });

    const run = (targets, complete) => {
      anime.set(targets, { opacity: 1 });
      anime({
        targets,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: path => path.getTotalLength() * (small || medium ? 2 : 1),
        easing: 'linear',
        complete
      });
    };

    if (small) {
      const intermediateShapes = [shapes[0], shapes[2]];
      const centralShapes = [shapes[1], shapes[3]];

      run(intermediateShapes, () => {
        run(centralShapes);
      });
    } else {
      const lateralShapes = [shapes[8], shapes[9]];
      const intermediateShapes = [shapes[0], shapes[2], shapes[4], shapes[6]];
      const centralShapes = [shapes[1], shapes[3], shapes[5], shapes[7]];

      run(lateralShapes, () => {
        run(intermediateShapes, () => {
          run(centralShapes);
        });
      });
    }
  }

  exit () {
    const { energy } = this.props;
    const shapes = this.frame.querySelectorAll('path');

    anime({
      targets: shapes,
      strokeDashoffset: [anime.setDashoffset, 0],
      direction: 'reverse',
      duration: energy.duration.exit,
      easing: 'linear',
      complete: () => anime.set(shapes, { opacity: 0 })
    });
  }

  render () {
    const {
      theme,
      classes,
      energy,
      className,
      contentClassName,
      children,
      ...etc
    } = this.props;
    const { shapes } = this.state;

    return (
      <div className={cx(classes.root, className)} {...etc}>
        <div className={classes.ground} />
        <div
          className={classes.frame}
          ref={ref => (this.frame = ref)}
        >
          <svg
            className={classes.shapes}
            xmlns='http://www.w3.org/2000/svg'
          >
            {shapes.map((shape, index) => (
              <path
                key={index}
                className={classes.shapesLine}
                stroke={theme.color.primary[shape.color || 'dark']}
                strokeWidth={shape.strokeWidth}
                d={shape.lines.map(line => line.map((point, i) => (i ? 'L' : 'M') + point.join(',')))}
              />
            ))}
          </svg>
        </div>
        <div className={cx(classes.content, contentClassName)}>
          {children}
        </div>
      </div>
    );
  }
}

export { Component };
