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
      display: 'flex',
      flexDirection: 'column',
      margin: [0, 'auto'],
      padding: 20
    },
    brand: {
      margin: [0, 'auto', 30],
      padding: [10, 0],
      width: '100%',
      maxWidth: 700
    },
    menu: {
      margin: [0, 'auto', 20],
      width: '100%',
      maxWidth: 600
    },
    social: {
      margin: [0, 'auto'],
      width: '100%',
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

    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false
    };

    this.show3Timeout = null;
    this.show4Timeout = null;
  }

  componentDidMount () {
    setTimeout(() => this.setState({ show1: true }), 1000);
  }

  componentWillUnmount () {
    clearTimeout(this.show3Timeout);
    clearTimeout(this.show4Timeout);
  }

  onBackgroundEnter = () => {
    this.setState({ show2: true });
    this.show3Timeout = setTimeout(() => this.setState({ show3: true }), 200);
    this.show4Timeout = setTimeout(() => this.setState({ show4: true }), 500);
  }

  render () {
    const { show1, show2, show3, show4 } = this.state;
    const { classes } = this.props;

    return (
      <Layout>
        <Background animation={{ show: show1 }} onEnter={this.onBackgroundEnter}>
          <div className={classes.root}>
            <div className={classes.content}>
              <Brand
                className={classes.brand}
                animation={{ show: show2, independent: true }}
              />
              <Menu
                className={classes.menu}
                animation={{ show: show3, independent: true }}
              />
              <SocialLinks
                className={classes.social}
                animation={{ show: show4, duration: { enter: 400 }, independent: true }}
              />
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
