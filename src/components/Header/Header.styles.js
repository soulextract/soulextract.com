const styles = theme => ({
  root: {},
  frame: {},
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: [20, 20, 10]
  },
  brand: {
    margin: [0, 'auto', 10],
    width: 300
  },
  menu: {
    width: '100%'
  },

  '@media screen and (min-width: 480px)': {
    brand: {
      width: 400
    }
  },

  '@media screen and (min-width: 768px)': {
    root: {},
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: [20, 40]
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
    root: {},
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
