import { rgba } from 'polished';

const styles = theme => ({
  root: {
    margin: [0, 'auto'],
    padding: 20,
    width: '100%',
    maxWidth: 1000,
    minHeight: 600,
    backgroundColor: rgba(theme.color.background.dark, 0.5),
    border: `1px solid ${rgba(theme.color.primary.main, 0.25)}`
  }
});

export { styles };
