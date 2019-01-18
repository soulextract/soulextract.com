import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import {
  Animation,
  AnimationContext,
  getAnimationStatusState
} from '../../components/Animation';

export function withAnimation () {
  return Inner => {
    class InsideAnimation extends React.PureComponent {
      render () {
        const status = this.context;
        const anim = getAnimationStatusState(status);
        return <Inner anim={anim} {...this.props} />;
      }
    }

    InsideAnimation.contextType = AnimationContext;

    const WithAnimation = ({ animation, ...etc }) => (
      <Animation {...animation}>
        <InsideAnimation {...etc} />
      </Animation>
    );

    const displayName = Inner.displayName || Inner.name || 'Component';
    WithAnimation.displayName = 'Animation(' + displayName + ')';

    WithAnimation.propTypes = {
      animation: PropTypes.any
    };
    WithAnimation.defaultProps = { ...Inner.defaultProps };

    return hoistNonReactStatics(WithAnimation, Inner);
  };
}
