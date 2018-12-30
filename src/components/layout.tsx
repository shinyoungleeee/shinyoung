import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../../styles/index.scss';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
        <footer>© 2019, Built by Shinyoung Lee</footer>
      </>
    )}
  />
);

export default Layout;
