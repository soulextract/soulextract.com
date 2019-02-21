const styles = theme => ({
  root: {
    display: 'block',
    width: '100%',
    maxWidth: '100%',
    border: 'none',
    outline: 'none',
    userSelect: 'none'
  },
  svg: {
    display: 'block',
    margin: 0,
    border: 'none',
    padding: 0
  },
  path: {
    fill: 'none',
    strokeWidth: 16,
    stroke: theme.color.primary.main,
    opacity: ({ energy }) => energy.exited ? 0 : 1
  }
});

export { styles };
