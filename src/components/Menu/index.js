import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Menu';
import { styles } from './Menu.styles';

const Menu = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Menu };
