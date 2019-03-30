import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Layout } from '../../components/Layout';
import { Background } from '../../components/Background';
import { App } from '../../components/App';

class Component extends React.Component {
  static displayName = 'Template';

  static propTypes = {
    theme: PropTypes.any,
    classes: PropTypes.any,
    layout: PropTypes.object,
    background: PropTypes.object,
    children: PropTypes.any
  };

  static defaultProps = {
    layout: {},
    background: {},
    legal: {}
  };

  constructor () {
    super(...arguments);

    this.state = {
      show: false
    };
  }

  componentDidMount () {
    const { theme } = this.props;
    const { time } = theme.animation;

    anime({
      targets: this.enterFrame.querySelectorAll('path'),
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      delay: time,
      duration: time
    });
    anime({
      targets: this.enterButton,
      easing: 'linear',
      opacity: [0, 1],
      delay: time * 2,
      duration: time
    });
  }

  onEnter = () => {
    const { theme } = this.props;
    const { time } = theme.animation;

    anime({
      targets: this.enterFrame.querySelectorAll('path'),
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0, 1],
      easing: 'linear',
      direction: 'reverse',
      duration: time
    });
    anime({
      targets: this.enterButton,
      easing: 'linear',
      opacity: [1, 0],
      duration: time,
      complete: () => this.setState({ show: true })
    });
  }

  render () {
    const { show } = this.state;
    const { classes, layout, background, children } = this.props;

    // TODO:
    const isURLIndex = window && window.location.pathname === '/';

    return (
      <Layout {...layout}>
        <Background
          {...background}
          animation={{ show, ...background.animation }}
        >
          {isURLIndex ? children : <App>{children}</App>}
          {!show && (
            <div className={classes.enterOverlay}>
              <div
                className={cx(classes.elementCentered, classes.enterButton)}
                ref={ref => (this.enterButton = ref)}
                onClick={this.onEnter}
              >
                ENTER
              </div>
              <svg
                className={cx(classes.elementCentered, classes.enterFrame)}
                ref={ref => (this.enterFrame = ref)}
                viewBox='0 0 100 40'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0,0 L100,0 L100,40' />
                <path d='M100,40 L0,40 L0,0' />
              </svg>
            </div>
          )}
        </Background>
      </Layout>
    );
  }
}

export { Component };
