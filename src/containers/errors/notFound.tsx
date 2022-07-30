import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from "gsap";
import { http_errors, strings } from '../../util/strings';
import { Transition, Variants } from '../../util/animations/slidePageVariables';
import ArrowBack from '../../components/arrow-back/arrowBack';
import EndlessText from '../../components/endless-text/endlessText';

import './notFound.css';
import Button from '../../components/button/button';

const NotFound = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [endX, setEndX] = useState(0);
  
  const errors = {...http_errors};
  const label = {...strings.notFoundPage}
  const labelText: string = label.button_name
  
  const randomX = gsap.utils.random(-500, 500, 1, true);

  const boxRef: any = useRef();

  // run when `endX` changes
  useEffect(() => {
    gsap.to(boxRef.current, {
      x: endX
    });
  }, [endX]);

  
  return ( 
    <>
    <motion.main 
        layout
        className='not-found-wrapper'
        initial='initial'
        animate='in'
        exit='out'
        transition={Transition}
        variants={Variants}
      >
        <ArrowBack/>
          <div className='not-found-wrapper-padding'>
            <div className='error-text-title'>
              
              <h1 className='error-title-code' ref={boxRef}>
                <EndlessText messageLabel={errors.notFound.code}/>
              </h1>
              <h2 className='error-title-message'>
                {errors.notFound.message}
              </h2>
            </div>
            <div className='button-wrapper-not-found'>
              {/* <Button 
                labelName={labelText}
                onClick={() => setEndX(randomX())}
              /> */}
            </div>
            <div className="not-found-image-wrapper">
              <picture className='not-found-image'/>
            </div>
          </div>
      </motion.main>
    </>
  );
}

export default NotFound;

function useRouter() {
  throw new Error('Function not implemented.');
}
