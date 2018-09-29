import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/Header';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Header />
    <hr />
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/albums">Albums</Link>
      </li>
      <li>
        <Link to="/charity-donation">Charity Donation</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
