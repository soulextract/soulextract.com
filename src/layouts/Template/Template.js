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
      show: false
    };
  }

  onEnter = () => {
    this.setState({ show: true });
  }

  render () {
    const { show } = this.state;
    const { location, classes, layout, background, children } = this.props;
    const isURLIndex = location.pathname === '/';

    return (
      <Layout {...layout}>
        <Background
          {...background}
          animation={{ show, ...background.animation }}
        >
          {isURLIndex ? children : <App>{children}</App>}
          {!show && (
            <div className={classes.enterOverlay}>
              <Popup
                className={classes.enterElement}
                audio={{ silent: true }}
                animation={{ animate: false }}
                message='SoulExtract.com uses sounds.'
                option='ENTER'
                onOption={this.onEnter}
              />
            </div>
          )}
        </Background>
      </Layout>
    );
  }
}

export { Component };
