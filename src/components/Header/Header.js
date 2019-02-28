import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Brand } from '../Brand';
import { Menu } from '../Menu';

class Component extends React.Component {
  static displayName = 'Header';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.any
  };

  enter () {
    //
  }

  exit () {
    //
  }

  render () {
    const { theme, classes, energy, className, ...etc } = this.props;

    return (
      <div className={cx(classes.root, className)} {...etc}>
        <div className={classes.frame} />
        <div className={classes.content}>
          <Brand className={classes.brand} />
          <Menu className={classes.menu} />
        </div>
      </div>
    );
  }
}

export { Component };
