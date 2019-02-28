import { withStyles, withAnimation } from '../../tools';
import { Component } from './Header';
import { styles } from './Header.styles';

const Header = withAnimation()(withStyles(styles)(Component));

export { Header };
