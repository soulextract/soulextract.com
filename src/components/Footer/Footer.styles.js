const styles = theme => ({
  root: {
    position: 'relative',
    marginTop: 10
  },
  svg: {
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0
  },
  path: {
    opacity: ({ energy }) => energy.animate ? 0 : 1
  },
  content: {
    position: 'relative',
    zIndex: 10,
    padding: [20, 10, 10]
  },
  socialLinks: {
    margin: [0, 'auto', 10],
    maxWidth: 400
  },
  socialLinksItem: {
    padding: 0,
    height: 20,
    fontSize: 20
  },
  legal: {
    margin: [0, 'auto'],
    padding: 0,
    maxWidth: 400,
    fontSize: 12
  },

  '@media screen and (min-width: 768px)': {
    root: {
      marginTop: 20
    },
    content: {
      padding: [30, 20, 20]
    },
    socialLinks: {
      marginBottom: 20
    },
    socialLinksItem: {
      height: 24,
      fontSize: 24
    },
    legal: {
      fontSize: 14
    }
  }
});

export { styles };
