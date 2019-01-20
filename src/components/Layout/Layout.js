import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const metaData = {
  title: 'Soul Extract',
  description: 'Alternative Rock injected with electronic and cinematic elements. Proud member of the FiXT roster.',
  url: 'https://soulextract.com',
  twitter: '@soulextract',
  seoImage: 'https://soulextract.com/images/soulextract.jpg'
};

const Component = ({ children }) => (
  <>
    <Helmet title={metaData.title}>
      <html lang='en' />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />

      <meta name='robots' content='index, follow' />
      <title>{metaData.title}</title>
      <meta name='description' content={metaData.description} />
      <meta
        name='keywords'
        content='soul extract, soulextract, alternative electronic rock, cinematic elements, fixt, fixt roster, science fiction'
      />

      <meta property='og:title' content={metaData.title} />
      <meta property='og:site_name' content={metaData.title} />
      <meta property='og:description' content={metaData.description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={metaData.url} />
      <meta property='og:image' content={metaData.seoImage} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={metaData.title} />
      <meta name='twitter:description' content={metaData.description} />
      <meta name='twitter:site' content={metaData.twitter} />
      <meta name='twitter:creator' content={metaData.twitter} />
      <meta name='twitter:image' content={metaData.seoImage} />

      <meta name='theme-color' content='#000000' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-title' content={metaData.title} />
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
    {children}
  </>
);

Component.displayName = 'Layout';

Component.propTypes = {
  children: PropTypes.node.isRequired
};

export { Component };
