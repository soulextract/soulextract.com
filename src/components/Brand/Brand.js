import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';

import brandURL from './brand.png';

const Component = ({ classes, className }) => (
  <Link className={cx(classes.root, className)} to='/'>
    <img className={classes.image} src={brandURL} />
  </Link>
);

Component.displayName = 'Brand';

Component.propTypes = {
  classes: PropTypes.any,
  className: PropTypes.any
};

export { Component };
