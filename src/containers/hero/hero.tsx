import {strings, functionalitiesAlias} from '../../util/strings'
import './hero.css';
import instagramIcon from "../../assets/icons/icons8-instagram.svg";
import linkedinIcon from "../../assets/icons/icons8-linkedin.svg";
import githubIcon from "../../assets/icons/icons8-github.svg";

const Hero = () => {
  return (
    <>
      <main className="hero-container" data-container="content">
          <div className="hero-container-padding">  
            <div className="content clearfix" data-elementresizer data-resize-parent>
              <h1 className='intro-text-first-line'>{strings.heroPage.introText.firstLine}</h1>
              <h1>{strings.heroPage.introText.secondLine}</h1>
              <h1>{strings.heroPage.introText.thirdLine} <span></span>{strings.heroPage.introText.endPoint}<br/>
              </h1>
              <h1>{strings.heroPage.introText.fourthLine}</h1>
              <h1>{strings.heroPage.introText.lastLine}</h1>
              <br/>
              
              <h2>{strings.heroPage.talk} 
                <a href={strings.heroPage.emailLink}>
                  {strings.heroPage.mail}
                </a>
                {strings.heroPage.mailDomain}
              </h2>
              <br/>
              <h2 className='cv-title'>
                <a href="https://drive.google.com/file/d/1VIzDJ8zL--0NaKThG0sTtc1Fys73_40W/view?usp=sharing" target="_blank" rel="history">
                  {functionalitiesAlias.cv}
                </a>
              </h2>
              <h2>
                <a href="Playground-page" rel="history">
                  {functionalitiesAlias.work}
                </a>
              </h2>
              <h2>
                <a href="Playground-page" rel="history">
                  {functionalitiesAlias.playground}
                </a>
              </h2>
              <br/>
              <h2>
                <a href="https://dribbble.com/diogodotdesign"  target="_blank">
                  <img className="social-media git" alt="Dribbble" src={githubIcon} />
                </a>
                <a href="https://www.linkedin.com/in/diogodotdesign/" target="_blank">
                  <img className="social-media linkedin" alt="LinkedIn" src={linkedinIcon} /></a>
                <a href="https://www.instagram.com/usernamedodiogo/" target="_blank" >
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