import { Link } from 'gatsby';
import React from 'react';
import classnames from 'classnames';

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
    <header className={headerClass}>
      <Link to="/" className="header__item">
        <div className="header__logo">SL</div>
      </Link>
      <div className="header__item" onClick={mobileMenuClickHandler}>
        <div className="header__hamburger" />
      </div>
      <div className="header__link-container">
        <Link to="resume" className="header__item">
          Resume
        </Link>
        <Link to="music" className="header__item">
          Music
        </Link>
        <Link to="contact" className="header__item">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
