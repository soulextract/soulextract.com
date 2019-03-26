const styles = theme => ({
  root: {
    display: 'block'
  },
  link: {
    border: 'none',
    outline: 'none',
    userSelect: 'none'
  },
  svg: {
    display: 'block',
    margin: 0,
    border: 'none',
    padding: 0,
    opacity: 0,
    filter: `drop-shadow(0 0 1px ${theme.color.secondary.main})`
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
