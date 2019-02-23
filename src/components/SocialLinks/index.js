import { withStyles, withAnimation } from '../../tools';
import { Component } from './SocialLinks';
import { styles } from './SocialLinks.styles';

const SocialLinks = withAnimation()(withStyles(styles)(Component));

export { SocialLinks };
