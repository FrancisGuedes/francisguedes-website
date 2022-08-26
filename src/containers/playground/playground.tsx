import { useState } from 'react';
import { motion } from 'framer-motion';
import { strings } from '../../util/strings';
import { Transition, VariantsLeft, VariantsRight } from '../../util/animations/slidePageVariables';
import SocialMedia from '../../components/social-media/socialMedia';
import HrLine from '../../components/hr-line/hrLine';
import Carousel from '../../components/carousel/carousel';

import './playground.css';

export interface PlaygroundProps {
  isVariantsRight: boolean;
}

const Playground = ({ isVariantsRight }: PlaygroundProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const text = {...strings.playgroundPage};

  const isArrowClicked = () => {
    setIsClicked(isClicked => !isClicked);
  }

  let isNavbarClickFromLeftToRight = isVariantsRight;
  
  return ( 
    <>
    <motion.main 
        layout
        className={isClicked ? "playground-wrapper-clicked" : "playground-wrapper"} 
        initial='initial'
        animate='in'
        exit='out'
        transition={Transition}
        variants={isNavbarClickFromLeftToRight ? VariantsLeft : VariantsRight}
      >
          <div className="playground-wrapper-padding">
              <div className="project_title">
                {text.titleHide}
              </div>
              <div className="playground-container">
                    <section>
                      <h1 className="playground-title">
                        {text.title}</h1>
                      <br/>
                      <h2 className="playground-sub-title">
                        {text.subTitle}
                      </h2>
                      <h2>
                        <HrLine />
                      </h2>
                    </section>
                    <section className="playground-projects-scroll">
                      <div className="playground-project" data-active="on">
                        <Carousel isArrowClicked={isArrowClicked}/>
                      </div>
                    </section>
                    <h1 className="playground-footer-title">
                    </h1>
                    <br/>
                    <br/>
                    
                    <br/>
                  </div>
                  <SocialMedia isBackGroundYellow={false}/>
            </div>
      </motion.main>
      
    </>
  );
}

export default Playground;