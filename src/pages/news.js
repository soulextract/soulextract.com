import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Post } from '../components/Post';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';

const styles = theme => ({
  root: {}
});

class News extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  constructor () {
    super(...arguments);

    this.state = {
      posts: []
    };
  }

  componentDidMount () {
    this.loadPosts();
  }

  loadPosts () {
    axios
      .get('/api/facebook/soulextract/posts')
      .then(response => {
        const posts = Array.isArray(response.data) ? response.data : [];
        this.setState({ posts });
      });
  }

  render () {
    const { classes } = this.props;
    const { posts } = this.state;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <header>
            <h1><Text>News</Text></h1>
          </header>
          {posts.map((post, index) => (
            <Post
              key={post.id}
              audio={{ silent: index > 4 }}
              data={post}
            />
          ))}
          {!posts.length && (
            <>
              <p><Text>No posts were found.</Text></p>
              <p>
                <Text>See</Text>
                {' '}
                <Link href='https://facebook.com/soulextract/posts' target='facebook'><Text>facebook.com/soulextract.</Text></Link>
              </p>
            </>
          )}
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(News);
