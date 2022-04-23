import heroBackground from '../../assets/images/desktop/hero-background.jpg';
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
              
              <h2>{strings.heroPage.talk} <a href={strings.heroPage.emailLink}>{strings.heroPage.mail}</a>{strings.heroPage.mailDomain}
              </h2>
              <br/>
              <h2 className='cv-title'>
                <a href="https://drive.google.com/file/d/1VIzDJ8zL--0NaKThG0sTtc1Fys73_40W/view?usp=sharing" target="_blank" rel="history">{functionalitiesAlias.cv}</a>
              </h2>
              <h2>
                <a href="Playground-page" rel="history">{functionalitiesAlias.work}</a>
              </h2>
              <h2>
                <a href="Playground-page" rel="history">{functionalitiesAlias.playground}</a>
              </h2>
              <br/>
              <h2>
                <a href="https://dribbble.com/diogodotdesign" className="image-link" target="_blank">
                  <img alt="Dribbble" src={githubIcon} width="35" height="35"/>
                </a>
                <a href="https://www.linkedin.com/in/diogodotdesign/" className="image-link" target="_blank">
                  <img alt="LinkedIn" src={linkedinIcon} width="35" height="35"/></a>
                <a href="https://www.instagram.com/usernamedodiogo/" className="image-link" target="_blank" >
                  <img alt="Instagram" src={instagramIcon} width="35" height="35" />
                </a>
                <a href="https://www.facebook.com/diogodotdesign/" target="_blank">
                </a>
              </h2>
            </div>
          </div>
      </main>
    </>
  );
};
export default Hero;