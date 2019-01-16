import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { isNumber } from '../../tools';

export const ENTERING = 'entering';
export const ENTERED = 'entered';
export const EXITING = 'exiting';
export const EXITED = 'exited';

export const getAnimationState = status => ({
  status,
  [ENTERING]: status === ENTERING,
  [ENTERED]: status === ENTERED,
  [EXITING]: status === EXITING,
  [EXITED]: status === EXITED
});

export class Component extends React.PureComponent {
  constructor() {
    super(...arguments);

    const { animate, show, appear } = this.props;
    const initialStatus = animate && appear ? EXITED : ENTERED;

    this.status = initialStatus;
    this.timeout = null;

    this.state = { executedStatus: this.status };
  }

  componentDidMount() {
    const { animate, show, appear } = this.props;

    if (animate && show && appear) {
      this.enter();
    }
  }

  componentWillUnmount() {
    this.unschedule();
  }

  componentDidUpdate(prevState) {
    const { animate, show } = this.props;

    if (animate && show !== prevState.show) {
      if (show) {
        this.enter();
      } else {
        this.exit();
      }
    }
  }

  updateStatus(status) {
    this.status = status;

    if (this.state.executedStatus !== status) {
      this.setState({ executedStatus: status });
    }
  }

  schedule(time, callback) {
    this.unschedule();
    this.timeout = setTimeout(() => callback(), time);
  }

  unschedule() {
    clearTimeout(this.timeout);
  }

  getDurations() {
    const { theme, animate, duration } = this.props;
    const time = animate ? duration || theme.animation.time : 0;

    if (isNumber(time)) {
      return { enter: time, exit: time };
    }

    return time;
  }

  enter() {
    if (this.status === ENTERING && this.status === ENTERED) {
      return;
    }

    const { enter: enterTime } = this.getDurations();

    this.updateStatus(ENTERING);

    this.schedule(enterTime, () => this.updateStatus(ENTERED));
  }

  exit() {
    if (this.status === EXITING && this.status === EXITED) {
      return;
    }

    const { exit: exitTime } = this.getDurations();

    this.updateStatus(EXITING);

    this.schedule(exitTime, () => this.updateStatus(EXITED));
  }

  render() {
    const { executedStatus } = this.state;
    const { children } = this.props;
    const animationState = getAnimationState(executedStatus);

    return children(animationState);
  }
}

Component.propTypes = {
  theme: PropTypes.any.isRequired,
  classes: PropTypes.any.isRequired,
  animate: PropTypes.bool,
  show: PropTypes.bool,
  appear: PropTypes.bool,
  duration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ]),
  children: PropTypes.func.isRequired
};

Component.defaultProps = {
  animate: true,
  show: true,
  appear: true
};

export const Animation = withStyles(() => ({}))(Component);
