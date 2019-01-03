import React from 'react';
import { Link } from 'gatsby';

import SocialLinks from './social-links';

const Footer: React.FunctionComponent = () => (
  <footer className="footer">
    <div className="footer__item footer__item--left">
      <span>©2019 @shinyoungleeee</span>
    </div>
    <div className="footer__item footer__item--center">
      <SocialLinks white />
    </div>
    <div className="footer__item footer__item--right">
      <Link to="styleguide" className="btn">
        <span className="badge badge-pill badge-light">Styleguide</span>
      </Link>
    </div>
  </footer>
);

export default Footer;
