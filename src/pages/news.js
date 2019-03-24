import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { App } from '../components/App';

const styles = theme => ({
  root: {}
});

class News extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <App className={classes.root} itemActive='news'>
        <h1>News</h1>
      </App>
    );
  }
}

export default withStyles(styles)(News);
