import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Fader } from '../Fader';

class Component extends React.Component {
  static displayName = 'Main';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.any
  };

  render () {
    const { theme, classes, className, children, ...etc } = this.props;

    return (
      <Fader
        className={cx(classes.root, className)}
        node='main'
        {...etc}
      >
        <div className={classes.frame} />
        <div className={classes.content}>
          {children}
        </div>
      </Fader>
    );
  }
}

export { Component };
