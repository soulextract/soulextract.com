import { rgba } from 'polished';

const styles = theme => ({
  root: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    margin: [0, 'auto'],
    padding: 10,
    maxWidth: 850,
    width: '100%'
  },
  ground: {
    position: 'absolute',
    zIndex: 0,
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
    backgroundColor: rgba(theme.color.background.dark, 0.5)
  },
  frame: {
    position: 'absolute',
    zIndex: 1,
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
    border: `1px solid ${theme.color.primary.dark}`
  },
  content: {
    position: 'relative',
    zIndex: 2,
    flex: 1,
    padding: 20,
    overflowY: 'auto'
  },

  '@media screen and (min-width: 600px)': {
    root: {
      padding: [0, 20]
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

  '@media screen and (min-width: 992px)': {
    //
  }
});

export { styles };
