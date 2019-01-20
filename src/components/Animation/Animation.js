import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import { isNumber } from '../../tools';

export const ENTERING = 'entering';
export const ENTERED = 'entered';
export const EXITING = 'exiting';
export const EXITED = 'exited';

export const getAnimationStatusState = status => ({
  status,
  [ENTERING]: status === ENTERING,
  [ENTERED]: status === ENTERED,
  [EXITING]: status === EXITING,
  [EXITED]: status === EXITED
});

export const AnimationContext = React.createContext(null);

export class Component extends React.PureComponent {
  static displayName = 'Animation';

  static propTypes = {
    theme: PropTypes.any.isRequired,
    animate: PropTypes.bool,
    show: PropTypes.bool,
    independent: PropTypes.bool,
    duration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        enter: PropTypes.number,
        exit: PropTypes.number
      })
    ]),
    children: PropTypes.any
  };

  static defaultProps = {
    animate: true,
    show: true
  };

  static contextType = AnimationContext;

  constructor () {
    super(...arguments);

    const initialStatus = this.props.animate ? EXITED : ENTERED;

    this.show = this.canShow();
    this.status = initialStatus;
    this.timeout = null;
    this.state = { executedStatus: this.status };
  }

  componentDidMount () {
    if (this.props.animate && this.show) {
      this.enter();
    }
  }

  componentWillUnmount () {
    this.unschedule();
  }

  componentDidUpdate () {
    const { animate } = this.props;
    const show = this.canShow();

    if (animate && show !== this.show) {
      this.show = show;

      if (this.show) {
        this.enter();
      } else {
        this.exit();
      }
    }
  }

  canShow () {
    const parentStatus = this.context;
    const { independent } = this.props;
    const show =
      independent || !parentStatus ? this.props.show : parentStatus === ENTERED;

    return show;
  }

  updateStatus (status) {
    this.status = status;

    if (this.state.executedStatus !== status) {
      this.setState({ executedStatus: status });
    }
  }

  schedule (time, callback) {
    this.unschedule();
    this.timeout = setTimeout(() => callback(), time);
  }

  unschedule () {
    clearTimeout(this.timeout);
  }

  getDurations () {
    const { theme, animate, duration } = this.props;
    const time = animate ? duration || theme.animation.time : 0;

    if (isNumber(time)) {
      return { enter: time, exit: time };
    }

    return time;
  }

  enter () {
    if (this.status === ENTERING && this.status === ENTERED) {
      return;
    }

    const durations = this.getDurations();

    this.updateStatus(ENTERING);

    this.schedule(durations.enter, () => this.updateStatus(ENTERED));
  }

  exit () {
    if (this.status === EXITING && this.status === EXITED) {
      return;
    }

    const durations = this.getDurations();

    this.updateStatus(EXITING);

    this.schedule(durations.exit, () => this.updateStatus(EXITED));
  }

  render () {
    const { executedStatus } = this.state;
    const { children } = this.props;

    return (
      <AnimationContext.Provider value={executedStatus}>
        {children}
      </AnimationContext.Provider>
    );
  }
}

export const Animation = withStyles(() => ({}))(props => <Component {...props} />);
