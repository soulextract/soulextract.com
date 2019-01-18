import React from 'react';
import { Link } from 'gatsby';

import { Layout, Brand } from '../components';

const About = () => (
  <Layout>
    <Brand />
    <hr />
    <h2>About</h2>
    <Link to='/'>Home</Link>
  </Layout>
);

export default About;
