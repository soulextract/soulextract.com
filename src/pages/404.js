import React from 'react';
import { Link } from 'gatsby';

import { Layout, Brand } from '../components';

const NotFound = () => (
  <Layout>
    <Brand />
    <hr />
    <h2>NotFound</h2>
    <Link to='/'>Home</Link>
  </Layout>
);

export default NotFound;
