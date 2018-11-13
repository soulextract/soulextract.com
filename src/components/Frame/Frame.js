import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'react-jss';

import { isFn } from '../../tools';
import { Animation as AnimationComponent } from '../Animation';

export const styles = () => ({
  root: {
    display: 'block',
    marginLeft: 20
  }
});

export class Component extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      Animation,
      theme, // eslint-disable-line no-unused-vars
      classes,
      className,
      children,
      animate,
      show,
      ...rest
    } = this.props;

    return (
      <Animation {...{ animate, show }}>
        {anim => (
          <div className={cx(classes.root, className)} {...rest}>
            <div>Frame: {anim.status}</div>
            <div>{isFn(children) ? children(anim) : children}</div>
          </div>
        )}
      </Animation>
    );
  }
}

Component.propTypes = {
  Animation: PropTypes.any.isRequired,
  theme: PropTypes.any.isRequired,
  classes: PropTypes.any.isRequired
};

Component.defaultProps = {
  Animation: AnimationComponent
};

export const Frame = withStyles(styles)(Component);
