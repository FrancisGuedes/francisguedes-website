import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";
import {strings, functionalitiesAlias} from '../../util/strings'
import './hero.css';
import instagramIcon from "../../assets/icons/icons8-instagram.svg";
import linkedinIcon from "../../assets/icons/icons8-linkedin.svg";
import githubIcon from "../../assets/icons/icons8-github.svg";

const dynamicWordsObj = {...strings.heroPage.introText.dynamicWords};

let dynamicWordsValues = Object.values(dynamicWordsObj);

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalDelayMilliseconds = dynamicWordsValues[index].length * 105;
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // reset index if current index is greater than array size
        return prevIndex + 1 < dynamicWordsValues.length ? prevIndex + 1 : 0;
      });
    }, intervalDelayMilliseconds);

    return () => clearInterval(interval);
  });

  return (
    <>
      <main className="hero-container" data-container="content">
          <div className="hero-container-padding">  
            <div className="content clearfix" data-elementresizer data-resize-parent>
              <h1 className='intro-text-first-line'>{strings.heroPage.introText.firstLine}</h1>
              <h1>{strings.heroPage.introText.secondLine}</h1>
              <h1>{strings.heroPage.introText.thirdLine} 
                <span className="dynamic-words" key={index}>{dynamicWordsValues[index]}</span>{strings.heroPage.introText.endPoint}
              <br/>
              </h1>
              <h1>{strings.heroPage.introText.fourthLine}</h1>
              <h1>{strings.heroPage.introText.lastLine}</h1>
              <br/>
              
              <h2>{strings.heroPage.talk} 
                <a className="email-link" href={strings.heroPage.emailLink}>
                  {strings.heroPage.mail}
                </a>
                {strings.heroPage.mailDomain}
              </h2>
              <br/>
              <h2 className='cv-title'>
                <Link className='cv-title-link' to="https://drive.google.com/file/d/1VIzDJ8zL--0NaKThG0sTtc1Fys73_40W/view?usp=sharing" target="_blank" rel="history">
                  {functionalitiesAlias.cv}
                </Link>
              </h2>
              <h2>
                <Link className='work-title-link' to="/work" rel="history">
                  {functionalitiesAlias.work}
                </Link>
              </h2>
              <h2>
                <Link className='playground-title-link' to="/" rel="history">
                  {functionalitiesAlias.playground}
                </Link>
              </h2>
              <br/>
              <h2>
                <a href={strings.socialMedia.github}  target="_blank">
                  <img className="social-media git" alt="Github" src={githubIcon} />
                </a>
                <a href={strings.socialMedia.linkedin} target="_blank">
                  <img className="social-media linkedin" alt="LinkedIn" src={linkedinIcon} /></a>
                <a href={strings.socialMedia.instagram} target="_blank" >
                  <img className="social-media instagram" alt="Instagram" src={instagramIcon}  />
                </a>
              </h2>
            </div>
          </div>
      </main>
    </>
  );
};
export default Hero;