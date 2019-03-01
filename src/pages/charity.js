import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { withStyles } from '../tools';
import { Template } from '../components';

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
      <Template>
        <div className={classes.root}>
          <h1>Charity</h1>
          <Link to='/'>Home</Link>
        </div>
      </Template>
    );
  }
}

export default withStyles(styles)(Charity);
