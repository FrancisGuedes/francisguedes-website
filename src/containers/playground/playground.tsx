import { useState } from 'react';
import { motion } from 'framer-motion';
import { strings } from '../../util/strings';
import { Transition, Variants } from '../../util/animations/slidePageVariables';
import ArrowBack from '../../components/arrow-back/arrowBack';
import SocialMedia from '../../components/social-media/socialMedia';
import HrLine from '../../components/hr-line/hrLine';
import Carousel from '../../components/carousel/carousel';

import './playground.css';

const Playground = () => {
  const [isClicked, setIsClicked] = useState(false);

  const text = {...strings.playgroundPage};

  const isArrowClicked = () => {
    setIsClicked(isClicked => !isClicked);
  }
  
  return ( 
    <>
    <motion.main 
        layout
        className={isClicked ? "playground-wrapper-clicked" : "playground-wrapper"} 
        initial='initial'
        animate='in'
        exit='out'
        transition={Transition}
        variants={Variants}
      >
        {/* <ArrowBack/> */}
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
                    <SocialMedia isBackGroundYellow={false}/>
                    <br/>
                  </div>
            </div>
      </motion.main>
      
    </>
  );
}

export default Playground;