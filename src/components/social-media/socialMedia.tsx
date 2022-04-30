import { strings } from '../../util/strings';

import './socialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

interface SocialMediaProps {
  isBackGroundYellow?: boolean;
}

const SocialMedia = ( props: SocialMediaProps ) => {
  const isBackGroundYellow = props.isBackGroundYellow;

  return ( 
    <>
      <h2>
        <a href={strings.socialMedia.github} target="_blank">
          <FontAwesomeIcon 
            className="social-media github"
            title="Github" 
            icon={faGithub}
            color={isBackGroundYellow ? "black" : "white"}
            />
        </a>
        <a href={strings.socialMedia.linkedin} target="_blank">
          <FontAwesomeIcon 
            className="social-media linkedin"
            title="Linkedin" 
            icon={faLinkedinIn}
            color={isBackGroundYellow ? "black" : "white"}
            />
        </a>
        <a href={strings.socialMedia.instagram} target="_blank" >
          <FontAwesomeIcon 
            className="social-media instagram"
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