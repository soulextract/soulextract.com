const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    userSelect: 'none'
  },
  item: {
    display: 'inline-block',
    padding: 10,
    lineHeight: 1,
    fontSize: 24,
    textShadow: `0 0 5px ${theme.color.secondary.main}`,
    color: theme.color.primary.main,
    '&:hover': {
      color: theme.color.secondary.main
    }
  }
});

export { styles };
