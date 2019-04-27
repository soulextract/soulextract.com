import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Button';
import { styles } from './Button.styles';

const Button = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Button };
