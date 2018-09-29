import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';

const NotFound = () => (
  <Layout>
    <Header />
    <hr />
    <h2>404</h2>
    <Link to="/">Home</Link>
  </Layout>
);

export default NotFound;
