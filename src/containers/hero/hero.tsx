import { useState, useEffect } from "react";
import {strings} from '../../util/strings'
import { motion } from 'framer-motion';
import { VariantsHero, Transition } from '../../util/animations/slidePageVariables'
import './hero.css';

import useWhiteColor from '../../util/hooks/useWhiteColor';
import SocialMedia from '../../components/social-media/socialMedia';
import Navbar from '../../components/navbar/navbar';

const Hero = () => {
  const [index, setIndex] = useState(0);

  const dynamicWordsObj = {...strings.heroPage.introText.dynamicWords};

  let dynamicWordsValues: string[] = Object.values(dynamicWordsObj);

  const contact = {...strings.heroPage}
  const introText = {...strings.heroPage.introText}

  useEffect(() => {
    const intervalDelayMilliseconds = dynamicWordsValues[index].length * 105;
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // reset index if current index is greater than array size
        return prevIndex + 1 < dynamicWordsValues.length ? prevIndex + 1 : 0;
      });
    }, intervalDelayMilliseconds);

    return () => clearInterval(interval);
  }, [index]);

  /* useEffect(() => {
    document.body.style.background = colors.background.purple;
  }); */

  return (
    <>
      <motion.main 
        layout
        className="hero-container" 
        data-container="content"
        initial='initial'
        animate='in'
        exit='out'
        transition={Transition}
        variants={VariantsHero}
      >
        <div className="hero-container-padding">  
          <div className="content clearfix" data-elementresizer data-resize-parent>
            <h1 className='intro-text-first-line'>
              {introText.firstLine}
            </h1>
            <h1>
              {introText.secondLine}
            </h1>
            <h1>
              {introText.thirdLine} 
              <span 
                className="dynamic-words" 
                key={index}>
                  {dynamicWordsValues[index]}
              </span>
              {introText.endPoint}
              <br/>
            </h1>
            <h1>
              {introText.fourthLine}
            </h1>
            <h1>
              {introText.lastLine}
            </h1>
            <br/>
            
            <h2>{contact.talk} 
              <a className="email-link" href={contact.emailLink}>
                {contact.mail}
              </a>
              {contact.mailDomain}
            </h2>
            {/* <button
              style={{
                padding: "20px",
                borderRadius: "10px",
                backgroundImage: 
                  "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
                fontSize: "larger",
              }}
              onClick={generateColor}
            >
              Generate random color
            </button> */}
            <br/>
            <Navbar/>
            <br/>
            <SocialMedia isBackGroundYellow/>
          </div>
        </div>
        
      </motion.main>
    </>
  );
};
export default Hero;