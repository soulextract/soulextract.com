import { withStyles, withAnimation, withSounds } from '../../tools';
import { Component } from './Fader';
import { styles } from './Fader.styles';

const Fader = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Fader };
