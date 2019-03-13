import { withStyles, withAnimation, withSounds } from '../../tools';
import { Component } from './SocialLinks';
import { styles } from './SocialLinks.styles';

const SocialLinks = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { SocialLinks };
