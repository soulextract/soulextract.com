import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { App } from '../components/App';

const styles = theme => ({
  root: {}
});

class Charity extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <App className={classes.root} itemActive='charity'>
        <h1>Charity</h1>
      </App>
    );
  }
}

export default withStyles(styles)(Charity);
