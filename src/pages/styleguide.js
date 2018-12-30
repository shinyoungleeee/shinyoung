import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Styleguide = () => (
  <Layout>
    <SEO title="Styleguide" />
    <h1>Hi from the styleguide</h1>
    <p>Welcome to the styleguide</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Styleguide;
