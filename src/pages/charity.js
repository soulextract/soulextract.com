import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools';
import { Brand, Menu } from '../components';

const styles = theme => ({
  root: {
    display: 'block'
  }
});

class Charity extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h1>Charity</h1>
        <Brand style={{ width: 320 }} />
        <Menu style={{ width: 320 }} />
      </div>
    );
  }
}

export default withStyles(styles)(Charity);
