import { withStyles, withAnimation } from '../../tools';
import { Component } from './Main';
import { styles } from './Main.styles';

const Main = withAnimation()(withStyles(styles)(Component));

export { Main };
