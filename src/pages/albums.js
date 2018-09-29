import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';

const Albums = () => (
  <Layout>
    <Header />
    <h2>Albums</h2>
    <Link to="/">Home</Link>
    <hr />
    <ul>
      <li>
        <Link to="/circadian-algorithm">Circadian Algorithm</Link>
      </li>
      <li>
        <Link to="/filaments">Filaments</Link>
      </li>
    </ul>
  </Layout>
);

export default Albums;
