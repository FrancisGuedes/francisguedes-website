import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { strings } from '../../util/strings';
import ArrowBack from '../../components/arrow-back/arrowBack';
import SocialMedia from '../../components/social-media/socialMedia';

import { colors } from '../../util/colors';
import { Transition, Variants } from '../../util/animations/slidePageVariables';
import './work.css';

const projectsObj = [...strings.workPage.projects];
const text = {...strings.workPage};

const projectsMapper = projectsObj.map( (element, index) => {
  return (
    <div key={index} className="work-project-content">
      <a 
        className="work-project-link"
        href={element.href}
        key={element.title} 
        target="_blank"
      >
        <span className="project-title">{element.title}</span>
      </a>
      <div className='project-thumb'>
        <img 
          className='project-thumb-image' 
          src={element.imagePath}
          alt={element.alt}
        />
      </div>
    </div>
  )
})

//console.log(projectsMapper)

const Work = () => {

  /* useEffect(() => {
    document.body.style.background = colors.background.yellow;
  }); */

  return ( 
    <>
    <motion.main 
        layout
        className="work-wrapper" 
        data-container="content"
        initial='initial'
        animate='in'
        exit='out'
        transition={Transition}
        variants={Variants}
      >
        {/* <ArrowBack/> */}
        <div className="work-wrapper-padding">                
                  <div className="project_title">
                    {text.titleHide}
                  </div>

                  <div className="work-container" data-active="on" data-elementresizer data-resize-parent>
                    <section>
                      <h1 className="work-title">
                        {text.title}</h1>
                      <br/>
                      <h2 className="work-sub-title">
                        {text.subTitle}
                      <br/>
                      </h2>
                      <br/>
                    </section>
                    <section className="work-projects-scroll">
                      <div className="work-project" data-active="on">
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
                    <h1 className="work-footer-title">
                      {text.footerTitle}
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

export default Work;