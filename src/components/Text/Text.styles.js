const styles = theme => ({
  root: {
    position: 'relative',
    display: 'inline-block'
  },
  children: {
    display: 'inline-block'
  },
  text: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    overflow: 'hidden',
    display: 'inline-block',
    opacity: 0
  },
  blink: {
    position: 'relative',
    width: 0,
    height: 0,
    display: 'inline-block',
    animation: 'text-blink 200ms step-end infinite'
  },
  hide: {
    opacity: 0
  },
  animating: {
    '& $children': {
      opacity: 0
    },
    '& $text': {
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
