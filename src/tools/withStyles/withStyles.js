import React from 'react';
import PropTypes from 'prop-types';
import injectStyles from 'react-jss';
import hoistNonReactStatics from 'hoist-non-react-statics';

function withStyles (styles) {
  return Inner => {
    class InsideStyles extends React.PureComponent {
      static propTypes = {
        forwardedRef: PropTypes.any
      };

      render () {
        const { forwardedRef, ...etc } = this.props;
        return <Inner {...etc} ref={forwardedRef} />;
      }
    }

    const WithStylesInside = injectStyles(styles)(InsideStyles);

    const WithStyles = React.forwardRef((props, ref) => (
      <WithStylesInside {...props} forwardedRef={ref} />
    ));

    return hoistNonReactStatics(WithStyles, Inner);
  };
}

export { withStyles };
