const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    userSelect: 'none',
    opacity: 0
  },
  item: {
    flex: 1,
    display: 'block',
    padding: [10, 0],
    height: 24,
    fontSize: 24,
    lineHeight: 1,
    textShadow: `0 0 5px ${theme.color.secondary.main}`,
    textAlign: 'center',
    color: theme.color.text.main,
    '&:hover': {
      color: theme.color.secondary.main
    }
  }
});

export { styles };
