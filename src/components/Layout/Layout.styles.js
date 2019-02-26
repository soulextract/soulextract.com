import { lighten } from 'polished';

const styles = theme => ({
  '@global': {
    '*, *:before, *:after': {
      boxSizing: 'inherit'
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
        borderColor: lighten(theme.accent, theme.color.secondary.main)
      }
    },
    'html, body': {
      margin: 0,
      padding: 0,
      lineHeight: 1.5,
      fontSize: 16,
      fontFamily: theme.typography.primary,
      color: theme.color.text.main,
      backgroundColor: theme.color.background.main
    },
    a: {
      textDecoration: 'none',
      color: theme.color.link.main,
      outline: 'none',
      transition: [
        `color ${theme.animation.time}ms ease-out`,
        `text-shadow ${theme.animation.time}ms ease-out`
      ].join(', '),
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
      lineHeight: 1,
      color: theme.color.heading.main
    },
    p: {
      display: 'block',
      margin: [0, 0, 20]
    }
  }
});

export { styles };
