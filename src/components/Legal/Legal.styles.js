const styles = theme => ({
  root: {
    display: 'block',
    fontSize: 14,
    color: theme.color.primary.main,
    opacity: 0.3,
    userSelect: 'none',
    textAlign: 'center',
    transition: `opacity ${theme.animation.time}ms ease-out`,
    '&:hover': {
      opacity: 1
    }
  },
  link: {
    display: 'block',
    padding: 5,
    whiteSpace: 'nowrap'
  }
});

export { styles };
