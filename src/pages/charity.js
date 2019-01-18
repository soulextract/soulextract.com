import React from 'react';
import { Link } from 'gatsby';

import { Layout, Brand } from '../components';

const Charity = () => (
  <Layout>
    <Brand />
    <hr />
    <h2>Charity</h2>
    <Link to='/'>Home</Link>
  </Layout>
);

export default Charity;
