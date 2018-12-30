import React from 'react';
import { Link } from 'gatsby';

const Footer: React.FunctionComponent = () => (
  <footer className="footer">
    <div className="footer__item">
      <span>©2019 @shinyoungleeee</span>
    </div>
    <div className="footer__item">
      <Link to="styleguide" className="badge badge-pill badge-light">
        Styleguide
      </Link>
    </div>
  </footer>
);

export default Footer;
