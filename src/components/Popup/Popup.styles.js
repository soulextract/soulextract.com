import { rgba } from 'polished';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    userSelect: 'none'
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
    stroke: rgba(theme.color.primary.dark, 0.5),
    strokeWidth: 2,
    vectorEffect: 'non-scaling-stroke'
  },
  main: {
    position: 'relative',
    padding: 20
  },
  message: {
    marginBottom: 20,
    color: theme.color.text.main,
    textAlign: 'center'
  },
  options: {
    textAlign: 'center'
  },
  option: {
    display: 'inline-block'
  },

  '@media screen and (min-width: 480px)': {
    main: {
      position: 'relative',
      padding: [20, 40]
    }
  }
});

export { styles };
