import { useState, useEffect } from "react";
import {strings} from '../../util/strings'
import { motion } from 'framer-motion';
import './hero.css';

import useWhiteColor from '../../util/hooks/useWhiteColor';
import SocialMedia from '../../components/social-media/socialMedia';
import Navbar from '../../components/navbar/navbar';
import Wiggle from "../../components/wiggle/wiggle";
import { colors } from "../../util/colors";

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

  useEffect(() => {
    document.body.style.background = colors.background.purple;
  });

  return (
    <>
      <motion.main 
        layout
        className="hero-container" 
        data-container="content"
        initial={{width: 0, backgroundColor:"black"}} 
        animate={{width: "100%", transition: {duration: 0, type: "tweeny"}}}
        exit={{x: -window.innerWidth, transition: {delay: 0.4, duration: 0.5}}}
      >
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
                <SocialMedia isBackGroundYellow={true}/>
              </div>
            </div>
        
      </motion.main>
    </>
  );
};
export default Hero;