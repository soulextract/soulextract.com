import { withStyles, withAnimation } from '../../tools';
import { Component } from './Legal';
import { styles } from './Legal.styles';

const Legal = withAnimation({ flow: false })(withStyles(styles)(Component));

export { Legal };
