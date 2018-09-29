import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';

const Song = ({ children }) => (
  <Layout>
    <Header />
    <h2>Song</h2>
    <Link to="/">Home</Link>
    <hr />
    {children}
  </Layout>
);

export default Song;
