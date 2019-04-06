import { rgba } from 'polished';

const styles = theme => ({
  root: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    margin: [0, 'auto'],
    maxWidth: 1000,
    width: '100%'
  },
  frame: {
    position: 'absolute',
    zIndex: 1,
    left: 10,
    right: 10,
    top: 0,
    bottom: 0,
    outline: `2px solid ${theme.color.background.dark}`,
    outlineOffset: 2,
    backgroundColor: rgba(theme.color.background.dark, theme.color.alpha)
  },
  content: {
    position: 'relative',
    zIndex: 2,
    flex: 1,
    margin: [10, 10, 10, 20],
    padding: [0, 10, 0, 0],

    '& > *:last-child, & > article > *:last-child': {
      marginBottom: 0
    }
  },

  '@media screen and (min-width: 768px)': {
    root: {
      minHeight: 1
    },
    frame: {
      left: 20,
      right: 20,
      top: 0,
      bottom: 0
    },
    content: {
      overflowX: 'hidden',
      overflowY: 'auto',
      margin: [30, 40, 30, 50],
      padding: [0, 10, 0, 0],

      '& img': {
        maxWidth: '80%'
      }
    }
  },

  '@media screen and (min-width: 1025px)': {
    content: {
      margin: [50, 60, 50, 70],
      padding: [0, 10, 0, 0]
    }
  }
});

export { styles };
