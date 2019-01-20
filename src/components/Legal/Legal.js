import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Component = ({ classes, className }) => (
  <div className={cx(classes.root, className)}>© Josh Mullis 2018</div>
);

Component.displayName = 'Legal';

Component.propTypes = {
  classes: PropTypes.any.isRequired,
  className: PropTypes.any
};

export { Component };
