const styles = theme => ({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'auto',
    width: '100%'
  },

  '@media (min-width: 768px)': {
    content: {
      overflow: 'hidden'
    }
  }
});

export { styles };
