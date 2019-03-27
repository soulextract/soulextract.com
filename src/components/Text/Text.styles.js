const styles = () => ({
  root: {
    position: 'relative',
    display: 'inline-block'
  },
  actualText: {
    display: 'inline-block'
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    overflow: 'hidden',
    display: 'inline-block',
    opacity: 0
  },
  overlayText: {},
  hidden: {
    opacity: 0
  },
  animating: {
    '& $actualText': {
      opacity: 0
    },
    '& $overlay': {
      opacity: 1
    }
  }
});

export { styles };
