import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { Component } from './Main';
import { styles } from './Main.styles';

const Main = withAnimation()(withStyles(styles)(Component));

export { Main };
