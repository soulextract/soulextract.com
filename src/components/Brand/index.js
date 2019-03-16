import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Brand';
import { styles } from './Brand.styles';

const Brand = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Brand };
