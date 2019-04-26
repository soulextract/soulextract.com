import { rgba } from 'polished';

const styles = theme => ({
  '@global': {
    '*, *:before, *:after': {
      boxSizing: 'border-box'
    },
    '::selection': {
      color: theme.color.background.main,
      backgroundColor: theme.color.tertiary.main
    },
    '::-moz-selection': {
      color: theme.color.background.main,
      backgroundColor: theme.color.tertiary.main
    },
    '::-webkit-scrollbar': {
      width: 10,
      height: 10,
      backgroundColor: theme.color.background.main
    },
    '::-webkit-scrollbar-thumb': {
      border: '1px solid ' + theme.color.tertiary.main,
      cursor: 'pointer',

      '&:hover': {
        borderColor: theme.color.secondary.main
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
      textShadow: `0 0 5px ${theme.color.secondary.main}`,
      textTransform: 'uppercase'
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
      margin: [0, 'auto', 20],
      border: '1px solid ' + rgba(theme.color.secondary.dark, 0.25),
      maxWidth: '100%',
      minHeight: 1,
      verticalAlign: 'top',
      transition: 'border 250ms ease-out',

      '&:hover': {
        border: '1px solid ' + rgba(theme.color.secondary.main, 0.25)
      }
    },
    blockquote: {
      position: 'relative',
      display: 'block',
      margin: [0, 0, 20, 20],
      padding: [0, 40, 0, 40],

      '&::before': {
        content: '"\uF756"', // Quote Close Icon
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'block',
        fontFamily: '"Material Design Icons"',
        lineHeight: 1,
        fontSize: 30,
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: theme.color.secondary.dark,
        transition: 'color 200ms ease-out'
      },
      '&:hover, &:focus': {
        '&::before': {
          color: theme.color.secondary.main
        }
      }
    }
  }
});

export { styles };
