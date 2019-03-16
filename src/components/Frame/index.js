import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { Component } from './Frame';
import { styles } from './Frame.styles';

const Frame = withAnimation()(withStyles(styles)(Component));

export { Frame };
