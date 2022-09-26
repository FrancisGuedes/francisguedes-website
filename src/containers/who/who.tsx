import { motion } from 'framer-motion';
import { Transition, VariantsLeft, VariantsRight } from '../../util/animations/slidePageVariables';
import './who.css';
import { strings } from '../../util/strings';
import SectionOne from './section-one/sectionOne';
import SectionTwo from './section-two/sectionTwo';
import SocialMedia from '../../components/social-media/socialMedia';

export interface WhoProps {
  isVariantsRight: boolean;
}

const Who = ({ isVariantsRight }: WhoProps) => {

  const labelSectionOne = {...strings.whoPage.section_one};
  let gif = require('../../assets/gif/who-first-gif.gif')

  let isNavbarClickFromLeftToRight = isVariantsRight;

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
        <div className='who-wrapper-padding'>
          <SectionOne/>
          <SectionTwo/>
          <div className='social-media-who-wrapper'>
            <SocialMedia isBackGroundYellow={false}/>
          </div>
        </div>
        
    </motion.main> 
  </>
  );
}

export default Who;