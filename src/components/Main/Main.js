import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Component extends React.Component {
  static displayName = 'Main';

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
    const { theme, classes, energy, className, children, ...etc } = this.props;

    return (
      <div className={cx(classes.root, className)} {...etc}>
        <div className={classes.ground} />
        <div className={classes.frame} />
        <div className={classes.content}>
          {children}
        </div>
      </div>
    );
  }
}

export { Component };
