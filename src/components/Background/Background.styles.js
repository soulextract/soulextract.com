import backgroundImg from './background.jpg';

const styles = theme => ({
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
    backgroundColor: theme.color.background.main
  },
  image: {
    composes: '$positioned',
    zIndex: -1,
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center center',
    opacity: 1
  },
  content: {
    composes: '$positioned',
    zIndex: 2,
    display: 'flex',
    overflowY: 'auto'
  }
});

export { styles };
