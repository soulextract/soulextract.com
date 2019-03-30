import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Header } from '../Header';
import { Footer } from '../Footer';

class Component extends React.Component {
  static displayName = 'Header';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.any
  };

  render () {
    const {
      theme,
      classes,
      className,
      children,
      ...etc
    } = this.props;

    return (
      <div className={cx(classes.root, className)} {...etc}>
        <Header className={classes.header} />
        {children}
        <Footer className={classes.footer} />
      </div>
    );
  }
}

export { Component };
