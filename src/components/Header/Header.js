import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { getViewportRange } from '../../tools/viewport';
import { Secuence } from '../Secuence';
import { Brand } from '../Brand';
import { Menu } from '../Menu';
import { shapes } from './Header.shapes';

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

  componentDidMount () {
    this.draw();
  }

  draw () {
    const width = this.frame.offsetWidth;
    const height = this.frame.offsetHeight;

    this.svg.setAttribute('width', width);
    this.svg.setAttribute('height', height);
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
      itemActive,
      ...etc
    } = this.props;

    return (
      <header className={cx(classes.root, className)} {...etc}>
        <div className={classes.ground} />
        <div
          className={classes.frame}
          ref={ref => (this.frame = ref)}
        >
          <svg
            className={classes.shapes}
            ref={ref => (this.svg = ref)}
            viewBox='0 0 1080 74'
            preserveAspectRatio='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            {shapes.map((shape, index) => (
              <path
                key={index}
                className={classes.shapesLine}
                stroke={theme.color.primary[shape.color || 'dark']}
                strokeWidth={shape.strokeWidth}
                d={
                  shape.lines
                    .map(line => {
                      return line
                        .map((point, i) => (i ? 'L' : 'M') + point.join(','))
                        .join(' ');
                    })
                    .join(' ')
                }
              />
            ))}
          </svg>
        </div>
        <div className={classes.content}>
          <Secuence>
            <Brand className={classes.brand} />
            <Menu className={classes.menu} itemActive={itemActive} />
          </Secuence>
        </div>
      </header>
    );
  }
}

export { Component };
