import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';

const Album = ({ children }) => (
  <Layout>
    <div>
      <Header />
      <h2>Album</h2>
      <Link to="/">Home</Link>
      <hr />
      {children}
    </div>
  </Layout>
);

export default Album;
