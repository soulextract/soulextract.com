import { rgba } from 'polished';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    margin: 0,
    border: 'none',
    outline: 'none',
    padding: 0,
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 1,
    fontSize: 14,
    color: theme.color.secondary.main,
    background: 'transparent',
    cursor: 'pointer',
    transition: 'color 250ms ease-out',

    '&:hover, &:focus': {
      color: theme.color.tertiary.main,

      '& $background': {
        backgroundColor: rgba(theme.color.tertiary.main, 0.125)
      },
      '& $path': {
        stroke: rgba(theme.color.tertiary.dark, 0.5)
      }
    }
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: rgba(theme.color.secondary.main, 0.125),
    transition: 'background 250ms ease-out',
    opacity: ({ energy }) => energy.animate ? 0 : 1
  },
  frame: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  svg: {
    display: 'block',
    width: '100%',
    height: '100%'
  },
  path: {
    fill: 'none',
    stroke: rgba(theme.color.secondary.dark, 0.5),
    strokeWidth: 2,
    vectorEffect: 'non-scaling-stroke',
    transition: 'stroke 250ms ease-out',
    opacity: ({ energy }) => energy.animate ? 0 : 1
  },
  main: {
    position: 'relative',
    padding: [8, 32]
  }
});

export { styles };
