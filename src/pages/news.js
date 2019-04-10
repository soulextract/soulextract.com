import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';

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
        <Secuence stagger>
          <h1><Text>News</Text></h1>
          <p><Text>Soul Extract latest news posts.</Text></p>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(News);
