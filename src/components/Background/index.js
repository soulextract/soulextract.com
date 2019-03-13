import { withStyles, withAnimation, withSounds } from '../../tools';
import { Component } from './Background';
import { styles } from './Background.styles';

const Background = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Background };
