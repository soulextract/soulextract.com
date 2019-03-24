import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Frame } from '../Frame';
import { Secuence } from '../Secuence';
import { SocialLinks } from '../SocialLinks';
import { Legal } from '../Legal';

class Component extends React.Component {
  static displayName = 'Footer';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.any
  };

  render () {
    const {
      theme,
      classes,
      energy,
      className,
      ...etc
    } = this.props;

    return (
      <footer className={cx(classes.root, className)} {...etc}>
        <Frame className={classes.frame} contentClassName={classes.content}>
          <Secuence>
            <SocialLinks className={classes.socialLinks} />
            <Legal className={classes.legal} />
          </Secuence>
        </Frame>
      </footer>
    );
  }
}

export { Component };
