import { strings } from '../../util/strings';

import './socialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface SocialMediaProps {
  isBackGroundYellow?: boolean;
  isForMobile?: boolean;
}

const SocialMedia = ( {isBackGroundYellow, isForMobile}: SocialMediaProps ) => {
  const contact = {...strings.heroPage}
  return ( 
    <>
      <h2>
        <a href={contact.emailLink}>
          <FontAwesomeIcon
            className={isForMobile ? "social-media-mobile email" : "social-media email-not-visible"}
            title='E-mail'
            icon={faEnvelope} 
            color={isBackGroundYellow ? "black" : "white"}
          />
        </a>
        <a href={strings.socialMedia.github} target="_blank">
          <FontAwesomeIcon 
            className={isForMobile ? "social-media-mobile github" : "social-media github"}
            title="Github" 
            icon={faGithub}
            color={isBackGroundYellow ? "black" : "white"}
            />
        </a>
        <a href={strings.socialMedia.linkedin} target="_blank">
          <FontAwesomeIcon 
            className={isForMobile ? "social-media-mobile linkedin" : "social-media linkedin"}
            title="Linkedin" 
            icon={faLinkedinIn}
            color={isBackGroundYellow ? "black" : "white"}
            />
        </a>
        <a href={strings.socialMedia.instagram} target="_blank" >
          <FontAwesomeIcon 
            className={isForMobile ? "social-media-mobile instagram" : "social-media instagram"}
            title="Instagram" 
            icon={faInstagram}
            color={isBackGroundYellow ? "black" : "white"}
          />
        </a>
      </h2>
    </>
  );
}

export default SocialMedia;