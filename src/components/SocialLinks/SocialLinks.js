import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Component = ({ classes, className }) => (
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

export { Component };
