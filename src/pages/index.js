import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import { Template, Brand, SocialLinks, Menu } from '../components';

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

  render () {
    const { show1, show2, show3, show4 } = this.state;
    const { classes } = this.props;

    return (
      <Template
        background={{ onEnter: () => this.setState({ show1: true }) }}
        legal={{ animation: { show: show4 } }}
      >
        <div className={classes.root}>
          <div className={classes.content}>
            <Brand
              className={classes.brand}
              animation={{ show: show1, independent: true }}
              onEnter={() => this.setState({ show2: true })}
            />
            <Menu
              className={classes.menu}
              animation={{ show: show2, independent: true }}
              scheme='expand'
              onEnter={() => this.setState({ show3: true })}
            />
            <SocialLinks
              className={classes.social}
              animation={{ show: show3, independent: true }}
              onEnter={() => this.setState({ show4: true })}
            />
          </div>
        </div>
      </Template>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.any.isRequired
};

export default withStyles(styles)(Component);
