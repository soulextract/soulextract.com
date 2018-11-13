import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import TransitionComponent from 'react-transition-group/Transition';

export const getStatuses = status => ({
  entering: status === 'entering',
  entered: status === 'entered',
  exiting: status === 'exiting',
  exited: status === 'exited'
});

export const Component = ({
  Transition,
  theme,
  classes, // eslint-disable-line no-unused-vars
  animate,
  show,
  appear,
  duration,
  children,
  ...rest
}) => {
  const transitionDuration = duration || theme.anim.time;
  return (
    <Transition
      appear={animate ? appear : false}
      timeout={animate ? transitionDuration : 0}
      in={show}
      {...rest}
    >
      {status =>
        children(animate ? { status, ...getStatuses(status) } : { status: '' })
      }
    </Transition>
  );
};

Component.propTypes = {
  Transition: PropTypes.any.isRequired,
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
  Transition: TransitionComponent,
  animate: true,
  show: true,
  appear: true
};

export const Animation = withStyles(() => ({}))(Component);
