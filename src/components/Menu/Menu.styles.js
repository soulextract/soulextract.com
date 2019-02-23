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
    display: 'none',
    width: 0,
    transform: 'scale(1, 0)',
    transformOrigin: 'center center'
  },
  link: {},
  '@media (min-width: 480px)': {
    item: {
      display: 'block'
    },
    divisor: {
      display: 'block'
    }
  }
});

export { styles };
