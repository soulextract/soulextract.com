import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Component = ({ classes, className, children }) => (
  <div className={cx(classes.root, className)}>
    <div className={classes.image} />
    <div className={classes.light} />
    <div className={classes.content}>{children}</div>
  </div>
);

Component.displayName = 'Background';

Component.propTypes = {
  classes: PropTypes.any.isRequired,
  className: PropTypes.any,
  children: PropTypes.any
};

export { Component };
