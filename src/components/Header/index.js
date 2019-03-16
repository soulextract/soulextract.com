import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { Component } from './Header';
import { styles } from './Header.styles';

const Header = withAnimation()(withStyles(styles)(Component));

export { Header };