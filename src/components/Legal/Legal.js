import React from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';

export const styles = theme => ({
  root: {
    fontSize: 12,
    color: theme.color.primary.main,
    opacity: 0.3,
    userSelect: 'none'
  }
});

export const Component = ({ classes, className }) => (
  <div className={cx(classes.root, className)}>© Josh Mullis 2018</div>
);

export const Legal = withStyles(styles)(Component);
