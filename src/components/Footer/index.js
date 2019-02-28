import { withStyles, withAnimation } from '../../tools';
import { Component } from './Footer';
import { styles } from './Footer.styles';

const Footer = withAnimation()(withStyles(styles)(Component));

export { Footer };
