import React from 'react';

import Layout from '../layout/layout';
import SEO from '../layout/seo';
import AmpersandList from '../components/ampersand-list';

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `react`]} />
    <div className="container">
      <div className="mb-5">
        <h1>shinyoung lee</h1>
        <h4>front-end web developer</h4>
      </div>
      <div className="row">
        <div className="col">
          <AmpersandList
            headline="I write"
            items={['JavaScript (ES6)', 'TypeScript', 'SCSS', 'Ruby', 'music']}
          />
        </div>
        <div className="col">
          <AmpersandList
            headline="I build"
            items={[
              'React.js',
              'Redux',
              'Node.js',
              'Gatsby',
              'Ruby on Rails',
              'Bootstrap',
            ]}
          />
        </div>
        <div className="col">
          <AmpersandList
            headline="I value"
            items={[
              'customer experience',
              'scalable, maintainable code',
              'load optimization',
            ]}
          />
        </div>
        <div className="col">
          <AmpersandList
            headline="I love"
            items={['UI/UX design', 'people/culture']}
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
