import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools';
import { Brand, SocialLinks, Menu, Legal } from '../components';

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
      bottom: 0,
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
      show3: false
    };
  }

  onLinkStart = (event, { isInternal }) => {
    if (isInternal) {
      this.setState({
        show1: false,
        show2: false,
        show3: false
      });
    }
  }

  render () {
    const { show1, show2, show3 } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Brand
            className={classes.brand}
            onEnter={() => this.setState({ show1: true })}
            onLinkStart={this.onLinkStart}
          />
          <Menu
            className={classes.menu}
            animation={{ show: show1, independent: true, duration: { enter: 400 } }}
            scheme='expand'
            onEnter={() => this.setState({ show2: true })}
            onLinkStart={this.onLinkStart}
          />
          <SocialLinks
            className={classes.social}
            animation={{ show: show2, independent: true }}
            onEnter={() => this.setState({ show3: true })}
            onLinkStart={this.onLinkStart}
          />
        </div>
        <Legal
          className={classes.legal}
          animation={{ show: show3, independent: true }}
          onLinkStart={this.onLinkStart}
        />
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.any.isRequired
};

export default withStyles(styles)(Component);
