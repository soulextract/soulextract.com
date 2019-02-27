import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { Animation } from '../../components/Animation';
import { AnimationContext } from '../../components/AnimationContext';

function withAnimation (providedOptions) {
  const options = {
    flow: true,
    ...providedOptions
  };

  return Inner => {
    class InsideAnimation extends React.PureComponent {
      static propTypes = {
        forwardedRef: PropTypes.any
      };

      static contextType = AnimationContext;

      constructor () {
        super(...arguments);

        this.prevContext = this.context;
      }

      componentDidMount () {
        this.flow();
      }

      componentDidUpdate () {
        const prevStatus = this.prevContext.status;
        const currentStatus = this.context.status;

        if (prevStatus !== currentStatus) {
          this.flow();
        }

        this.prevContext = this.context;
      }

      flow () {
        const energy = this.context;

        if (!options.flow) {
          return;
        }

        if (!this.inner.enter || !this.inner.exit) {
          throw new Error('Provided animated component needs to have methods "enter" and "exit".');
        }

        if (energy.entering) {
          this.inner.enter();
        } else if (energy.exiting) {
          this.inner.exit();
        }
      }

      onRef = ref => {
        const { forwardedRef } = this.props;

        this.inner = ref;

        if (forwardedRef) {
          forwardedRef(ref);
        }
      }

      render () {
        const energy = this.context;
        const { forwardedRef, ...etc } = this.props;
        return (
          <Inner
            {...etc}
            ref={this.onRef}
            energy={energy}
          />
        );
      }
    }

    class WithAnimationInside extends React.PureComponent {
      static displayName =
        'Animation(' +
        (Inner.displayName || Inner.name || 'Component') +
        ')';

      static propTypes = {
        animation: PropTypes.any
      };

      render () {
        const { animation, ...etc } = this.props;
        return (
          <Animation {...animation}>
            <InsideAnimation {...etc} />
          </Animation>
        );
      }
    }

    const WithAnimation = React.forwardRef((props, ref) => {
      return <WithAnimationInside {...props} forwardedRef={ref} />;
    });

    return hoistNonReactStatics(WithAnimation, Inner);
  };
}

export { withAnimation };
