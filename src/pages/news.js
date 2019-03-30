import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';

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
      <Main className={classes.root}>
        <h1>News</h1>
      </Main>
    );
  }
}

export default withStyles(styles)(News);
