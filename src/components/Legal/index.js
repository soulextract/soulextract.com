import { withStyles, withAnimation, withSounds } from '../../tools';
import { Component } from './Legal';
import { styles } from './Legal.styles';

const Legal = withAnimation({ flow: false })(withStyles(styles)(withSounds()(Component)));

export { Legal };
