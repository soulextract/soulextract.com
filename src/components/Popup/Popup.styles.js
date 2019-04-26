import { rgba } from 'polished';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#000000',
    userSelect: 'none'
  },
  frame: {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%'
  },
  line: {
    stroke: rgba(theme.color.primary.dark, 0.5),
    strokeWidth: 2,
    vectorEffect: 'non-scaling-stroke'
  },
  main: {
    position: 'relative'
  },
  message: {
    padding: 20
  },
  options: {
    textAlign: 'right'
  },
  option: {
    display: 'inline-block',
    margin: 0,
    border: '1px solid ' + rgba(theme.color.primary.dark, 0.5),
    outline: 'none',
    padding: [8, 16],
    textTransform: 'uppercase',
    lineHeight: 1,
    fontSize: 14,
    color: theme.color.text.main,
    backgroundColor: '#000000',
    cursor: 'pointer',

    '&:hover, &:focus': {
      backgroundColor: '#222222'
    }
  }
});

export { styles };
