import { useEffect, useRef } from 'react';
import Gif from './gif/gif';
import './loadingScreen.css';
import { useState } from 'react';
import { colors } from '../../util/colors';
import * as endpoint from '../../api/endpoints';
import { changingCssVariableBasedOnNavbarUrl, INavbar } from '../../util/utility';

const LoadingScreen = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [opacity, setOpacity] = useState<number>(1);
  
  const newBackgroundColor = {...colors.new_background};
  const background: string = "background";

  const backgroundColor: INavbar = {
    hero: newBackgroundColor.yellow,
    who: newBackgroundColor.blue,
    work: newBackgroundColor.purple,
    play: newBackgroundColor.orange,
  };

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
    changingCssVariableBasedOnNavbarUrl(background, backgroundColor)
  }, []);

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