import React from 'react';
import { Link } from 'gatsby';

import { Layout, Brand } from '../components';

const Music = () => (
  <Layout>
    <Brand />
    <hr />
    <h2>Music</h2>
    <Link to='/'>Home</Link>
  </Layout>
);

export default Music;
