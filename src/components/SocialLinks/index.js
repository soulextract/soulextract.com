import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './SocialLinks';
import { styles } from './SocialLinks.styles';

const SocialLinks = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { SocialLinks };
