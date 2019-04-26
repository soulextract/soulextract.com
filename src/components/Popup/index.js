import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Popup';
import { styles } from './Popup.styles';

const Popup = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Popup };
