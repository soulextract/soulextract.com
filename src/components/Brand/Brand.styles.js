const styles = theme => ({
  root: {
    position: 'relative',
    display: 'block',
    border: 'none',
    margin: 0,
    padding: 0,
    boxShadow: 'none',
    textShadow: 'none'
  },
  link: {
    border: 'none',
    outline: 'none',
    userSelect: 'none'
  },
  title: {
    position: 'absolute',
    left: 0,
    top: 0,
    visibility: 'hidden'
  },
  svg: {
    display: 'block',
    margin: 0,
    border: 'none',
    padding: 0,
    opacity: 0,
    filter: `drop-shadow(0 0 1.5px ${theme.color.secondary.main})`
  },
  path: {
    fill: 'none',
    strokeWidth: 16,
    stroke: theme.color.heading.main,
    transition: `stroke ${theme.animation.time}ms ease-out`
  },
  hover: {
    '&:hover': {
      '& $path': {
        stroke: theme.color.secondary.main
      }
    }
  }
});

export { styles };
