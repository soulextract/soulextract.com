import withStyles from 'react-jss';
import { withAnimation } from '../../tools';
import { Component } from './Fader';
import { styles } from './Fader.styles';

const Fader = withAnimation()(withStyles(styles)(Component));

export { Fader };
