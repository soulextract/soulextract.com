const styles = theme => ({
  root: {
    position: 'relative',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: 1200
  },
  frame: {
    position: 'absolute',
    zIndex: 0,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderBottom: `1px solid ${theme.color.primary.main}`
  },
  content: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: [20, 20, 10],
    width: '100%'
  },
  brand: {
    margin: [0, 0, 10],
    width: '100%'
  },
  menu: {
    width: '100%'
  },

  '@media screen and (min-width: 600px)': {
    root: {
      marginTop: 20,
      marginBottom: 20
    },
    content: {
      flexDirection: 'row',
      padding: 20
    },
    frame: {
      border: `1px solid ${theme.color.primary.main}`,
      boxShadow: `0 0 1px ${theme.color.secondary.main}`
    },
    brand: {
      margin: 0,
      width: '60%',
      maxWidth: 500
    },
    menu: {
      width: '40%'
    }
  }
});

export { styles };
