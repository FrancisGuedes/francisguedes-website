import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Animate, Transition } from '../../util/animations/semiCircleVariables';
import './semiCircle.css';

interface semiCircleProps {
  colorSemiCircle: string;
}

const SemiCircle = ({ colorSemiCircle }: semiCircleProps) => {
  const color = colorSemiCircle;

  useEffect(() => {
    startAnimation();
    document.documentElement.style.setProperty('--color', color);
  }, [])

  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      scale: [1, 1.1, 1.2, 1, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }
    });
  };

  return ( 
    <>
      <motion.div
        animate={Animate}
        transition={Transition}
        className="semi-circle-wrapper"
      >
        <div className="semi-circle">
          <Link
            aria-label="easter egg"
            rel="canonical" 
            data-new-state="work" 
            className='work-title-link circle' 
            to="/work" 
          />
        </div>
      </motion.div>
    </>
  );
}

export default SemiCircle;