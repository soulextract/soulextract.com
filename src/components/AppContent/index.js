import { withAnimation } from '../../tools/withAnimation';
import { withStyles } from '../../tools/withStyles';
import { Component } from './AppContent';

const AppContent = withAnimation({ flow: false })(withStyles(() => ({}))(Component));

export { AppContent };
