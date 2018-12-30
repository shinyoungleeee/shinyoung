import { Link } from 'gatsby';
import React from 'react';

type HeaderProps = {
  siteTitle: string;
};

const Header: React.FunctionComponent<HeaderProps> = ({ siteTitle }) => (
  <div>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </div>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
