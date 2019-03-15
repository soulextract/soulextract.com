import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Text } from '../Text';
import { Link } from '../Link';

class Component extends React.Component {
  static displayName = 'Legal';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func
  };

  render () {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      onLinkStart,
      onLinkEnd,
      ...etc
    } = this.props;
    const { animate, duration } = energy;
    const show = energy.entering || energy.entered;

    return (
      <div
        className={cx(classes.root, className)}
        onMouseEnter={() => sounds.hover.play()}
        {...etc}
      >
        <Link
          className={classes.link}
          href='https://github.com/soulextract/soulextract.com'
          target='github'
          onLinkStart={onLinkStart}
          onLinkEnd={onLinkEnd}
        >
          <Text animation={{ animate, show, duration }} stableTime>
            — Open Source by Contributors —
          </Text>
        </Link>
      </div>
    );
  }
}

export { Component };
