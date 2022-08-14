import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { strings } from '../../util/strings';
import HrLine from '../../components/hr-line/hrLine';

import 'swiper/css';
import 'swiper/css/navigation';
import './carousel.css';

const Carousel = ({ isArrowClicked }: any) => {
  const [toggleArrowStatus, setStatus] = useState<boolean[]>([]);
  const [toggleCarouselStatus, setToggleCarouselStatus] = useState<boolean[]>([]);
  const [toggleRotationArrowStatus, setToggleRotationArrowStatus] = useState<boolean[]>([]);
  const [isClicked, setIsClicked] = useState(false);
  const [rotateArrow, setRotateArrow] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  
  const text = {...strings.playgroundPage};
  const categoryObj = [...strings.playgroundPage.category];
  
  useEffect(() => {
    initializeToggleArrowStatus();
    initializetoggleCarouselStatus();
    initializeRotationArrowStatus();
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

  const initializeRotationArrowStatus = () => {
    let tempArr: boolean[] = [...toggleRotationArrowStatus];
    categoryObj.map(() => {
      tempArr.push(false);
    },
    setToggleRotationArrowStatus(tempArr))
  };
  
  const toggleArrow = (index: number) => {
    let switchStat = [...toggleArrowStatus];
    switchStat[index] = !switchStat[index];
    setStatus(switchStat);
  }
  
  const arrowOnHandleClick = () => {
    setIsClicked(prev => !prev);
    isArrowClicked(isClicked)
  }
  
  const toggleCarousel = (index: number) => {
    let switchStat = [...toggleCarouselStatus];
    switchStat[index] = !switchStat[index];
    setToggleCarouselStatus(switchStat);
  };
  
  const carouselOnHandleClick = () => {
    setIsCategoryOpen(isOpen => !isOpen);
  }

  const toggleRotationArrow = (index: number) => {
    let switchStat = [...toggleRotationArrowStatus];
    switchStat[index] = !switchStat[index];
    setToggleRotationArrowStatus(switchStat);
  };

  const handleRotate = () => setRotateArrow(isRotateArrow => !isRotateArrow);

  const rotate = (index: number) => toggleRotationArrowStatus[index] ? "rotate(-180deg)" : "rotate(0deg)";
  
  const categoryContentMapper = categoryObj.map( (element, index) => {
    
    const carouselMapper = element.carousel.map( (item, index) => {
      return (
        <>
          <SwiperSlide key={index}>
            <img 
              className='carousel-img'
              src={item.imagePath}
              alt={item.alt} 
            />
          </SwiperSlide>
        </>
      )
    });

    return (
      <>
      <h2 
        className={toggleArrowStatus[index] ? 'playground-category-title-clicked' : 'playground-category-title'}
        onClick={() => {
          toggleArrow(index);
          toggleCarousel(index);
          arrowOnHandleClick();
          toggleRotationArrow(index)
        }}
        >
          <span 
            className={toggleArrowStatus[index] ? 'playground-category-subtitle-clicked' : 'playground-category-subtitle'}
          >
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
            arrowOnHandleClick();
          }}
        >
          <FontAwesomeIcon
              key={element.index}
              className="playground-category-arrow"
              style={{transform: rotate(index), transition: "all 0.2s linear"}}
              title="ArrowUp" 
              icon={faArrowDown}
              onClick={() => {
                toggleRotationArrow(index)
              }}
            />
        </a>
      </h2>
      { toggleCarouselStatus[index] ? 
        (
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            loop={true}
            pagination={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Pagination, Navigation, Mousewheel, Keyboard]}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              "@0.90": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            
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
      {categoryContentMapper}
    </>
  )
}

export default Carousel;