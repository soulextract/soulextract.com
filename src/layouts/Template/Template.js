import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from '../../components/Layout';
import { Background } from '../../components/Background';
import { App } from '../../components/App';
import { Popup } from '../../components/Popup';

class Component extends React.Component {
  static displayName = 'Template';

  static propTypes = {
    location: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    layout: PropTypes.object,
    background: PropTypes.object,
    children: PropTypes.any
  };

  static defaultProps = {
    layout: {},
    background: {}
  };

  constructor () {
    super(...arguments);

    this.state = {
      show: false,
      enterShow: false,

      // Initially enter element is animation shown.
      enterAnimationShow: true
    };
  }

  componentDidMount () {
    const { theme } = this.props;

    setTimeout(
      () => this.setState({ enterShow: true }),
      theme.animation.time
    );
  }

  onEnter = () => {
    const { theme } = this.props;

    this.setState({ enterAnimationShow: false });

    setTimeout(
      () => this.setState({ show: true }),
      theme.animation.time + theme.animation.stagger
    );
  }

  render () {
    const { show, enterShow, enterAnimationShow } = this.state;
    const { location, classes, layout, background, children } = this.props;

    const isURLContent = ['/news', '/music', '/charity', '/about'].find(path => {
      return location.pathname.indexOf(path) === 0;
    });

    return (
      <Layout {...layout}>
        <Background
          {...background}
          animation={{ show, ...background.animation }}
        >
          {isURLContent ? <App>{children}</App> : children}

          {!show && (
            <div className={classes.enterOverlay}>
              {enterShow && (
                <Popup
                  className={classes.enterElement}
                  ref={ref => (this.enterElement = ref)}
                  audio={{ silent: true }}
                  animation={{ independent: true, show: enterAnimationShow }}
                  message='SoulExtract.com uses sounds.'
                  option='Enter'
                  onOption={this.onEnter}
                />
              )}
            </div>
          )}
        </Background>
      </Layout>
    );
  }
}

export { Component };
