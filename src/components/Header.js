import React from 'react';
import withStyles from 'react-jss';

import imgHeader from '../images/header.png';

const styles = () => ({
  root: {
    margin: [0, 0, 20]
  },
  img: {
    display: 'block',
    margin: [0, 'auto']
  }
});

const Layout = ({ classes }) => (
  <div className={classes.root}>
    <img className={classes.img} src={imgHeader} />
  </div>
);

export default withStyles(styles)(Layout);
