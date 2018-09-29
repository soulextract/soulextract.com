const theme = require('./src/theme');

module.exports = {
  siteMetadata: {
    title: 'SoulExtract'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-jss',
      options: { theme }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'SoulExtract',
        short_name: 'SoulExtract',
        start_url: '/',
        background_color: theme.color.primary.main,
        theme_color: theme.color.primary.main,
        display: 'minimal-ui',
        icon: 'src/images/soulextract.png'
      }
    },
    'gatsby-plugin-offline'
  ]
};
