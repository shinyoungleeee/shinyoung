import React from 'react';
import { Link } from 'gatsby';

import Social from './social';

const Footer: React.FunctionComponent = () => (
  <footer className="footer">
    <div className="footer__item footer__item--left">
      <span>©2019 @shinyoungleeee</span>
    </div>
    <div className="footer__item footer__item--center">
      <Social white/>
    </div>
    <div className="footer__item footer__item--right">
      <Link to="styleguide" className="badge badge-pill badge-light">
        Styleguide
      </Link>
    </div>
  </footer>
);

export default Footer;
