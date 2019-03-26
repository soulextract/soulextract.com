const styles = theme => ({
  root: {
    display: 'block',
    padding: 6,
    fontSize: 14,
    userSelect: 'none',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    color: theme.color.text.main,
    opacity: ({ opaque }) => opaque ? theme.color.alpha / 2 : 1,
    transition: [
      `opacity ${theme.animation.time}ms ease-out`,
      `color ${theme.animation.time}ms ease-out`
    ].join(','),

    '&:hover': {
      color: theme.color.secondary.main,
      opacity: 1
    }
  }
});

export { styles };
