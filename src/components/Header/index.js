import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Header';
import { styles } from './Header.styles';

const Header = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Header };
