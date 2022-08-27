import { useState, useEffect } from "react";
import { strings } from '../../util/strings'
import { motion } from 'framer-motion';
import { Transition, VariantsRight, VariantsLeft } from '../../util/animations/slidePageVariables'
import './hero.css';

import useWhiteColor from '../../util/hooks/useWhiteColor';
import SocialMedia from '../../components/social-media/socialMedia';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import SemiCircle from "../../components/semi-circle/semiCircle";
import { colors } from "../../util/colors";
import { WindowSizeSpace } from "../../util/utility";

export interface HeroProps {
  isVariantsRight: boolean;
}

const Hero = ({ isVariantsRight }: HeroProps) => {
  const [index, setIndex] = useState<number>(0);
  const [windowSize, setWindowSize] = useState<WindowSizeSpace.IWindowSize>(WindowSizeSpace.getWindowSize());
  //const isMobile = useMediaQuery('(min-width: 768px)');

  const dynamicWordsObj = {...strings.heroPage.introText.dynamicWords};
  const backgroundColor = {...colors.new_background}
  const contact = {...strings.heroPage}
  const introText = {...strings.heroPage.introText}
  const windowWidthTablet = 769;

  let dynamicWordsValues: string[] = Object.values(dynamicWordsObj);

  const windowWidth: number = windowSize.innerWidth;

  let isNavbarClickFromLeftToRight = isVariantsRight;

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

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(WindowSizeSpace.getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const renderSpanDynamicWords = () => {
    return (
      <>
        <span 
          className="dynamic-words" 
          key={index}
        >
          {dynamicWordsValues[index]}
        </span>
        <span className='intro-text-end-point'>
          {introText.endPoint}
        </span>
      </>
    )
  }

  const renderThirdLine = () => {
    if(windowWidth <= windowWidthTablet) {
      return (
        <>
          {introText.thirdLine}
          <br/>
          {renderSpanDynamicWords()}
        </>
      )
    } else {
        return (
          <>
            {introText.thirdLine}
            {renderSpanDynamicWords()}
          </>
        )
    }
  }

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
        variants={isNavbarClickFromLeftToRight ? VariantsLeft : VariantsRight}
      >
        <div className="hero-container-padding">
          <div className="content clearfix" data-elementresizer data-resize-parent>
            <h1 className='intro-text-first-line'>
              {introText.firstLine}
            </h1>
            { windowWidth <= windowWidthTablet ? (
                <h1 className='intro-text-second-line'>
                  {introText.secondLine}&nbsp;{renderThirdLine()}
                </h1>
              ) : (
                <>
                  <h1 className='intro-text-second-line'>
                    {introText.secondLine}
                  </h1>
                  <h1 className='intro-text-third-line'>
                    {renderThirdLine()}
                  </h1>
                </>
              )
            }
            <div className='intro-text-sub-title'>
              <h2 className='intro-text-fourth-line'>
                {introText.fourthLine}
              </h2>
              <h2 className='intro-text-contact-talk'>
                {contact.talk} 
                <a className="email-link" href={contact.emailLink}>
                <FontAwesomeIcon 
                  icon={faArrowCircleRight}
                  className="go-to-email-icon"
                  title="Email"
                  color="black"
                />
                </a>
              </h2>
            </div>
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
            <SemiCircle colorSemiCircle={backgroundColor.purple}/>
          </div>
        </div>
        <SocialMedia 
              isBackGroundYellow 
              isForMobile={false}
            />
      </motion.main>
    </>
  );
};
export default Hero;