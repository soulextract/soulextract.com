import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Background';
import { styles } from './Background.styles';

const Background = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Background };
