import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Fader';
import { styles } from './Fader.styles';

const Fader = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Fader };
