import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Animate, Transition } from '../../util/animations/semiCircleVariables';
import { VariantsLeft } from '../../util/animations/slidePageVariables';
import './semiCircle.css';

interface semiCircleProps {
  colorSemiCircle: string;
}

const SemiCircle = ({ colorSemiCircle }: semiCircleProps) => {
  const color = colorSemiCircle;

  useEffect(() => {
    document.documentElement.style.setProperty('--color', color);
  }, [])

  return ( 
    <>
      <motion.div
        animate={Animate}
        transition={Transition}
        className="semi-circle-wrapper"
        variants={VariantsLeft}
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