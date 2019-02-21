import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import {
  Layout,
  Background,
  Brand,
  SocialLinks,
  Menu,
  Legal
} from '../components';

const styles = theme => {
  return {
    root: {
      margin: 'auto',
      width: '100%'
    },
    content: {
      display: 'block',
      margin: [0, 'auto'],
      padding: 20
    },
    brand: {
      margin: [0, 'auto', 30],
      padding: [10, 0],
      maxWidth: 700
    },
    menu: {
      margin: [0, 'auto', 20],
      maxWidth: 550
    },
    social: {
      margin: [0, 'auto'],
      maxWidth: 400
    },
    legal: {
      position: 'absolute',
      left: '50%',
      bottom: 2,
      transform: 'translateX(-50%)'
    }
  };
};

class Component extends React.Component {
  constructor () {
    super(...arguments);

    this.state = { show: false };
  }

  componentDidMount () {
    setTimeout(() => this.setState({ show: true }), 1000);
  }

  render () {
    const { show } = this.state;
    const { classes } = this.props;

    return (
      <Layout>
        <Background animation={{ show, duration: { enter: 1000 } }}>
          <div className={classes.root}>
            <div className={classes.content}>
              <Brand className={classes.brand} />
              <Menu className={classes.menu} />
              <SocialLinks className={classes.social} />
            </div>
            <Legal className={classes.legal} />
          </div>
        </Background>
      </Layout>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.any.isRequired
};

export default withStyles(styles)(Component);
