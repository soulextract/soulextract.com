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

  componentDidMount () {
    window.addEventListener('route-change-start', this.onRouteChangeStart);
  }

  componentWillUnmount () {
    window.removeEventListener('route-change-start', this.onRouteChangeStart);
  }

  onRouteChangeStart = ({ detail: { isInternal } }) => {
    if (isInternal) {
      this.element.exit();
    }
  }

  render () {
    const { theme, classes, className, children, ...etc } = this.props;

    return (
      <Fader
        className={cx(classes.root, className)}
        node='main'
        ref={ref => (this.element = ref)}
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
