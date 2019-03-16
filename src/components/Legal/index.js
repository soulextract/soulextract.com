import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Legal';
import { styles } from './Legal.styles';

const Legal = withAnimation({ flow: false })(withStyles(styles)(withSounds()(Component)));

export { Legal };
