import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Text';
import { styles } from './Text.styles';

const Text = withStyles(styles)(withAnimation()(withSounds()(Component)));

export { Text };
