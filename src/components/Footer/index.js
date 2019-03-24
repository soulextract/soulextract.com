import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { Component } from './Footer';
import { styles } from './Footer.styles';

const Footer = withAnimation({ flow: false })(withStyles(styles)(Component));

export { Footer };
