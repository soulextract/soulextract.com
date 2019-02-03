import { withStyles, withAnimation } from '../../tools';
import { Component } from './Text';
import { styles } from './Text.styles';

const Text = withStyles(styles)(withAnimation()(Component));

export { Text };
