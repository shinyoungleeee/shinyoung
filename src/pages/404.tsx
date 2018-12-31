import React from 'react';

import Layout from '../layout/layout';
import SEO from '../layout/seo';

const NotFoundPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... poop.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
