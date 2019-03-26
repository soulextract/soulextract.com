const styles = theme => ({
  root: {
    position: 'relative',
    display: 'block',
    margin: [0, 'auto', 10],
    width: '100%'
  },
  svg: {
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0
  },
  path: {},
  content: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    margin: [0, 'auto'],
    padding: [20, 20, 10],
    width: '100%',
    maxWidth: 1000
  },
  brand: {
    margin: [0, 'auto', 10],
    width: '100%',
    maxWidth: 400
  },
  menu: {
    width: '100%'
  },

  '@media screen and (min-width: 768px)': {
    root: {
      marginBottom: 20
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: [20, 20, 30]
    },
    brand: {
      margin: [7, 0, 0],
      maxWidth: 300
    },
    menu: {
      margin: 0,
      maxWidth: 375
    }
  },

  '@media screen and (min-width: 1025px)': {
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    brand: {
      margin: 0,
      maxWidth: 420
    },
    menu: {
      margin: 0,
      width: 420,
      maxWidth: 'none'
    }
  }
});

export { styles };
