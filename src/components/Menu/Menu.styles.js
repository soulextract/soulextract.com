import { SCHEME_EXPAND } from './Menu.constants';

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
    fontWeight: 'normal',
    transform: 'scale(1, 0)',
    transformOrigin: 'center center'
  },
  link: {
    overflow: 'hidden',
    opacity: ({ scheme }) => scheme === SCHEME_EXPAND ? 0 : 1
  },
  '@media (min-width: 600px)': {
    item: {
      display: 'block'
    },
    divisor: {
      display: 'block'
    }
  }
});

export { styles };
