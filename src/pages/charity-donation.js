import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';

const CharityDonation = () => (
  <Layout>
    <Header />
    <hr />
    <h2>Charity Donation</h2>
    <Link to="/">Home</Link>
  </Layout>
);

export default CharityDonation;
