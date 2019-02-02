const styles = theme => ({
  root: {
    opacity: props => props.energy.entered ? 1 : 0
  }
});

export { styles };
