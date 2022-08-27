import { motion } from 'framer-motion';
import { Transition, VariantsLeft, VariantsRight } from '../../util/animations/slidePageVariables';
import './who.css';

export interface WhoProps {
  isVariantsRight: boolean;
}

const Who = ({ isVariantsRight }: WhoProps) => {

  /* useEffect(() => {
    document.body.style.background = colors.background.yellow;
  }); */

  let isNavbarClickFromLeftToRight = isVariantsRight;

  const styleDiv: any = {
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(50%,-50%)'
  }

  return ( 
    <>
    <motion.main 
        layout
        className="who-wrapper" 
        data-container="content"
        initial='initial'
        animate='in'
        exit='out'
        transition={Transition}
        variants={isNavbarClickFromLeftToRight ? VariantsLeft : VariantsRight}
      >
        <h1 style={styleDiv} className='intro-text-first-line'>
          Coming soon...
        </h1>
    </motion.main> 
  </>
  );
}

export default Who;