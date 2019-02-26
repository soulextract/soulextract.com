import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import {
  Template,
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
  }

  componentDidMount () {
    // TODO: Modularize the session functionality.

    const visited = window.sessionStorage.getItem('visited');

    if (visited) {
      this.setState({ show1: true });
    } else {
      setTimeout(() => {
        this.setState({ show1: true });
        window.sessionStorage.setItem('visited', 'true');
      }, 1000);
    }
  }

  render () {
    const { show1, show2, show3, show4 } = this.state;
    const { classes } = this.props;

    return (
      <Template
        background={{
          animation: { show: show1 },
          onEnter: () => this.setState({ show2: true })
        }}
      >
        <div className={classes.root}>
          <div className={classes.content}>
            <Brand
              className={classes.brand}
              animation={{ show: show2, independent: true }}
              onEnter={() => this.setState({ show3: true })}
            />
            <Menu
              className={classes.menu}
              animation={{ show: show3, independent: true }}
              scheme='expand'
              onEnter={() => this.setState({ show4: true })}
            />
            <SocialLinks
              className={classes.social}
              animation={{ show: show4, duration: { enter: 400 }, independent: true }}
            />
          </div>
          <Legal className={classes.legal} />
        </div>
      </Template>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.any.isRequired
};

export default withStyles(styles)(Component);
