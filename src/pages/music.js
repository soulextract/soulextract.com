import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { App } from '../components/App';

const styles = theme => ({
  root: {}
});

class Music extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <App className={classes.root} itemActive='music'>
        <h1>Music</h1>
      </App>
    );
  }
}

export default withStyles(styles)(Music);
