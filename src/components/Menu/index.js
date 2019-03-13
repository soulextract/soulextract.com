import { withStyles, withAnimation, withSounds } from '../../tools';
import { Component } from './Menu';
import { styles } from './Menu.styles';

const Menu = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Menu };
