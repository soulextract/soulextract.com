const styles = theme => ({
  enterOverlay: {
    zIndex: 1000,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#000000'
  },
  enterFrame: {
    zIndex: 0,
    width: 100,
    height: 40,

    '& path': {
      stroke: theme.color.primary.main,
      strokeWidth: 1
    }
  },
  enterButton: {
    zIndex: 1,
    width: 100,
    height: 40,
    textAlign: 'center',
    lineHeight: '40px',
    fontSize: 16,
    fontFamily: 'monospace',
    color: theme.color.primary.main,
    cursor: 'pointer',
    userSelect: 'none',
    transition: `color ${theme.animation.time}ms ease-out`,

    '&:hover': {
      color: theme.color.secondary.main,
      borderColor: theme.color.secondary.main
    }
  },
  elementCentered: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'block'
  }
});

export { styles };
