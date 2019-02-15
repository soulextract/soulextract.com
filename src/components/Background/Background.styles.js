import { rgba } from 'polished';

const styles = ({ color }) => ({
  positioned: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  root: {
    composes: '$positioned',
    position: 'fixed',
    zIndex: 0,
    backgroundColor: color.background.dark
  },
  patterns: {
    composes: '$positioned',
    zIndex: 0
  },
  light1: {
    composes: '$positioned',
    backgroundImage: 'radial-gradient(' + rgba(color.secondary.main, 0.1) + ' 25%, transparent)',
    opacity: props => props.energy.entered ? 1 : 0
  },
  line1Container: {},
  line1: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: color.background.main,
    boxShadow: `0 0 1px ${rgba(color.background.main, color.alpha)}`,
    opacity: props => props.energy.entered ? 1 : 0
  },
  line2Container: {
    display: 'block',
    width: '100%',
    height: '100%'
  },
  line2: {
    position: 'absolute',
    stroke: color.background.light,
    strokeDasharray: props => props.energy.entered ? '3 7' : '0 10'
  },
  content: {
    composes: '$positioned',
    zIndex: 1,
    display: 'flex',
    overflowY: 'auto'
  }
});

export { styles };
