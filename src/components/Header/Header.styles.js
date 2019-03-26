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
    backgroundColor: rgba(theme.color.background.dark, theme.color.alpha)
  },
  frame: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  shapes: {
    display: 'block',
    width: '100%',
    height: '100%'
  },
  shapesLine: {
    opacity: ({ energy }) => energy.animate ? 0 : 1
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
    root: {
      margin: [20, 'auto']
    },
    ground: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    },
    frame: {
      left: 20,
      right: 20
    },
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
    root: {
      maxWidth: 1100
    },
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
