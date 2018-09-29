import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';

const styles = theme => ({
  '@global': {
    'html, body': {
      margin: 0,
      padding: 0,
      lineHeight: 1.5,
      fontSize: 16,
      fontFamily: theme.typography.primary,
      color: theme.color.primary.main,
      backgroundColor: theme.color.background.main
    },
    a: {
      color: theme.color.link.main
    },
    'h1, h2, h3, h4, h5, h6': {
      display: 'block',
      margin: [0, 0, 20],
      color: theme.color.heading.main
    },
    p: {
      display: 'block',
      margin: [0, 0, 20]
    }
  },
  root: {
    margin: [20, 'auto'],
    maxWidth: 600
  }
});

const Layout = ({ classes, children }) => (
  <div className={classes.root}>
    <Helmet title="SoulExtract">
      <html lang="en" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Orbitron:400,500,700"
      />
    </Helmet>
    {children}
  </div>
);

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withStyles(styles)(Layout);
