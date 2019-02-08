import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import meta from '../../settings/meta';
import sounds from '../../settings/sounds';
import { SoundsProvider } from '../SoundsProvider';

const Component = ({ children }) => (
  <>
    <Helmet title={meta.title}>
      <html lang='en' />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />

      <meta name='robots' content='index, follow' />
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <meta
        name='keywords'
        content='soul extract, soulextract, alternative electronic rock, cinematic elements, fixt, fixt roster, science fiction'
      />

      <meta property='og:title' content={meta.title} />
      <meta property='og:site_name' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={meta.url} />
      <meta property='og:image' content={meta.seoImage} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:site' content={meta.twitter} />
      <meta name='twitter:creator' content={meta.twitter} />
      <meta name='twitter:image' content={meta.seoImage} />

      <meta name='theme-color' content='#000000' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-title' content={meta.title} />
      <meta name='apple-mobile-web-app-status-bar-style' content='#000000' />
      <meta name='msapplication-TileColor' content='#000000' />

      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Orbitron:400,500,700,900'
      />
      <link
        rel='stylesheet'
        href='//cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css'
      />
    </Helmet>
    <SoundsProvider sounds={sounds}>
      {children}
    </SoundsProvider>
  </>
);

Component.displayName = 'Layout';

Component.propTypes = {
  children: PropTypes.node.isRequired
};

export { Component };
