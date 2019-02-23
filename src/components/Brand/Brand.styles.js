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
    opacity: 0
  },
  path: {
    fill: 'none',
    strokeWidth: 16,
    stroke: theme.color.primary.main
  }
});

export { styles };
