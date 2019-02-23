import React from 'react';
import { Link } from 'gatsby';

import { Layout, Brand } from '../components';

const Music = () => (
  <Layout>
    <Brand style={{ width: '500px' }} />
    <hr />
    <h2>Music</h2>
    <Link to='/'>Home</Link>
  </Layout>
);

export default Music;
