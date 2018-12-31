import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';

type SocialProps = {
  white: boolean;
};

const Social = ({ white }: SocialProps) => {
  const socialClass = classNames({
    social: true,
    'social--white': white,
  });

  return (
    <div className={socialClass}>
      <a href="//linkedin.com/in/shinyoung-lee/" className="social__link">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="//github.com/shinyoungleeee" className="social__link">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="//www.instagram.com/shinyoungleeee/" className="social__link">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="//www.facebook.com/shinyoung.lee" className="social__link">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  );
};

Social.defaultProps = {
  white: false,
};

export default Social;
