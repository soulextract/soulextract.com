import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Component extends React.Component {
  static displayName = 'Frame';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    className: PropTypes.any,
    contentClassName: PropTypes.any,
    children: PropTypes.any
  };

  enter () {
    //
  }

  exit () {
    //
  }

  render () {
    const {
      theme,
      classes,
      energy,
      className,
      contentClassName,
      children,
      ...etc
    } = this.props;

    return (
      <div className={cx(classes.root, className)} {...etc}>

      </div>
    );
  }
}

export { Component };
