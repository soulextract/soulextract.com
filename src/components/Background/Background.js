import React from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';

import backgroundImg from './background.jpg';

export const styles = theme => {
  return {
    positioned: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    root: {
      composes: '$positioned',
      position: 'fixed',
      backgroundColor: theme.color.background.main
    },
    image: {
      composes: '$positioned',
      zIndex: -1,
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center center',
      opacity: 1
    },
    content: {
      composes: '$positioned',
      zIndex: 2,
      display: 'flex',
      overflowY: 'auto'
    }
  };
};

export const Component = ({ classes, className, children }) => (
  <div className={cx(classes.root, className)}>
    <div className={classes.image} />
    <div className={classes.light} />
    <div className={classes.content}>{children}</div>
  </div>
);

export const Background = withStyles(styles)(Component);
