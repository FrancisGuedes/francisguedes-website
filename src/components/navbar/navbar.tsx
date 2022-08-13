import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { functionalitiesAlias, strings } from '../../util/strings';
import SocialMedia from '../social-media/socialMedia';
import Wiggle from '../wiggle/wiggle';

import './navbar.css';

const Navbar = () => {
  const labelText = {...functionalitiesAlias.navbar};
  const contact = {...strings.heroPage}
  const labelTextObject = { 
    labelTextCv: labelText.cv, 
    labelTextWork: labelText.work,
    labelTextPlayground: labelText.playground
  };

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return ( 
    <section className='navigation'>
      <div className='navigation-padding'>
        <Link 
          to='/'
          rel="canonical"
          className='logo-home-wrapper'
        >
          <picture className='logo-home'/>
        </Link>
        <motion.span exit={{ opacity: 0 }} className="toggle-menu-wrapper">
          <button
            className="mobile-menu-button"
            onClick={() => {
              setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
            }}
          >
            <div className={mobileNavOpen ? "bar-one-open" : "bar-one"}/>
            <div className={mobileNavOpen ? "bar-two-open" : "bar-two"}/>
          </button>
          <div className={mobileNavOpen ? "mobile-menu-open" : "mobile-menu-not-visible"}>
            <div>
              <ul>
                {/* <li className='intro-title navbar-title'>
                  <Link rel="canonical" data-new-state="cv" className='cv-title-link' to="/">
                    {labelText.intro}
                  </Link>
                </li> */}
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
            <li className='cv-title navbar-title'>
              <Link rel="canonical" data-new-state="cv" className='cv-title-link wiggle-link' to="https://drive.google.com/file/d/1VIzDJ8zL--0NaKThG0sTtc1Fys73_40W/view?usp=sharing" target="_blank" >
                {labelText.cv}
                <Wiggle 
                  labelTextProps={labelTextObject}
                />
              </Link>
            </li>
            <li className='work-title navbar-title'>
              <Link rel="canonical" data-new-state="work" className='work-title-link wiggle-link' to="/work">
                {labelText.work}
                <Wiggle 
                  labelTextProps={labelTextObject}
                />
              </Link>
            </li>
            <li className='playground-title navbar-title'>
              <Link data-new-state="playground" className='playground-title-link wiggle-link' to="/playground" rel="canonical">
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