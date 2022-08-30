import { useEffect, useRef } from 'react';
import Gif from './gif/gif';
import './loadingScreen.css';
import { useState } from 'react';

const LoadingScreen = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [opacity, setOpacity] = useState<number>(1);

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