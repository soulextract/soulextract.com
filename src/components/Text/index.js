import withStyles from 'react-jss';
import { withAnimation } from '../../tools';
import { Component } from './Text';
import { styles } from './Text.styles';

const Text = withStyles(styles)(withAnimation()(Component));

export { Text };
