import { withStyles, withAnimation, withSounds } from '../../tools';
import { Component } from './Brand';
import { styles } from './Brand.styles';

const Brand = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Brand };
