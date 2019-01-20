import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

export const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    userSelect: 'none'
  },
  item: {
    display: 'inline-block',
    padding: 10,
    lineHeight: 1,
    fontSize: 24,
    textShadow: `0 0 5px ${theme.color.secondary.main}`,
    color: theme.color.primary.main,
    '&:hover': {
      color: theme.color.secondary.main
    }
  }
});

export const Component = ({ classes, className }) => (
  <div className={cx(classes.root, className)}>
    <a className={classes.item} href='#' target='youtube'>
      <span className='mdi mdi-youtube' />
    </a>
    <a className={classes.item} href='#' target='spotify'>
      <span className='mdi mdi-spotify' />
    </a>
    <a className={classes.item} href='#' target='soundcloud'>
      <span className='mdi mdi-soundcloud' />
    </a>
    <a className={classes.item} href='#' target='facebook'>
      <span className='mdi mdi-facebook' />
    </a>
    <a className={classes.item} href='#' target='twitter'>
      <span className='mdi mdi-twitter' />
    </a>
    <a className={classes.item} href='#' target='instagram'>
      <span className='mdi mdi-instagram' />
    </a>
    <a className={classes.item} href='#' target='email'>
      <span className='mdi mdi-email-outline' />
    </a>
  </div>
);

Component.displayName = 'SocialLinks';

Component.propTypes = {
  classes: PropTypes.any.isRequired,
  className: PropTypes.any
};

export const SocialLinks = withStyles(styles)(Component);
