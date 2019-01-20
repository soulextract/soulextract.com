const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: [0, 'auto'],
    userSelect: 'none'
  },
  item: {
    display: 'block',
    padding: [10, 0, 10],
    width: '100%',
    lineHeight: 1,
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadow: `0 0 5px ${theme.color.secondary.main}`,
    color: theme.color.primary.main,
    whiteSpace: 'nowrap'
  },
  divisor: {
    display: 'none'
  },
  '@media (min-width: 480px)': {
    item: {
      display: 'inline-block'
    },
    divisor: {
      display: 'inline-block'
    }
  }
});

export { styles };
