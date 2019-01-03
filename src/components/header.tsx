import { Link } from 'gatsby';
import React from 'react';
import classnames from 'classnames';

import NavLinks from './nav-links';

type HeaderProps = {
  mobileMenuOpen: boolean;
  mobileMenuClickHandler: () => void;
};

const Header: React.FunctionComponent<HeaderProps> = ({
  mobileMenuOpen,
  mobileMenuClickHandler,
}) => {
  const headerClass = classnames({
    header: true,
    'header--closed': !mobileMenuOpen,
    'header--opened': mobileMenuOpen,
  });

  return (
    <>
      <div className="header__spacer" />
      <header className={headerClass}>
        <Link to="/" className="btn">
          <div className="header__logo">SL</div>
        </Link>
        <div className="btn" onClick={mobileMenuClickHandler}>
          <div className="header__hamburger" />
        </div>
        <div className="header__link-container">
          <NavLinks className="header__link" />
        </div>
      </header>
    </>
  );
};

export default Header;
