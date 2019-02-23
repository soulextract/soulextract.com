import { withStyles, withAnimation } from '../../tools';
import { Component } from './Menu';
import { styles } from './Menu.styles';

const Menu = withAnimation()(withStyles(styles)(Component));

export { Menu };
