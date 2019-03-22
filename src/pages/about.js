import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Brand } from '../components/Brand';
import { Menu } from '../components/Menu';

const styles = theme => ({
  root: {
    display: 'block'
  }
});

class About extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h1>About</h1>
        <Brand style={{ width: 320 }} />
        <Menu style={{ width: 320 }} itemActive='about' />
      </div>
    );
  }
}

export default withStyles(styles)(About);
