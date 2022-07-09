import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from "gsap";
import { http_errors, strings } from '../../util/strings';
import { Transition, Variants } from '../../util/animations/slidePageVariables';
import ArrowBack from '../../components/arrow-back/arrowBack';

import './notFound.css';
import Button from '../../components/button/button';
import { ObjectLiteralElement } from 'typescript';

const NotFound = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [endX, setEndX] = useState(0);
  
  const errors = {...http_errors};
  const label = {...strings.notFoundPage}
  const labelText: string = label.button_name
  
  const randomX = gsap.utils.random(-200, 200, 1, true);

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
            <div className='error-title'>
              <div className='error-title-code' ref={boxRef}>
                {errors.notFound.code}
              </div>
              <br/>
              <h2 className='error-title-message'>
                {errors.notFound.message}
              </h2>
            </div>
            <div className='button-wrapper-not-found'>
              {/* <a type='button' className='not-found-button' onClick={() => setEndX(randomX())}>     
                {label.button_name}
              </a> */}
              <Button 
                labelName={labelText}
                onClick={() => setEndX(randomX())}
                className='not-found-button'
              />
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
