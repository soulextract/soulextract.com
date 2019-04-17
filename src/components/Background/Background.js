import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';
import { getViewportSize } from '@helcor/window-sizes';

import { getRandomNumber } from '../../tools/general';

class Component extends React.PureComponent {
  static displayName = 'Background';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.any,
    initialMaxDuration: PropTypes.number,
    onEnter: PropTypes.func,
    onExit: PropTypes.func
  };

  static defaultProps = {
    initialMaxDuration: 2000
  };

  constructor () {
    super(...arguments);

    this.state = {
      line1Length: 0,
      line2ItemsPositions: [],
      line3ItemsPositions: [],
      circuitLines: [],
      circuitAnimationDone: false
    };

    this.standByStartId = null;
    this.standByAnimationId = null;

    // This is a rough calculation of the time the Background last animating
    // according to the viewport width.
    const { width } = getViewportSize();
    const enterDuration = this.getPathAnimationDuration((47 / 55) * width + (500 / 11));
    this.props.energy.updateDuration({ enter: enterDuration });
  }

  componentDidMount () {
    this.draw();

    window.addEventListener('resize', this.onResize);
  }

  componentDidUpdate () {
    // Because we are re-rendering animated elements every time the component
    // is updated, we need to re-start the animations or reset the elements.
    this.startStandByAnimation();
    anime.set(this.dotLinesContainer.childNodes, { strokeDasharray: '3 7' });
  }

  componentWillUnmount () {
    const { sounds } = this.props;

    this.unanimateAll();
    sounds.start.stop();

    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.draw();
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
    const isLargeScreen = this.isLargeScreen();

    const widthOriginal = 1000;
    const heightOriginal = 600;

    const widthScale = width / widthOriginal;
    const heightScale = height / heightOriginal;

    // Lines go from left to right when they start in the left half.
    // And go from right to left when they start in the right half.

    let linesOriginal = [
      [[31, 80], [45, 98], [478, 98]],
      [[-10, 136], [567, 136], [597, 96], [867, 96]],
      [[923, 21], [507, 21], [496, 33], [98, 33], [65, -10]],
      [[38, 267], [157, 267]],
      [[1010, 225], [566, 225], [503, 307], [295, 307]],
      [[88, 340], [362, 340], [372, 354], [854, 354]],
      [[1010, 368], [908, 368]],
      [[219, 491], [236, 512], [484, 512]],
      [[981, 447], [725, 448], [688, 495]],
      [[855, 536], [618, 535], [579, 485], [-10, 485]],
      [[71, 448], [104, 405], [292, 405]],
      [[34, 610], [63, 560], [147, 560], [173, 520]],
      [[1010, 176], [658, 176]]
    ];

    if (isLargeScreen) {
      linesOriginal = [
        ...linesOriginal,
        [[520, 131], [572, 64]],
        [[27, 174], [275, 174], [314, 135]],
        [[1010, 207], [561, 207], [528, 251], [312, 251]],
        [[971, 243], [615, 243]],
        [[146, 400], [490, 400], [624, 226]],
        [[851, 498], [600, 498], [585, 479], [-10, 479]]
      ];
    }

    const lines = linesOriginal.map(line => {
      return line.map(([x, y]) => [x * widthScale, y * heightScale]);
    });

    return lines;
  }

  enter () {
    const { classes, sounds } = this.props;
    const { width } = this.getPatternsElementSize();
    const duration = Math.min(width, 1000);

    this.setState({ circuitAnimationDone: false });

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
    const circuits = Array.from(this.circuitContainer.querySelectorAll('g'));

    let circuitDurationLongest = 0;

    circuits.forEach(circuit => {
      const dotStart = circuit.querySelector('.' + classes.circuitDotStart);
      const dotEnd = circuit.querySelector('.' + classes.circuitDotEnd);
      const line = circuit.querySelector('.' + classes.circuitLine);
      const length = line.getTotalLength();
      const circuitDuration = this.getPathAnimationDuration(length);
      const dotDuration = duration * (1 / 10);

      circuitDurationLongest = Math.max(circuitDurationLongest, circuitDuration);

      this.animate(dotStart, {
        opacity: 1,
        duration: dotDuration
      });
      this.animate(line, {
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: dotDuration,
        duration: circuitDuration
      });
      this.animate(dotEnd, {
        opacity: 1,
        delay: circuitDuration,
        duration: dotDuration
      });
    });

    clearTimeout(this.standByStartId);
    this.standByStartId = setTimeout(() => {
      this.setState({ circuitAnimationDone: true });

      if (this.props.onEnter) {
        this.props.onEnter();
      }
    }, circuitDurationLongest);

    sounds.start.play();
  }

  exit () {
    const { energy, classes } = this.props;
    const duration = energy.duration.exit;

    this.setState({ circuitAnimationDone: false });

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
    this.animate(
      [
        ...this.circuitContainer.querySelectorAll('.' + classes.circuitDotStart),
        ...this.circuitContainer.querySelectorAll('.' + classes.circuitDotEnd)
      ],
      { opacity: 0, duration: duration * (1 / 10) }
    );
    this.animate(this.circuitContainer.querySelectorAll('.' + classes.circuitLine), {
      strokeDashoffset: [anime.setDashoffset, 0],
      direction: 'reverse',
      duration: duration,
      complete: () => {
        if (this.props.onExit) {
          this.props.onExit();
        }
      }
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
    this.unanimate(this.dotLinesContainer);
    this.unanimate(this.dotLinesContainer.childNodes);
    this.unanimate(this.circuitContainer.querySelectorAll('*'));

    this.stopStandByAnimation();
  }

  stopStandByAnimation () {
    const { classes } = this.props;
    const circuitLineLights = Array.from(
      this.circuitContainer.querySelectorAll('.' + classes.circuitLineLight)
    );

    clearTimeout(this.standByStartId);
    clearTimeout(this.standByAnimationId);

    anime.remove(circuitLineLights);
    circuitLineLights.forEach(circuitLineLight => {
      circuitLineLight.removeAttribute('style');
    });
    anime.set(circuitLineLights, { opacity: 0 });
  }

  startStandByAnimation () {
    const { classes } = this.props;
    const isLargeScreen = this.isLargeScreen();

    const run = () => {
      const pathsAll = Array.from(this.circuitContainer.querySelectorAll('.' + classes.circuitLineLight));

      const paths = Array(isLargeScreen ? getRandomNumber(2, 4) : getRandomNumber(1, 2))
        .fill(0)
        .map(() => pathsAll[getRandomNumber(0, pathsAll.length - 1)]);

      let longestDuration = 0;

      paths.forEach((path, index) => {
        const length = path.getTotalLength();
        const circuitDuration = this.getPathAnimationDuration(length);
        const size = 20;

        longestDuration = Math.max(longestDuration, circuitDuration);

        // TODO: Use `.animate()` method to simplify setup.
        // Currently, it only animates one path if used.

        anime({
          targets: path,
          duration: circuitDuration,
          direction: index % 2 === 0 ? 'normal' : 'reverse',
          begin: () => anime.set(path, { opacity: 1 }),
          change: anim => {
            const progress = length * (anim.progress / 100);
            path.setAttribute('stroke-dasharray', `0 ${progress} ${size} ${length}`);
          },
          complete: () => anime.set(path, { opacity: 0 })
        });
      });

      this.standByAnimationId = setTimeout(run, longestDuration);
    };

    this.stopStandByAnimation();

    run();
  }

  getPathAnimationDuration (length) {
    const { initialMaxDuration } = this.props;
    const isLargeScreen = this.isLargeScreen();

    return Math.min(isLargeScreen ? length : length * 2, initialMaxDuration);
  }

  getPatternsElementSize () {
    const width = (this.patternsElement && this.patternsElement.offsetWidth) || 0;
    const height = (this.patternsElement && this.patternsElement.offsetHeight) || 0;

    return { width, height };
  }

  isLargeScreen () {
    const { width } = getViewportSize();
    return width > 420;
  }

  render () {
    const {
      line1Length,
      line2ItemsPositions,
      line3ItemsPositions,
      circuitLines
    } = this.state;
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      children,
      initialMaxDuration,
      onEnter,
      onExit,
      ...etc
    } = this.props;

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
