import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';

const Component = ({ classes, className }) => (
  <nav className={cx(classes.root, className)}>
    <Link className={classes.item} to='/news'>
      News
    </Link>
    <span className={cx(classes.item, classes.divisor)}>|</span>
    <Link className={classes.item} to='/music'>
      Music
    </Link>
    <span className={cx(classes.item, classes.divisor)}>|</span>
    <Link className={classes.item} to='/charity'>
      Charity
    </Link>
    <span className={cx(classes.item, classes.divisor)}>|</span>
    <Link className={classes.item} to='/about'>
      About
    </Link>
  </nav>
);

Component.displayName = 'Menu';

Component.propTypes = {
  classes: PropTypes.any.isRequired,
  className: PropTypes.any
};

export { Component };
