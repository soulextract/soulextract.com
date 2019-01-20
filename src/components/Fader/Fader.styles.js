const styles = theme => ({
  root: {
    opacity: props => props.anim.entered ? 1 : 0
  }
});

export { styles };
