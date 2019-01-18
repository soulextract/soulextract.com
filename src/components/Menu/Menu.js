import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link } from 'gatsby';
import cx from 'classnames';

export const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: [0, 'auto'],
    userSelect: 'none'
  },
  item: {
    display: 'block',
    padding: [10, 0, 10],
    width: '100%',
    lineHeight: 1,
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadow: `0 0 5px ${theme.color.secondary.main}`,
    color: theme.color.primary.main,
    whiteSpace: 'nowrap'
  },
  divisor: {
    display: 'none'
  },
  '@media (min-width: 480px)': {
    item: {
      display: 'inline-block'
    },
    divisor: {
      display: 'inline-block'
    }
  }
});

export const Component = ({ classes, className }) => (
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

Component.propTypes = {
  classes: PropTypes.any.isRequired,
  className: PropTypes.any
};

export const Menu = withStyles(styles)(Component);
