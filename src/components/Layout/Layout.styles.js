const styles = theme => ({
  '@global': {
    '*, *:before, *:after': {
      boxSizing: 'border-box'
    },
    '::selection': {
      color: theme.color.background.main,
      backgroundColor: theme.color.secondary.main
    },
    '::-moz-selection': {
      color: theme.color.background.main,
      backgroundColor: theme.color.secondary.main
    },
    '::-webkit-scrollbar': {
      width: 10,
      height: 10,
      backgroundColor: theme.color.background.main
    },
    '::-webkit-scrollbar-thumb': {
      border: '1px solid ' + theme.color.secondary.main,
      cursor: 'pointer',
      '&:hover': {
        borderColor: theme.color.secondary.light
      }
    },
    'html, body': {
      margin: 0,
      padding: 0,
      lineHeight: 1.5,
      fontSize: 16,
      fontFamily: theme.typography.secondary,
      color: theme.color.text.main,
      backgroundColor: theme.color.background.main
    },
    a: {
      textDecoration: 'none',
      color: theme.color.link.main,
      outline: 'none',
      transition: `color ${theme.animation.time}ms ease-out`,
      '&:focus': {
        outline: 'none'
      },
      '&:hover, &:focus': {
        color: theme.color.link.light
      }
    },
    'h1, h2, h3, h4, h5, h6': {
      display: 'block',
      margin: [0, 0, 20],
      fontFamily: theme.typography.primary,
      lineHeight: 1,
      color: theme.color.heading.main,
      textShadow: '0 0 2px ' + theme.color.heading.main
    },
    h1: { fontSize: 27 },
    h2: { fontSize: 24 },
    h3: { fontSize: 21 },
    h4: { fontSize: 18 },
    h5: { fontSize: 16 },
    h6: { fontSize: 14 },
    p: {
      display: 'block',
      margin: [0, 0, 20]
    },
    img: {
      display: 'block',
      border: 'none',
      margin: 0,
      maxWidth: '100%'
    }
  }
});

export { styles };
