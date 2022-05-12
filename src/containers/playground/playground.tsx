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
import HrLine from '../../components/hr-line/hrLine';

const Playground = () => {
  const [toggleArrowStatus, setStatus] = useState<boolean[]>([]);
  const [toggleCarouselStatus, setToggleCarouselStatus] = useState<boolean[]>([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const text = {...strings.playgroundPage};
  const categoryObj = [...strings.playgroundPage.category];

  useEffect(() => {
    initializeToggleArrowStatus();
    initializetoggleCarouselStatus();
  }, []);

  const initializeToggleArrowStatus = () => {
    let tempArr: boolean[] = [...toggleArrowStatus];
    categoryObj.map(() => {
      tempArr.push(false);
    },
    setStatus(tempArr))
  };

  const initializetoggleCarouselStatus = () => {
    let tempArr: boolean[] = [...toggleCarouselStatus];
    categoryObj.map(() => {
      tempArr.push(false);
    },
    setToggleCarouselStatus(tempArr))
  };

  const toggleArrow = (index: number) => {
    let switchStat = [...toggleArrowStatus];
    switchStat[index] = !switchStat[index];
    setStatus(switchStat);
  }

  const arrowOnHandleClick = () => {
    setIsClicked(prev => !prev);
  }

  const toggleCarousel = (index: number) => {
    let switchStat = [...toggleCarouselStatus];
    switchStat[index] = !switchStat[index];
    setToggleCarouselStatus(switchStat);
  };

  const carouselOnHandleClick = () => {
    setIsCategoryOpen(isOpen => !isOpen);
  }
  
  const categoryContentMapper = categoryObj.map( (element, index) => {
    
    const carouselMapper = element.carousel.map(item => {
      console.log("el carousel map:", item)
      return (
        <>
          <SwiperSlide>
            <img src={item.imagePath} />
          </SwiperSlide>
        </>
      )
    });

    return (
      <>
      <h2 
        className={toggleArrowStatus[index] ? 'playground-category-title-clicked' : 'playground-category-title'}
        >
          <span className={toggleArrowStatus[index] ? 'playground-category-subtitle-clicked' : 'playground-category-subtitle'}>
            {element.subtitle}
          </span>
          {element.title}
        <a 
          key={index} 
          type='button'
          className='playground-category-btn'
          onClick={() => {
            toggleArrow(index);
            toggleCarousel(index);
          }}
        >
          <FontAwesomeIcon
              key={element.index}
              className={toggleArrowStatus[index] ? "playground-category-arrow-up" : ".playground-category-arrow-down"}
              title="ArrowUp" 
              icon={toggleArrowStatus[index] ? faArrowUp : faArrowDown}
            />
        </a>
      </h2>
      { toggleCarouselStatus[index] ? 
        (
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
              {carouselMapper}
          </Swiper>
        ) : (
          <HrLine />
        )
      }
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
                        <HrLine />
                      </h2>
                    </section>
                    <section className="playground-projects-scroll">
                      <div className="playground-project" data-active="on">
                        {categoryContentMapper}
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