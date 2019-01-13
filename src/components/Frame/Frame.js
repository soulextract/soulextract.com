import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'react-jss';

import { withAnimation } from '../../tools';

export const styles = theme => ({
  root: {}
});

export class Component extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      theme, // eslint-disable-line no-unused-vars
      classes,
      className,
      anim, // eslint-disable-line no-unused-vars
      Anim,
      children,
      ...rest
    } = this.props;

    return (
      <div className={cx(classes.root, className)} {...rest}>
        <Anim>{children}</Anim>
      </div>
    );
  }
}

Component.propTypes = {
  theme: PropTypes.any.isRequired,
  classes: PropTypes.any.isRequired,
  anim: PropTypes.any.isRequired,
  Anim: PropTypes.any.isRequired
};

export const Frame = withStyles(styles)(withAnimation()(Component));
