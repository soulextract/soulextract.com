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
  blink: {
    position: 'relative',
    width: 0,
    height: 0,
    display: 'inline-block',
    animation: 'text-blink 200ms step-end infinite'
  },
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
  },

  '@keyframes text-blink': {
    '0%, 100%': {
      color: 'transparent'
    },
    '50%': {
      color: 'inherit'
    }
  }
});

export { styles };
