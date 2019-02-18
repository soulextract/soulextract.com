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
      line2ItemsPositions: [],
      line3ItemsPositions: [],
      circuitLines: []
    };
  }

  componentDidMount () {
    this.draw();
  }

  componentWillUnmount () {
    this.unanimateAll();
    this.stopStandByAnimation();
  }

  draw () {
    const line1Length = this.getLine1Length();
    const line2ItemsPositions = this.getLine2ItemsPositions();
    const line3ItemsPositions = this.getLine3ItemsPositions();
    const circuitLines = this.getCircuitLines();

    this.setState({
      line1Length,
      line2ItemsPositions,
      line3ItemsPositions,
      circuitLines
    });
  }

  getLine1Length () {
    const line1Height = 10;
    const { height } = this.getPatternsElementSize();
    return Math.ceil(height / line1Height);
  }

  getLine2ItemsPositions () {
    const lineSpace = 100;
    const { width } = this.getPatternsElementSize();
    const length = Math.floor(width / lineSpace);

    const itemsPositions = [];

    for (let index = 0; index < length; index++) {
      const itemPosition = getRandomNumber(index * lineSpace, index * lineSpace + lineSpace);
      itemsPositions.push(itemPosition);
    }

    return itemsPositions;
  }

  getLine3ItemsPositions () {
    const { height } = this.getPatternsElementSize();
    const lineSpace = 200;
    const length = Math.floor(height / lineSpace);

    const itemsPositions = [];

    for (let index = 0; index < length; index++) {
      const itemPosition = getRandomNumber(index * lineSpace, index * lineSpace + lineSpace);
      itemsPositions.push(itemPosition);
    }

    return itemsPositions;
  }

  getCircuitLines () {
    const { width, height } = this.getPatternsElementSize();

    const widthOriginal = 1000;
    const heightOriginal = 600;

    const widthScale = width / widthOriginal;
    const heightScale = height / heightOriginal;

    let linesOriginal = [
      [[31, 80], [45, 98], [478, 98]],
      [[-10, 136], [567, 136], [597, 96], [867, 96]],
      [[65, -10], [98, 33], [496, 33], [507, 21], [923, 21]],
      [[38, 267], [157, 267]],
      [[295, 307], [503, 307], [566, 225], [1010, 225]],
      [[88, 340], [362, 340], [372, 354], [854, 354]],
      [[908, 368], [1010, 368]],
      [[219, 491], [236, 512], [484, 512]],
      [[688, 495], [725, 448], [981, 447]],
      [[-10, 485], [579, 485], [618, 535], [855, 536]],
      [[71, 448], [104, 405], [292, 405]],
      [[34, 610], [63, 560], [147, 560], [173, 520]],
      [[658, 176], [1010, 176]]
    ];

    if (width > 420) {
      linesOriginal = [
        ...linesOriginal,
        [[520, 131], [572, 64]],
        [[27, 174], [275, 174], [314, 135]],
        [[312, 251], [528, 251], [561, 207], [1010, 207]],
        [[615, 243], [971, 243]],
        [[146, 400], [490, 400], [624, 226]],
        [[-10, 479], [585, 479], [600, 498], [851, 498]]
      ];
    }

    const lines = linesOriginal.map(line => {
      return line.map(([x, y]) => [x * widthScale, y * heightScale]);
    });

    return lines;
  }

  enter () {
    const { energy, classes } = this.props;
    const duration = energy.duration.enter;

    // Light and horizontal lines
    this.animate(
      [this.light1Element, ...this.line1Container.childNodes],
      { opacity: 1, duration }
    );

    // Dot lines
    this.animate(this.dotLinesContainer, { opacity: 1, duration });
    this.animate([...this.dotLinesContainer.childNodes], {
      strokeDasharray: ['3 35', '3 7'],
      duration
    });

    // Circuits
    this.animate(this.circuitContainer.querySelectorAll('.' + classes.circuitDotStart), {
      opacity: 1,
      duration: duration * (1 / 5)
    });
    this.animate(this.circuitContainer.querySelectorAll('.' + classes.circuitLine), {
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: duration * (1 / 5),
      duration: duration * (4 / 5)
    });
    this.animate(this.circuitContainer.querySelectorAll('.' + classes.circuitDotEnd), {
      opacity: 1,
      delay: duration * (4 / 5),
      duration: duration * (1 / 5)
    });

    this.startStandByAnimation();
  }

  exit () {
    const { energy, classes } = this.props;
    const duration = energy.duration.enter;

    // Light and horizontal lines
    this.animate(
      [this.light1Element, ...this.line1Container.childNodes],
      { opacity: 0, duration }
    );

    // Dot lines
    this.animate(this.dotLinesContainer, { opacity: 0, duration });
    this.animate([...this.dotLinesContainer.childNodes], {
      strokeDasharray: ['3 7', '3 35'],
      duration
    });

    // Circuit lines
    this.animate(this.circuitContainer.querySelectorAll('.' + classes.circuitDotEnd), {
      opacity: 0,
      duration: duration * (1 / 5)
    });
    this.animate(this.circuitContainer.querySelectorAll('.' + classes.circuitLine), {
      strokeDashoffset: [anime.setDashoffset, 0],
      direction: 'reverse',
      delay: duration * (1 / 5),
      duration: duration * (4 / 5)
    });
    this.animate(this.circuitContainer.querySelectorAll('.' + classes.circuitDotStart), {
      opacity: 0,
      delay: duration * (4 / 5),
      duration: duration * (1 / 5)
    });

    this.stopStandByAnimation();
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
    this.unanimate(this.dotLinesContainer);
    this.unanimate(this.dotLinesContainer.childNodes);
    this.unanimate(this.circuitContainer.querySelectorAll('*'));
  }

  getPatternsElementSize () {
    const width = (this.patternsElement && this.patternsElement.offsetWidth) || 0;
    const height = (this.patternsElement && this.patternsElement.offsetHeight) || 0;

    return { width, height };
  }

  stopStandByAnimation () {
    const { classes } = this.props;
    const circuitLineLights = this.circuitContainer.querySelectorAll('.' + classes.circuitLineLight);

    clearInterval(this.standByAnimationId);

    anime.remove(circuitLineLights);
    anime.set(circuitLineLights, { opacity: 0 });
  }

  startStandByAnimation () {
    const { theme, classes } = this.props;
    const intervalTime = 4000;
    const animationDuration = theme.animation.time * 2.5;

    let counter = 0;

    this.stopStandByAnimation();

    this.standByAnimationId = setInterval(() => {
      counter++;

      const pathsAll = Array.from(this.circuitContainer.querySelectorAll('.' + classes.circuitLineLight));

      let paths = [];
      if (counter % 3 === 0) {
        paths = pathsAll;
      } else {
        const path1 = pathsAll[getRandomNumber(0, pathsAll.length - 1)];
        const path2 = pathsAll[getRandomNumber(0, pathsAll.length - 1)];
        const path3 = pathsAll[getRandomNumber(0, pathsAll.length - 1)];
        const path4 = pathsAll[getRandomNumber(0, pathsAll.length - 1)];
        paths = [path1, path2, path3, path4];
      }

      paths.forEach((path, index) => {
        const length = path.getTotalLength();
        const size = 20;

        // TODO: Use `.animate()` method to simplify setup.
        // Currently, it only animates one path if used.

        anime({
          targets: path,
          duration: animationDuration,
          direction: index % 2 === 0 ? 'normal' : 'reverse',
          begin: () => anime.set(path, { opacity: 1 }),
          change: anim => {
            const progress = length * (anim.progress / 100);
            path.setAttribute('stroke-dasharray', `0 ${progress} ${size} ${length}`);
          },
          complete: () => anime.set(path, { opacity: 0 })
        });
      });
    }, intervalTime);
  }

  render () {
    const {
      line1Length,
      line2ItemsPositions,
      line3ItemsPositions,
      circuitLines
    } = this.state;
    const { theme, classes, energy, className, children, ...etc } = this.props;

    const { width, height } = this.getPatternsElementSize();

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
            className={cx(classes.svgContainer, classes.dotLinesContainer)}
            ref={ref => (this.dotLinesContainer = ref)}
            xmlns='http://www.w3.org/2000/svg'
          >
            {line2ItemsPositions.map((value, index) => (
              <line
                className={cx(classes.dotLine, classes.line2)}
                key={index}
                x1={`${value}px`}
                x2={`${value}px`}
                y1='0px'
                y2={`${height}px`}
              />
            ))}
            {line3ItemsPositions.map((value, index) => (
              <line
                className={cx(classes.dotLine, classes.line3)}
                key={index}
                x1='0px'
                x2={`${width}px`}
                y1={`${value}px`}
                y2={`${value}px`}
              />
            ))}
          </svg>
          <svg
            className={cx(classes.svgContainer, classes.circuitContainer)}
            ref={ref => (this.circuitContainer = ref)}
            xmlns='http://www.w3.org/2000/svg'
          >
            {circuitLines.map((line, index) => (
              <g className={classes.circuit} key={index} data-index={index}>
                <path
                  className={classes.circuitLine}
                  d={line.map(([x, y], pIndex) => `${pIndex === 0 ? 'M' : 'L'}${x},${y}`).join(' ')}
                />
                <path
                  className={classes.circuitLineLight}
                  d={line.map(([x, y], pIndex) => `${pIndex === 0 ? 'M' : 'L'}${x},${y}`).join(' ')}
                />
                <circle
                  className={cx(classes.circuitDot, classes.circuitDotStart)}
                  cx={`${line[0][0]}px`}
                  cy={`${line[0][1]}px`}
                  r='3px'
                />
                <circle
                  className={cx(classes.circuitDot, classes.circuitDotEnd)}
                  cx={`${line[line.length - 1][0]}px`}
                  cy={`${line[line.length - 1][1]}px`}
                  r='3px'
                />
              </g>
            ))}
          </svg>
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    );
  }
}

export { Component };
