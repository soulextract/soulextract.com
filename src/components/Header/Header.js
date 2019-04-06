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
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.any
  };

  constructor () {
    super(...arguments);

    this.state = {
      show: false,
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

    const boxWidth = Math.min(1000, width);
    const offset = small ? 5 : 20;
    const pit = height - (small ? 5 : 10);
    const double = small ? 0 : 12;

    const x1 = ((width - boxWidth) / 2);
    const x2 = ((width - boxWidth) / 2) + offset;
    const x3 = x2 + (boxWidth / 2);
    const x4 = x2 + boxWidth - (offset * 2);
    const x5 = x4 + offset;

    const backgroundColor = rgba(theme.color.background.dark, theme.color.alpha);
    const lineColor = rgba(theme.color.primary.dark, 0.5);

    const ground = {
      d: `M0,0 L${width},0 L${width},${height} L${x5},${height} L${x4},${pit} L${x3},${pit} L${x2},${pit} L${x1},${height} L0,${height} L0,0`,
      fill: backgroundColor,
      stroke: backgroundColor
    };
    const line1 = {
      d: `M0,${height} L${x1},${height}`,
      stroke: lineColor
    };
    const slash1 = {
      d: `M${x1},${height} L${x2},${pit} M${x1 - double},${height} L${x2 - double},${pit}`,
      stroke: theme.color.tertiary.main,
      strokeWidth: 3
    };
    const line2 = {
      d: `M${x2 - double},${pit} L${x3},${pit}`,
      stroke: lineColor
    };
    const line3 = {
      d: `M${x4 + double},${pit} L${x3},${pit}`,
      stroke: lineColor
    };
    const slash2 = {
      d: `M${x5},${height} L${x4},${pit} M${x5 + double},${height} L${x4 + double},${pit}`,
      stroke: theme.color.tertiary.main,
      strokeWidth: 3
    };
    const line4 = {
      d: `M${width},${height} L${x5},${height}`,
      stroke: lineColor
    };

    const shapes = [ground, line1, slash1, line2, line3, slash2, line4];

    this.setState({ shapes });
  }

  getDurationEnter () {
    const { theme } = this.props;
    const { small, medium } = getViewportRange();
    return (small || medium ? 2 : 4) * theme.animation.time;
  }

  playSound () {
    const { sounds } = this.props;

    if (!sounds.deploy.playing()) {
      sounds.deploy.play();
    }
  }

  stopSound () {
    const { sounds } = this.props;
    sounds.deploy.stop();
  }

  enter () {
    const shapes = Array.from(this.svg.querySelectorAll('path'));
    const [ground, line1, slash1, line2, line3, slash2, line4] = shapes;
    const duration = this.getDurationEnter();

    anime.set(shapes, { opacity: 0 });

    this.playSound();

    anime({
      targets: this.element,
      translateY: ['-100%', 0],
      easing: 'easeOutCubic',
      duration,
      complete: () => this.stopSound()
    });

    anime({
      targets: ground,
      opacity: [0, 1],
      easing: 'easeOutCubic',
      duration,
      complete: () => {
        this.draw();
        this.setState({ show: true });
      }
    });

    const shapesGroup1 = [line1, line4];
    const scaleGroup1 = shapesGroup1[0].getTotalLength() / this.element.offsetWidth;
    const durationGroup1 = duration * scaleGroup1;

    anime.set(shapesGroup1, { opacity: 1 });
    anime({
      targets: shapesGroup1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: durationGroup1
    });

    const shapesGroup2 = [slash1, slash2];
    const scaleGroup2 = shapesGroup2[0].getTotalLength() / this.element.offsetWidth;
    const durationGroup2 = duration * scaleGroup2;

    anime.set(shapesGroup2, { opacity: 1 });
    anime({
      targets: shapesGroup2,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      delay: durationGroup1,
      duration: durationGroup2
    });

    const shapesGroup3 = [line2, line3];
    const scaleGroup3 = shapesGroup3[0].getTotalLength() / this.element.offsetWidth;
    const durationGroup3 = duration * scaleGroup3;

    anime.set(shapesGroup3, { opacity: 1 });
    anime({
      targets: shapesGroup3,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      delay: durationGroup1,
      duration: durationGroup3
    });
  }

  exit () {
    const { energy, sounds } = this.props;
    const shapes = Array.from(this.svg.querySelectorAll('path'));
    const [ground, line1, slash1, line2, line3, slash2, line4] = shapes;
    const duration = energy.duration.exit;

    sounds.deploy.play();

    this.setState({ show: false });

    anime({
      targets: ground,
      opacity: [1, 0],
      easing: 'easeOutCubic',
      duration,
      complete: () => this.stopSound()
    });

    const shapesGroup1 = [line1, line4];
    const scaleGroup1 = shapesGroup1[0].getTotalLength() / this.element.offsetWidth;
    const durationGroup1 = duration * scaleGroup1;

    anime({
      targets: shapesGroup1,
      strokeDashoffset: [anime.setDashoffset, 0],
      direction: 'reverse',
      easing: 'linear',
      duration: durationGroup1
    });

    const shapesGroup2 = [slash1, slash2];
    const scaleGroup2 = shapesGroup2[0].getTotalLength() / this.element.offsetWidth;
    const durationGroup2 = duration * scaleGroup2;

    anime({
      targets: shapesGroup2,
      strokeDashoffset: [anime.setDashoffset, 0],
      direction: 'reverse',
      easing: 'linear',
      delay: durationGroup1,
      duration: durationGroup2
    });

    const shapesGroup3 = [line2, line3];
    const scaleGroup3 = shapesGroup3[0].getTotalLength() / this.element.offsetWidth;
    const durationGroup3 = duration * scaleGroup3;

    anime({
      targets: shapesGroup3,
      strokeDashoffset: [anime.setDashoffset, 0],
      direction: 'reverse',
      easing: 'linear',
      delay: durationGroup1,
      duration: durationGroup3
    });
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
      audio,
      sounds,
      className,
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
            <Brand className={classes.brand} stableTime />
            <Menu className={classes.menu} />
          </Secuence>
        </div>
      </header>
    );
  }
}

export { Component };
