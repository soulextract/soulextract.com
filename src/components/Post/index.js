import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Post';
import { styles } from './Post.styles';

const Post = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Post };
