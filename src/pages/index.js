import React from 'react';
import withStyles from 'react-jss';
import { rgba } from 'polished';

import {
  Layout,
  Background,
  Brand,
  SocialLinks,
  Menu,
  Legal
} from '../components';

const styles = theme => {
  const lightColor = rgba(theme.color.secondary.main, 0.13);
  return {
    root: {
      margin: 'auto'
    },
    light: {
      position: 'absolute',
      zIndex: 0,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundImage: `radial-gradient(${lightColor} 35%, transparent)`
    },
    content: {
      position: 'relative',
      zIndex: 1,
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
    },
    '@media (min-width: 480px)': {
      light: {
        backgroundImage: `radial-gradient(${lightColor} 20%, transparent)`
      }
    }
  };
};

class Component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <Background>
          <div className={classes.root}>
            <div className={classes.light} />
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

export default withStyles(styles)(Component);
