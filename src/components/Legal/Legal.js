import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Text } from '../Text';

class Component extends React.Component {
  static displayName = 'Legal';

  static propTypes = {
    theme: PropTypes.any.isRequired,
    classes: PropTypes.any.isRequired,
    energy: PropTypes.any.isRequired,
    className: PropTypes.any
  };

  render () {
    const { theme, classes, energy, className, ...etc } = this.props;
    const { animate, duration } = energy;
    const show = energy.entering || energy.entered;

    return (
      <div className={cx(classes.root, className)} {...etc}>
        <a
          className={classes.link}
          href='https://github.com/soulextract/soulextract.com'
          target='github'
        >
          <Text animation={{ animate, show, duration }} stableTime>
            — Open Source by Contributors —
          </Text>
        </a>
      </div>
    );
  }
}

export { Component };
