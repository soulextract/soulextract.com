import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { isFn } from '../general';
import { Animation } from '../../components/Animation';

export function withAnimation() {
  return Inner => {
    const WithAnimation = props => {
      const { animate, show, ...etc } = props;
      const createChild = anim => ({ children }) =>
        isFn(children) ? children(anim) : children;

      return (
        <Animation {...{ animate, show }}>
          {anim => <Inner anim={anim} Anim={createChild(anim)} {...etc} />}
        </Animation>
      );
    };

    WithAnimation.displayName =
      'Animation(' + (Inner.displayName || Inner.name || 'Component') + ')';
    WithAnimation.defaultProps = { ...Inner.defaultProps };

    return hoistNonReactStatics(WithAnimation, Inner);
  };
}
