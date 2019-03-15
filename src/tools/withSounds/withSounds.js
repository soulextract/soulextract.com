import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { SoundsContext } from '../../components/SoundsContext';

function withSounds () {
  return Inner => {
    class Sounds extends React.PureComponent {
      static displayName = `Sounds(${Inner.displayName || Inner.name || 'Component'})`;

      static contextType = SoundsContext;

      static propTypes = {
        audio: PropTypes.shape({
          silent: PropTypes.bool
        })
      };

      getAudio () {
        return {
          silent: false,
          ...this.props.audio
        };
      }

      render () {
        const { props, context } = this;
        const { audio, forwardedRef, ...etc } = props;
        const audioContext = this.getAudio();
        const sounds = audioContext.silent ? {} : context;

        return (
          <Inner
            {...etc}
            ref={forwardedRef}
            audio={audioContext}
            sounds={sounds}
          />
        );
      }
    }

    const WithSounds = React.forwardRef((props, ref) => {
      return <Sounds {...props} forwardedRef={ref} />;
    });

    return hoistNonReactStatics(WithSounds, Inner);
  };
}

export { withSounds };
