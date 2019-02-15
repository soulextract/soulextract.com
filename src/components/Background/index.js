import { withStyles, withAnimation } from '../../tools';
import { Component } from './Background';
import { styles } from './Background.styles';

const Background = withAnimation()(withStyles(styles)(Component));

export { Background };
