import { Link } from 'gatsby';
import React from 'react';
import classnames from 'classnames';

type NavLinksProps = {
  className: string;
};

const NavLinks: React.FunctionComponent<NavLinksProps> = ({ className }) => {
  const navLinkClass = classnames('btn', 'btn-link', className);

  return (
    <>
      <Link to="resume" className={navLinkClass}>
        Résumé
      </Link>
      <Link to="music" className={navLinkClass}>
        Music
      </Link>
      <Link to="blog" className={navLinkClass}>
        Blog
      </Link>
      <Link to="contact" className={navLinkClass}>
        Contact
      </Link>
    </>
  );
};

export default NavLinks;
