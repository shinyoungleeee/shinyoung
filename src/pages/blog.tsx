import React from 'react';

import Layout from '../layout/layout';
import SEO from '../layout/seo';

const BlogPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="container">
      <div className="mb-5">
        <h1>blog</h1>
        <h4>big thoughts</h4>
      </div>
      <p>work in progress</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        dignissimos, recusandae in nam consectetur labore eius, doloribus
        quibusdam perferendis autem, tenetur ad exercitationem aperiam placeat
        fuga veritatis impedit? Ipsum, numquam.
      </p>
    </div>
  </Layout>
);

export default BlogPage;
