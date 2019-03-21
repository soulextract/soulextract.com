import React from 'react';
import PropTypes from 'prop-types';

import { isNumber } from '../../tools/general';
import {
  ENTERING,
  ENTERED,
  EXITING,
  EXITED,
  getAnimationStatusState
} from '../../tools/animationStatus';
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
        exit: PropTypes.number,
        stagger: PropTypes.number
      })
    ]),
    onUpdate: PropTypes.func,
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

    this.status = this.props.animate ? EXITED : ENTERED;
    this.show = null;
    this.timeout = null;
    this.contextDuration = null;
    this.state = {
      executedStatus: this.status,
      energy: this.getEnergyState(this.status)
    };
  }

  componentDidMount () {
    const parentEnergy = this.context;

    if (parentEnergy && parentEnergy.subscribe) {
      parentEnergy.subscribe(this, this.onEnergyChange);
    }

    this.show = this.canShow();

    if (this.props.animate && this.show) {
      this.enter();
    }
  }

  componentWillUnmount () {
    this.unschedule();

    const parentEnergy = this.context;

    if (parentEnergy && parentEnergy.subscribe) {
      parentEnergy.unsubscribe(this);
    }
  }

  componentDidUpdate () {
    this.onEnergyChange();
  }

  onEnergyChange = () => {
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

    if (independent || !parentEnergy) {
      return this.props.show;
    }

    if (parentEnergy.subscribe) {
      const energy = parentEnergy.getEnergy(this);
      return energy.entering || energy.entered;
    }

    return parentEnergy.status === ENTERED;
  }

  getEnergyState (status) {
    status = status || this.state.executedStatus;

    const { animate, independent } = this.props;
    const show = this.show;
    const animationStatusState = getAnimationStatusState(status);
    const duration = this.getDuration();

    return {
      animate,
      show,
      independent,
      duration,
      ...animationStatusState,
      updateDuration: this.contextUpdateDuration
    };
  }

  updateStatus (status) {
    this.status = status;

    if (this.state.executedStatus !== status) {
      this.setState(() => ({
        executedStatus: status,
        energy: this.getEnergyState(status)
      }), () => {
        if (this.props.onUpdate) {
          this.props.onUpdate(status);
        }
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

  getDuration () {
    const { theme, duration } = this.props;
    const settingDeration = theme.animation.time;
    const settingStagger = theme.animation.stagger;

    let value;

    if (isNumber(duration)) {
      value = {
        enter: duration,
        exit: duration,
        stagger: settingStagger
      };
    } else {
      value = {
        enter: settingDeration,
        exit: settingDeration,
        stagger: settingStagger,
        ...duration
      };
    }

    return {
      ...value,
      ...this.contextDuration
    };
  }

  contextUpdateDuration = newDuration => {
    if (isNumber(newDuration)) {
      this.contextDuration = {
        ...this.contextDuration,
        enter: newDuration,
        exit: newDuration
      };
    } else {
      this.contextDuration = {
        ...this.contextDuration,
        ...newDuration
      };
    }
  }

  enter () {
    if (this.status === ENTERING && this.status === ENTERED) {
      return;
    }

    const duration = this.getDuration();

    this.updateStatus(ENTERING);

    this.schedule(duration.enter, () => this.updateStatus(ENTERED));
  }

  exit () {
    if (this.status === EXITING && this.status === EXITED) {
      return;
    }

    const duration = this.getDuration();

    this.updateStatus(EXITING);

    this.schedule(duration.exit, () => this.updateStatus(EXITED));
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
