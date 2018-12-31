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
import classNames from 'classnames';

type SocialProps = {
  white?: boolean;
};

const Social: React.FunctionComponent<SocialProps> = ({ white }) => {
  const socialClass = classNames({
    social: true,
    'social--white': white,
  });

  return (
    <div className={socialClass}>
      <a href="//linkedin.com/in/shinyoung-lee/" className="social__link btn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="//github.com/shinyoungleeee" className="social__link btn">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="//instagram.com/shinyoungleeee/" className="social__link btn">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="//facebook.com/shinyoung.lee" className="social__link btn">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="//soundcloud.com/shinyoung" className="social__link btn">
        <FontAwesomeIcon icon={faSoundcloud} />
      </a>
      <a href="//shinyoung.bandcamp.com" className="social__link btn">
        <FontAwesomeIcon icon={faBandcamp} />
      </a>
    </div>
  );
};

export default Social;
