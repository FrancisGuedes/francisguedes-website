import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowBack from '../../components/arrow-back/arrowBack';
import { strings } from '../../util/strings';

import { Transition, Variants } from '../../util/animations/slidePageVariables';
import './playground.css';
import SocialMedia from '../../components/social-media/socialMedia';

const Playground = () => {
  const text = {...strings.playgroundPage};
  const projectsObj = [...strings.playgroundPage.category];

  const projectsMapper = projectsObj.map( (element, index) => {
    return (
      <div key={index} className="project-project-content">
        <a 
          className="project-project-link"
          href=""
          target="_blank"
        >
          <span className="project-title"></span>
        </a>
        <div className='project-thumb'>
          <img 
            className='project-thumb-image' 
            src=""
          />
        </div>
      </div>
    )
  });

  return ( 
    <>
    <motion.main 
        layout
        className="playground-wrapper" 
        data-container="content"
        initial='initial'
        animate='in'
        exit='out'
        transition={Transition}
        variants={Variants}
      >
        <ArrowBack/>
          <div className="playground-wrapper-padding">
              <div className="project_title">
                {text.titleHide}
              </div>
              <div className="playground-container" data-active="on" data-elementresizer data-resize-parent>
                    <section>
                      <h1 className="playground-title">
                        {text.title}</h1>
                      <br/>
                      <h2 className="playground-sub-title">
                        {text.subTitle}
                      <br/>
                      </h2>
                      <br/>
                    </section>
                    <section className="playground-projects-scroll">
                      <div className="playground-project" data-active="on">
                          {projectsMapper}
                      </div>
                    </section>
                    <br/>
                    <br/>
                    <h2>
                      <b>
                        <hr/>
                      </b>
                    </h2>
                    <br/>
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