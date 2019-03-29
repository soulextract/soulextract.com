import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Footer';
import { styles } from './Footer.styles';

const Footer = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Footer };
