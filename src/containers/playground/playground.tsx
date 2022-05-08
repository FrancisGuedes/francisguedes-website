import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ArrowBack from '../../components/arrow-back/arrowBack';
import { strings } from '../../util/strings';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import { Transition, Variants } from '../../util/animations/slidePageVariables';
import './playground.css';
import SocialMedia from '../../components/social-media/socialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Playground = () => {
  const [toggleArrowStatus, setStatus] = useState<boolean[]>([]);
  const [isClicked, setIsClicked] = useState(false);

  const text = {...strings.playgroundPage};
  const projectsObj = [...strings.playgroundPage.category];

  useEffect(() => {
    initializeToggleArrowStatus();
  }, []);

  const initializeToggleArrowStatus = () => {
    let tempArr: boolean[] = [...toggleArrowStatus];
    projectsObj.map(() => {
      tempArr.push(false);
    },
    setStatus(tempArr))
  };
  
  const projectsMapper = projectsObj.map( (element, index) => {
    //console.log("el title: ", element.title);
    //console.log("el car: ", element.carousel);

    return (
      <>
      <h2 
        className={toggleArrowStatus[index] && isClicked ? 'playground-category-title' : 'playground-category-title-clicked'}
        >
        {element.title}
        <a 
          key={index} 
          type='button'
          className='playground-category-btn'
          onClick={() => {
            let switchStat = [...toggleArrowStatus];
            switchStat[index] = !switchStat[index];
            setStatus(switchStat);
            setIsClicked(prev => !prev);
          }}
        >
          <FontAwesomeIcon
              key={element.index}
              className={toggleArrowStatus[index] && isClicked  ?  "playground-category-arrow-up" : ".playground-category-arrow-down"}
              title="ArrowUp" 
              icon={toggleArrowStatus[index] && isClicked ? faArrowUp : faArrowDown}
            />
        </a>
      </h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          >
            <SwiperSlide>slide1</SwiperSlide>
            <SwiperSlide>slide1</SwiperSlide>
            <SwiperSlide>slide1</SwiperSlide>
            <SwiperSlide>slide1</SwiperSlide>
        </Swiper>
        <div className='hr hr-white'></div>
      </>
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
                      </h2>
                      <h2>
                        {/* TODO make a hr component */}
                        <div className='hr hr-white'></div>
                      </h2>
                    </section>
                    <section className="playground-projects-scroll">
                      <div className="playground-project" data-active="on">
                        {projectsMapper}
                      </div>
                    </section>
                    <br/>
                    <br/>
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