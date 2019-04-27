import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Link } from '../components/Link';
import { Secuence } from '../components/Secuence';

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    padding: 20
  },
  main: {
    margin: 'auto',
    textAlign: 'center'
  }
});

class NotFound extends React.PureComponent {
  onStart = () => {
    this.secuenceElement.exit();
  }

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <main className={classes.main}>
          <Secuence ref={ref => (this.secuenceElement = ref)}>
            <h1><Text>Not found</Text></h1>
            <p><Text>The location you are looking for was not found in the system.</Text></p>
            <Link href='/'>
              <Button onClick={this.onStart}>Go to Start</Button>
            </Link>
          </Secuence>
        </main>
      </div>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
