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
        <Link to="about" className="header__item">
          About
        </Link>
        <Link to="gear" className="header__item">
          Gear
        </Link>
        <a href="//linkedin.com/in/shinyoung-lee/" className="header__item">
          LinkedIn
        </a>
        <a href="//github.com/shinyoungleeee" className="header__item">
          GitHub
        </a>
        <Link to="contact" className="header__item">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
