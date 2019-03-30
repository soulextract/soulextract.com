import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';

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
      <Main className={classes.root}>
        <article>
          <h1>Charity</h1>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(Charity);
