import { withStyles, withAnimation, withSounds } from '../../tools';
import { Component } from './Text';
import { styles } from './Text.styles';

const Text = withStyles(styles)(withAnimation()(withSounds()(Component)));

export { Text };
