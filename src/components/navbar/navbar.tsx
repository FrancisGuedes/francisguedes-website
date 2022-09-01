import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colors } from '../../util/colors';
import { functionalitiesAlias, strings } from '../../util/strings';
import SocialMedia from '../social-media/socialMedia';
import Wiggle from '../wiggle/wiggle';

import './navbar.css';
import { urlHome, urlPlaying, urlWho, urlWork } from '../../api/endpoints';
import { changingCssVariableBasedOnNavbarUrl, INavbar } from '../../util/utility';

export type NavigationMobile = {
  liClassName: string,
  rel: string,
  linkClassName: string,
  to: string,
  onClick: () => void,
  label: string
  state: { 
    previousPath: string 
  }
};

export interface NavbarProps {
  homeUrlClicked: () => void,
  whoUrlClicked: () => void,
  workUrlClicked: () => void,
  playgroundUrlClicked: () => void,
}

const Navbar = ({homeUrlClicked, whoUrlClicked, workUrlClicked, playgroundUrlClicked}: NavbarProps) => {
  const [fontColor, setFontColor] = useState<string>("");
  const [mobileMenuColor, setMobileMenuColor] = useState<string>("");
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const currentLocationUrl = window.location.pathname;
  const urlHomeLocation = urlHome;
  const urlWhoLocation = urlWho;
  const urlWorkLocation = urlWork;
  const urlPlayingLocation = urlPlaying;
  const menuBackgroundColor = {...colors.mobile_menu_background};
  const backgroundColor: string = "backgroundColor";

  const menuColor: INavbar = {
    hero: menuBackgroundColor.yellow,
    who: menuBackgroundColor.blue,
    work: menuBackgroundColor.purple,
    play: menuBackgroundColor.orange,
  };

  useEffect(() => {
    activateFontColor();
    activateMobileMenuColor();
    activateWiggleForNavbar();
    changingCssVariableBasedOnNavbarUrl(backgroundColor, menuColor);
  }, [location]);

  const labelText = {...functionalitiesAlias.navbar};
  const contact = {...strings.heroPage}
  const labelTextObject = { 
    labelTextIntro: labelText.intro,
    labelTextCv: labelText.cv, 
    labelTextWork: labelText.work,
    labelTextPlayground: labelText.playground
  };

  function activateFontColor(): void {
    currentLocationUrl === urlHomeLocation ? setFontColor(colors.black) : setFontColor(colors.white);
  };

  function activateMobileMenuColor(): void {
    currentLocationUrl === urlHomeLocation ? setMobileMenuColor(colors.black) : setMobileMenuColor(colors.white);
  };

  function activateWiggleForNavbar(): void {
    const translateX0 = 'translateX(0%)';
    const translateX105 = 'translateX(105%)';
    const translateXNegative105 = 'translateX(-105%)';

    if(currentLocationUrl === urlHomeLocation ){
      document.documentElement.style.setProperty('--tranformTranslateHome1', translateX0)
      document.documentElement.style.setProperty('--tranformTranslateHome2', translateX0);
    } else {
      document.documentElement.style.setProperty('--tranformTranslateHome1', translateXNegative105);
      document.documentElement.style.setProperty('--tranformTranslateHome2', translateX105);
    }
    if(currentLocationUrl === urlWhoLocation){
      document.documentElement.style.setProperty('--tranformTranslateWho1', translateX0);
      document.documentElement.style.setProperty('--tranformTranslateWho2', translateX0);
    } else {
      document.documentElement.style.setProperty('--tranformTranslateWho1', translateXNegative105);
      document.documentElement.style.setProperty('--tranformTranslateWho2', translateX105);
    }
    if(currentLocationUrl === urlWorkLocation){
      document.documentElement.style.setProperty('--tranformTranslateWork1', translateX0);
      document.documentElement.style.setProperty('--tranformTranslateWork2', translateX0);
    } else {
      document.documentElement.style.setProperty('--tranformTranslateWork1', translateXNegative105);
      document.documentElement.style.setProperty('--tranformTranslateWork2', translateX105);
    }
    if(currentLocationUrl === urlPlayingLocation){
      document.documentElement.style.setProperty('--tranformTranslatePlaying1', translateX0);
      document.documentElement.style.setProperty('--tranformTranslatePlaying2', translateX0);
    } else {
      document.documentElement.style.setProperty('--tranformTranslatePlaying1', translateXNegative105);
      document.documentElement.style.setProperty('--tranformTranslatePlaying2', translateX105);
    }
  };

  const menuToggle = (): void => {
    setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
  };

  const navigationObject: ReadonlyArray<NavigationMobile> = [
    {liClassName: 'intro-title navbar-title', rel: 'canonical', linkClassName: 'intro-title-link', to: urlHome, onClick: menuToggle, label: labelText.intro, state: {previousPath: location.pathname}},
    {liClassName: 'cv-title navbar-title', rel: 'canonical', linkClassName: 'cv-title-link', to: urlWho, onClick: menuToggle, label: labelText.cv, state: {previousPath: location.pathname}},
    {liClassName: 'work-title navbar-title', rel: 'canonical', linkClassName: 'work-title-link', to: urlWork, onClick: menuToggle, label: labelText.work, state: {previousPath: location.pathname}},
    {liClassName: 'playground-title navbar-title', rel: 'canonical', linkClassName: 'playground-title-link', to: urlPlaying, onClick: menuToggle, label: labelText.playground, state: {previousPath: location.pathname}}, 
  ]; 

  const navigationMapperMobile: Array<JSX.Element> =
      navigationObject.map( (navItem, index) => {
        return (
          <li 
            key={index} 
            className={navItem.liClassName}
          >
            <Link
              rel={navItem.rel}
              className={navItem.linkClassName} 
              to={navItem.to}
              onClick={navItem.onClick}
              state={navItem.state}
              >
              {navItem.label}
            </Link>
          </li>
        )
  });
  

  return ( 
    <section className='navigation'>
      <div className='navigation-padding'>
        <Link
          aria-label="francisgedes logo"
          to='/'
          rel="canonical"
          className='logo-home-wrapper'
        >
          <picture className={currentLocationUrl === urlHomeLocation ? 'logo-home' : 'logo-home white'}/>
        </Link>
        <motion.span exit={{ opacity: 0 }} className="toggle-menu-wrapper">
          <button
            className="mobile-menu-button"
            onClick={menuToggle}
            aria-label="navigation menu for mobile"
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
                {navigationMapperMobile}
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
                className='intro-title-link wiggle-link' 
                to={urlHome}
                onClick={homeUrlClicked}
                state={{ previousPath: location.pathname }}
              >
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
                className='cv-title-link wiggle-link' 
                to={urlWho}
                onClick={whoUrlClicked}
                state={{ previousPath: location.pathname }}
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
                className='work-title-link wiggle-link' 
                to={urlWork}
                onClick={workUrlClicked}
                state={{ previousPath: location.pathname }}
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
                className='playground-title-link wiggle-link' 
                to={urlPlaying} 
                rel="canonical"
                onClick={playgroundUrlClicked}
                state={{ previousPath: location.pathname }}
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