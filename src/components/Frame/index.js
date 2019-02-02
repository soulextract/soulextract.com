import { withAnimation, withStyles } from '../../tools';
import { Component } from './Frame';
import { styles } from './Frame.styles';

const Frame = withAnimation()(withStyles(styles)(Component));

export { Frame };
