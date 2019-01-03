import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
  faSoundcloud,
  faBandcamp,
} from '@fortawesome/free-brands-svg-icons';
import classnames from 'classnames';

type SocialLinksProps = {
  lineBreak?: boolean;
  white?: boolean;
};

const SocialLinks: React.FunctionComponent<SocialLinksProps> = ({ lineBreak, white }) => {
  const socialLinkClass = classnames({
    btn: true,
    'btn-link': true,
    'social-link': true,
    'social-link--white': white,
  });

  return (
    <>
      <a href="//linkedin.com/in/shinyoung-lee/" className={socialLinkClass}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="//github.com/shinyoungleeee" className={socialLinkClass}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="//shinyoung.bandcamp.com" className={socialLinkClass}>
        <FontAwesomeIcon icon={faBandcamp} />
      </a>
      {lineBreak ? <br/> : null}
      <a href="//soundcloud.com/shinyoung" className={socialLinkClass}>
        <FontAwesomeIcon icon={faSoundcloud} />
      </a>
      <a href="//instagram.com/shinyoungleeee/" className={socialLinkClass}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="//facebook.com/shinyoung.lee" className={socialLinkClass}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </>
  );
};

export default SocialLinks;
