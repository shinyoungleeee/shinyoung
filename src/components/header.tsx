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
      <Link to="/" className="btn">
        <div className="header__logo">SL</div>
      </Link>
      <div className="btn" onClick={mobileMenuClickHandler}>
        <div className="header__hamburger" />
      </div>
      <div className="header__link-container">
        <Link to="resume" className="btn btn-link">
          Resume
        </Link>
        <Link to="music" className="btn btn-link">
          Music
        </Link>
        <Link to="contact" className="btn btn-link">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
