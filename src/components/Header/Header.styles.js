import { rgba } from 'polished';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'block',
    margin: [0, 'auto'],
    width: '100%'
  },
  ground: {
    position: 'absolute',
    zIndex: 0,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: rgba(theme.color.background.dark, 0.5)
  },
  frame: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderBottom: `1px solid ${theme.color.primary.dark}`
  },
  content: {
    position: 'relative',
    zIndex: 2,
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
      padding: 20
    },
    ground: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    },
    frame: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20,
      border: `1px solid ${theme.color.primary.dark}`
    },
    content: {
      padding: [20, 20, 10]
    },
    brand: {
      margin: [0, 'auto', 20],
      maxWidth: 500
    },
    menu: {}
  },

  '@media screen and (min-width: 992px)': {
    root: {
      padding: 30,
      maxWidth: 1150
    },
    ground: {
      left: 30,
      right: 30,
      top: 30,
      bottom: 30
    },
    frame: {
      left: 30,
      right: 30,
      top: 30,
      bottom: 30
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20
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
