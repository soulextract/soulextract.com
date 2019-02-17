import React from 'react';
import PropTypes from 'prop-types';

import {
  isNumber,
  ENTERING,
  ENTERED,
  EXITING,
  EXITED,
  getAnimationStatusState
} from '../../tools';
import { AnimationContext } from '../AnimationContext';

class Component extends React.PureComponent {
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
    show: true,
    independent: false
  };

  static contextType = AnimationContext;

  constructor () {
    super(...arguments);

    const initialStatus = this.props.animate ? EXITED : ENTERED;

    this.show = this.canShow();
    this.status = initialStatus;
    this.timeout = null;
    this.state = {
      executedStatus: this.status,
      energy: this.getEnergyState(this.status)
    };
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
    const parentEnergy = this.context;
    const { independent } = this.props;
    const show =
      independent || !parentEnergy ? this.props.show : parentEnergy.status === ENTERED;

    return show;
  }

  getEnergyState (status) {
    const { animate, show, independent } = this.props;
    const animationStatusState = getAnimationStatusState(status);
    const duration = this.getDurations();

    return {
      animate,
      show,
      independent,
      duration,
      ...animationStatusState
    };
  }

  updateStatus (status) {
    this.status = status;

    if (this.state.executedStatus !== status) {
      this.setState({
        executedStatus: status,
        energy: this.getEnergyState(status)
      });
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
    const settingDeration = theme.animation.time;
    const time = animate ? duration || settingDeration : 0;

    if (isNumber(time)) {
      return { enter: time, exit: time };
    }

    return { enter: settingDeration, exit: settingDeration, ...time };
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
    const { energy } = this.state;
    const { children } = this.props;

    return (
      <AnimationContext.Provider value={energy}>
        {children}
      </AnimationContext.Provider>
    );
  }
}

export { Component };
