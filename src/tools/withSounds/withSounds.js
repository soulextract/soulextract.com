import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { SoundsContext } from '../../components';

function withSounds () {
  return Inner => {
    class Sounds extends React.Component {
      static displayName = `Sounds(${Inner.displayName || Inner.name || 'Component'})`;
      static contextType = SoundsContext;

      render () {
        const { props, context } = this;
        const { forwardedRef, ...etc } = props;
        return <Inner {...etc} ref={forwardedRef} sounds={context} />;
      }
    }

    const WithSounds = React.forwardRef((props, ref) => {
      return <Sounds {...props} forwardedRef={ref} />;
    });

    return hoistNonReactStatics(WithSounds, Inner);
  };
}

export { withSounds };
