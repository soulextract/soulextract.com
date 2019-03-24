import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Frame } from '../Frame';
import { Secuence } from '../Secuence';
import { Brand } from '../Brand';
import { Menu } from '../Menu';

class Component extends React.Component {
  static displayName = 'Header';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.any,
    itemActive: PropTypes.string
  };

  render () {
    const {
      theme,
      classes,
      energy,
      className,
      itemActive,
      ...etc
    } = this.props;

    return (
      <header className={cx(classes.root, className)} {...etc}>
        <Frame className={classes.frame} contentClassName={classes.content}>
          <Secuence>
            <Brand className={classes.brand} />
            <Menu className={classes.menu} itemActive={itemActive} />
          </Secuence>
        </Frame>
      </header>
    );
  }
}

export { Component };
