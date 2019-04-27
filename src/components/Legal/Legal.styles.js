const styles = theme => ({
  root: {
    display: 'block',
    margin: 0,
    padding: 8,
    fontSize: 14,
    userSelect: 'none',
    whiteSpace: 'nowrap',
    textAlign: 'center'
  },
  link: {
    display: 'block',
    color: theme.color.text.main,
    textShadow: ({ opaque }) => !opaque && `0 0 5px ${theme.color.secondary.main}`,
    opacity: ({ opaque }) => opaque ? theme.color.alpha : 1,
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
