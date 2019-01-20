import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link } from 'gatsby';
import cx from 'classnames';

import brandURL from './brand.png';

export const styles = () => ({
  root: {
    display: 'block',
    maxWidth: '100%',
    border: 'none',
    outline: 'none',
    userSelect: 'none'
  },
  image: {
    display: 'block',
    margin: 0,
    width: '100%'
  }
});

export const Component = ({ classes, className }) => (
  <Link className={cx(classes.root, className)} to='/'>
    <img className={classes.image} src={brandURL} />
  </Link>
);

Component.displayName = 'Brand';

Component.propTypes = {
  classes: PropTypes.any,
  className: PropTypes.any
};

export const Brand = withStyles(styles)(Component);
