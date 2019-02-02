import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Component extends React.PureComponent {
  static displayName = 'Frame';

  static propTypes = {
    theme: PropTypes.any.isRequired,
    classes: PropTypes.any.isRequired,
    energy: PropTypes.any.isRequired,
    className: PropTypes.any,
    children: PropTypes.any
  };

  enter () {}

  exit () {}

  render () {
    const {
      theme,
      classes,
      energy,
      className,
      children,
      ...rest
    } = this.props;

    return (
      <div className={cx(classes.root, className)} {...rest}>
        {children}
      </div>
    );
  }
}

export { Component };
