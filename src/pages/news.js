import React from 'react';
import PropTypes from 'prop-types';

import newsPosts from '../data/news';
import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Post } from '../components/Post';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';

const styles = theme => ({
  root: {},
  seeMore: {
    marginTop: 20
  }
});

class News extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <header>
            <h1><Text>News</Text></h1>
          </header>
          {newsPosts.map((post, index) => (
            <Post
              key={index}
              audio={{ silent: index > 4 }}
              data={{ ...post, id: 'post' + index }}
            />
          ))}
          <p className={classes.seeMore}>
            <Text>See more at</Text>
            {' '}
            <Link href='https://facebook.com/soulextract/posts' target='facebook'><Text>facebook.com/soulextract.</Text></Link>
          </p>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(News);
