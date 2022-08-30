import { useEffect, useRef } from 'react';
import Gif from './gif/gif';
import './loadingScreen.css';
import { useState } from 'react';
import { colors } from '../../util/colors';
import * as endpoint from '../../api/endpoints';

const LoadingScreen = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [opacity, setOpacity] = useState<number>(1);
  const currentLocationUrl: string = window.location.pathname;
  const urlHomeLocation: string = endpoint.urlHome;
  const urlWhoLocation: string = endpoint.urlWho;
  const urlWorkLocation: string = endpoint.urlWork;
  const urlPlayingLocation: string = endpoint.urlPlaying;

  useEffect(() => {
    let elementStyleOpacity: string | undefined = ref.current?.style.opacity;

    const fadeEffect: NodeJS.Timer = setInterval(() => {
      let elementStyleOpacityToNumber = Number(elementStyleOpacity);
      if (!elementStyleOpacityToNumber) {
        elementStyleOpacityToNumber = 1;
        setOpacity(elementStyleOpacityToNumber)
      }
      if (elementStyleOpacityToNumber > 0) {
        elementStyleOpacityToNumber -= 0.9;
        setOpacity(elementStyleOpacityToNumber)
      } else {
        clearInterval(fadeEffect);
      }
      elementStyleOpacity = elementStyleOpacityToNumber.toString()
    }, 1000);
    changingLoadingScreenBackground()
  }, []);

  function changingLoadingScreenBackground(): void {
    const backgroundColor = {...colors.new_background};
    switch(currentLocationUrl) {
      case urlHomeLocation:
        document.documentElement.style.setProperty('--background', backgroundColor.yellow);
        break;
      case urlWhoLocation:
        document.documentElement.style.setProperty('--background', backgroundColor.blue);
        break;
      case urlWorkLocation:
        document.documentElement.style.setProperty('--background', backgroundColor.purple);
        break;
      case urlPlayingLocation:
        document.documentElement.style.setProperty('--background', backgroundColor.orange);
        break;
      default:
        document.documentElement.style.setProperty('--background', backgroundColor.pink);
        break;
    }
  };
  
  return ( 
    <>
      <div 
        ref={ref} 
        className='loading-gif-wrapper' 
        style={{opacity: opacity}}
      >
        <Gif/>
      </div>
    </>
  );
}

export default LoadingScreen;