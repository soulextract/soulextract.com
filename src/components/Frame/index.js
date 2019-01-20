import withStyles from 'react-jss';
import { withAnimation } from '../../tools';
import { Component } from './Frame';
import { styles } from './Frame.styles';

const Frame = withStyles(styles)(withAnimation()(Component));

export { Frame };
