import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      animate={{
        scale: [1, 1.1, 1.2, 1, 1],
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
        className="semi-circle-wrapper"
      >
        <div className="semi-circle">
          <Link 
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