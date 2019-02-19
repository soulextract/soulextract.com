const styles = theme => ({
  root: {
    display: 'inline-block',
    opacity: props => props.energy.entered ? 1 : 0
  }
});

export { styles };
