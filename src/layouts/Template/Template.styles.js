const styles = theme => ({
  enterOverlay: {
    zIndex: 1000,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    padding: 20,
    backgroundColor: '#000000'
  },
  enterElement: {
    margin: 'auto',
    fontFamily: 'monospace',

    '& button': {
      fontFamily: 'monospace'
    }
  }
});

export { styles };
