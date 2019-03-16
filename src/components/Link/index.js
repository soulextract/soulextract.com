import { withStyles } from '../../tools/withStyles';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Link';

const Link = withStyles(() => {})(withSounds()(Component));

export { Link };
