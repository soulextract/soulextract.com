import { rgba } from 'polished';

const styles = theme => ({
  root: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    margin: [0, 'auto'],
    maxWidth: 1000,
    width: '100%',
    minHeight: '1px'
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
    overflowX: 'hidden',
    overflowY: 'auto',
    margin: [10, 10, 10, 20],
    padding: [0, 10, 0, 0],

    '& h1, & h2, & h3, & h4, & h5, & h6': {
      textTransform: 'uppercase'
    },
    '& img': {
      margin: [0, 'auto', 20]
    },
    '& *:last-child': {
      marginBottom: 0
    }
  },

  '@media screen and (min-width: 768px)': {
    frame: {
      left: 20,
      right: 20,
      top: 0,
      bottom: 0
    },
    content: {
      margin: [30, 40, 30, 50],
      padding: [0, 10, 0, 0]
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
