import './sectionOne.css';
import { strings } from '../../../util/strings';
import ArrowLink from '../../../components/arrow-link/arrowLink';

const SectionOne = () => {
  const labelSectionOne = {...strings.whoPage.section_one};
  let gif = require('../../../assets/gif/who-first-gif.gif')
  
  return ( 
    <>
      <section className='first-section-container'>
        <div className='first-section-text'>
          <div className='first-section-first-word-wrapper'>
            <h2 className='first-section-first-word'>
              {labelSectionOne.engagement.first_word}
            </h2>
            <div className='first-section-first-word-parenthesis-wrapper'>
              <p className='first-section-first-word-parenthesis'>(</p>
                <p className='first-section-first-word-parenthesis-text'>
                  {labelSectionOne.composing.second_paragraph}
                </p>
              <p className='first-section-first-word-parenthesis'>)</p>
            </div>
          </div>
          <h2 className='first-section-second-word'>
            {labelSectionOne.engagement.second_word}
          </h2>
          <h2 className='first-section-third-word'>
            {labelSectionOne.engagement.third_word}
          </h2>
          <h2 className='first-section-fourth-word'>
            {labelSectionOne.engagement.fourth_word}
          </h2>
        </div>
        {/* <div className='first-section-text'>
          <div className='first-section-title-wrapper'>
            <h1 className='first-section-title'>
              {labelSectionOne.title}
            </h1>
          </div>
            <br/>
            <h2 className='first-section-composing'>
              <p style={{fontWeight:800, marginBottom:'10px'}}>{labelSectionOne.composing.first_line}</p>
              <p style={{marginTop:'10px'}}>{labelSectionOne.composing.second_paragraph}</p>
            </h2>
        </div> */}
        <picture className='first-section-gif-wrapper'>
          <img 
            className='first-section-gif'
            src={gif} 
            alt="gif of me moving" 
          />
        </picture>
        <ArrowLink/>
      </section>
    </>
  );
}

export default SectionOne;