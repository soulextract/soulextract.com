import { withStyles, withAnimation } from '../../tools';
import { Component } from './Brand';
import { styles } from './Brand.styles';

const Brand = withAnimation()(withStyles(styles)(Component));

export { Brand };
