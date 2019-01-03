import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../layout/layout';
import Section from '../layout/section';
import SEO from '../layout/seo';
import Hero from '../components/hero';
import AmpersandList from '../components/ampersand-list';
import SocialLinks from '../components/social-links';

const IndexPage: React.FunctionComponent<GatsbyPageProps> = ({ data }) => (
  <Layout noHeader>
    <SEO title="Home" />
    <Section flush container>
      <Hero
        left={
          <>
            <h1>shinyoung</h1>
            <h5>
              <Link to="resume" className="text-purple">
                developer
              </Link>
            </h5>
            <h5>
              <Link to="music" className="text-red">
                musician
              </Link>
            </h5>
            <h5>
              <Link to="blog" className="text-green">
                real human bean
              </Link>
            </h5>
            <SocialLinks lineBreak />
          </>
        }
        right={<Img fluid={data.placeholderImage.childImageSharp.fluid} />}
      />
    </Section>
    <Section yellow container>
      <div>
        <h3>Some blurb about me</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi
          inventore voluptatem. Sunt dolorum odit officia modi sequi vel natus
          dolorem, fugit, aliquid vitae earum inventore ducimus animi eveniet
          ipsam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi
          inventore voluptatem. Sunt dolorum odit officia modi sequi vel natus
          dolorem, fugit, aliquid vitae earum inventore ducimus animi eveniet
          ipsam?
        </p>
      </div>
    </Section>
    <Section red container>
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
            headline="I love"
            items={['UI/UX design', 'people/culture', 'being bougie']}
          />
        </div>
        <div className="col">
          <AmpersandList
            headline="I value"
            items={[
              'human flourishing',
              'customer experience',
              'scalable, maintainable code',
              'load optimization',
            ]}
          />
        </div>
        <div className="col">
          <AmpersandList
            headline="I play"
            items={[
              'Nord Electro 6D SW 61',
              'Yamaha FG-470S',
              'Fender Standard Telecaster',
              'Ableton Push 2',
            ]}
          />
        </div>
      </div>
    </Section>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "me-no-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
