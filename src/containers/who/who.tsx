import { motion } from 'framer-motion';
// import { Transition, VariantsLeft, VariantsRight } from '../../util/animations/slidePageVariables';
import './who.css';

export interface WhoProps {
  isVariantsRight: boolean;
}

const Who = ({ isVariantsRight }: WhoProps) => {

  /* useEffect(() => {
    document.body.style.background = colors.background.yellow;
  }); */

  let isNavbarClickFromLeftToRight = isVariantsRight;

  return ( 
    <>
    {/* <motion.main 
        layout
        className="who-wrapper" 
        data-container="content"
        initial='initial'
        animate='in'
        exit='out'
        transition={Transition}
        variants={isNavbarClickFromLeftToRight ? VariantsLeft : VariantsRight}
      >
        
    </motion.main>  */}
  </>
  );
}

export default Who;