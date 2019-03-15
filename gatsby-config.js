const theme = require('./src/settings/theme');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-jss',
      options: { theme }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Soul Extract',
        short_name: 'Soul Extract',
        start_url: '/',
        background_color: theme.color.primary.main,
        theme_color: theme.color.primary.main,
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-layout`,
      options: { component: require.resolve(`./src/layouts/Template`) }
    }
  ]
};
