import { rgba } from 'polished';

const styles = theme => ({
  root: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    margin: [0, 'auto'],
    padding: [0, 10],
    maxWidth: 800,
    width: '100%',
    minHeight: '1px'
  },
  ground: {
    position: 'absolute',
    zIndex: 0,
    left: 10,
    right: 10,
    top: 0,
    bottom: 0,
    backgroundColor: rgba(theme.color.background.dark, theme.color.alpha)
  },
  frame: {
    position: 'absolute',
    zIndex: 1,
    left: 10,
    right: 10,
    top: 0,
    bottom: 0,
    border: `1px solid ${theme.color.primary.dark}`
  },
  content: {
    position: 'relative',
    zIndex: 2,
    flex: 1,
    margin: 20,
    overflowX: 'hidden',
    overflowY: 'auto',
    '& img': {
      margin: [0, 'auto', 20]
    },
    '& *:last-child': {
      marginBottom: 0
    }
  },

  '@media screen and (min-width: 768px)': {
    root: {
      padding: [0, 20],
      width: 'calc(100% - 200px)'
    },
    ground: {
      left: 20,
      right: 20,
      top: 0,
      bottom: 0
    },
    frame: {
      left: 20,
      right: 20,
      top: 0,
      bottom: 0
    }
  },

  '@media screen and (min-width: 1025px)': {
    root: {
      width: '100%'
    }
  }
});

export { styles };
