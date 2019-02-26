import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../Layout';
import { Background } from '../Background';

const Component = ({ layout, background, children }) => (
  <Layout {...layout}>
    <Background {...background}>
      {children}
    </Background>
  </Layout>
);

Component.displayName = 'Template';

Component.propTypes = {
  layout: PropTypes.object,
  background: PropTypes.object,
  children: PropTypes.any
};

export { Component };
