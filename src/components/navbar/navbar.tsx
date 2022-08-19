import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colors } from '../../util/colors';
import { functionalitiesAlias, strings } from '../../util/strings';
import SocialMedia from '../social-media/socialMedia';
import Wiggle from '../wiggle/wiggle';

import './navbar.css';
import { urlHome, urlPlaying, urlWho, urlWork } from '../../api/endpoints';

const Navbar = () => {
  const [fontColor, setFontColor] = useState("");
  const [mobileMenuColor, setMobileMenuColor] = useState("");
  const location = useLocation();

  const urlHomeLocation = urlHome;
  const urlWhoLocation = urlWho;
  const urlWorkLocation = urlWork;
  const urlPlayingLocation = urlPlaying;

  useEffect(() => {
    window.location.pathname === urlHomeLocation ? setFontColor(colors.black) : setFontColor(colors.white);
    window.location.pathname === urlHomeLocation ? setMobileMenuColor(colors.black) : setMobileMenuColor(colors.white);

    activateWiggleForNavbar();
    
  }, [location]);

  const labelText = {...functionalitiesAlias.navbar};
  const contact = {...strings.heroPage}
  const labelTextObject = { 
    labelTextIntro: labelText.intro,
    labelTextCv: labelText.cv, 
    labelTextWork: labelText.work,
    labelTextPlayground: labelText.playground
  };

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function activateWiggleForNavbar() {
    const translateX0 = 'translateX(0%)';
    const translateX105 = 'translateX(105%)';
    const translateXNegative105 = 'translateX(-105%)';

    if(window.location.pathname === urlHomeLocation ){
      document.documentElement.style.setProperty('--tranformTranslateHome1', translateX0)
      document.documentElement.style.setProperty('--tranformTranslateHome2', translateX0);
    } else {
      document.documentElement.style.setProperty('--tranformTranslateHome1', translateXNegative105);
      document.documentElement.style.setProperty('--tranformTranslateHome2', translateX105);
    }
    if(window.location.pathname === urlWhoLocation){
      document.documentElement.style.setProperty('--tranformTranslateWho1', translateX0);
      document.documentElement.style.setProperty('--tranformTranslateWho2', translateX0);
    } else {
      document.documentElement.style.setProperty('--tranformTranslateWho1', translateXNegative105);
      document.documentElement.style.setProperty('--tranformTranslateWho2', translateX105);
    }
    if(window.location.pathname === urlWorkLocation){
      document.documentElement.style.setProperty('--tranformTranslateWork1', translateX0);
      document.documentElement.style.setProperty('--tranformTranslateWork2', translateX0);
    } else {
      document.documentElement.style.setProperty('--tranformTranslateWork1', translateXNegative105);
      document.documentElement.style.setProperty('--tranformTranslateWork2', translateX105);
    }
    if(window.location.pathname === urlPlayingLocation){
      document.documentElement.style.setProperty('--tranformTranslatePlaying1', translateX0);
      document.documentElement.style.setProperty('--tranformTranslatePlaying2', translateX0);
    } else {
      document.documentElement.style.setProperty('--tranformTranslatePlaying1', translateXNegative105);
      document.documentElement.style.setProperty('--tranformTranslatePlaying2', translateX105);
    }
  }

  return ( 
    <section className='navigation'>
      <div className='navigation-padding'>
        <Link 
          to='/'
          rel="canonical"
          className='logo-home-wrapper'
        >
          <picture className={window.location.pathname === urlHomeLocation ? 'logo-home' : 'logo-home white'}/>
        </Link>
        <motion.span exit={{ opacity: 0 }} className="toggle-menu-wrapper">
          <button
            className="mobile-menu-button"
            onClick={() => {
              setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
            }}
          >
            <div
              style={{ background: mobileNavOpen ? '' : mobileMenuColor}}
              className={mobileNavOpen ? "bar-one-open" : "bar-one"}
            />
            <div
              style={{ background: mobileNavOpen ? '' : mobileMenuColor }}
              className={mobileNavOpen ? "bar-two-open" : "bar-two"}
            />
          </button>
          <div className={mobileNavOpen ? "mobile-menu-open" : "mobile-menu-not-visible"}>
            <div>
              <ul>
                <li className='intro-title navbar-title'>
                  <Link rel="canonical" data-new-state="intro" className='intro-title-link' to="/">
                    {labelText.intro}
                  </Link>
                </li>
                <li className='cv-title navbar-title'>
                  <Link rel="canonical" data-new-state="cv" className='cv-title-link' to="https://drive.google.com/file/d/1VIzDJ8zL--0NaKThG0sTtc1Fys73_40W/view?usp=sharing" target="_blank" >
                    {labelText.cv}
                  </Link>
                </li>
                <li className='work-title navbar-title'>
                  <Link rel="canonical" data-new-state="work" className='work-title-link' to="/work">
                    {labelText.work}
                  </Link>
                </li>
                <li className='playground-title navbar-title'>
                  <Link data-new-state="playground" className='playground-title-link' to="/playground" rel="canonical">
                    {labelText.playground}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5>
                {contact.talkMenuMobile}
              </h5>
              <div className='social-media-menu-mobile'>
                <SocialMedia 
                  isBackGroundYellow 
                  isForMobile
                />
              </div>
            </div>
            <div className='separator-line-wrap position-separator-line'>
              <div className='separator-line separator-line-minus-16-deg'/>
            </div>
          </div>
        </motion.span>
        <nav className='main-navbar-wrapper'>
          <ul className="main-navbar-content">
            <li className='intro-title navbar-title'>
              <Link
                style={{ color: fontColor }}
                rel="canonical" 
                data-new-state="intro" 
                className='intro-title-link wiggle-link' 
                to="/">
                {labelText.intro}
                <Wiggle 
                  labelTextProps={labelTextObject}
                />
              </Link>
            </li>
            <li className='cv-title navbar-title'>
              <Link 
                style={{ color: fontColor }}
                rel="canonical" 
                data-new-state="cv" 
                className='cv-title-link wiggle-link' 
                to="https://drive.google.com/file/d/1VIzDJ8zL--0NaKThG0sTtc1Fys73_40W/view?usp=sharing" 
                target="_blank"
                >
                  {labelText.cv}
                  <Wiggle 
                    labelTextProps={labelTextObject}
                />
              </Link>
            </li>
            <li className='work-title navbar-title'>
              <Link 
                style={{ color: fontColor }}
                rel="canonical" 
                data-new-state="work" 
                className='work-title-link wiggle-link' 
                to="/work" 
                >
                  {labelText.work}
                  <Wiggle 
                    labelTextProps={labelTextObject}
                />
              </Link>
            </li>
            <li className='playground-title navbar-title'>
              <Link
                style={{ color: fontColor }}
                data-new-state="playground" 
                className='playground-title-link wiggle-link' 
                to="/playground" 
                rel="canonical"
                >
                  {labelText.playground}
                  <Wiggle 
                    labelTextProps={labelTextObject}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;