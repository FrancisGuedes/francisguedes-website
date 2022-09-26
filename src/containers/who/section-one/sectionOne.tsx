import './sectionOne.css';
import { strings } from '../../../util/strings';
import ArrowLink from '../../../components/arrow-link/arrowLink';
import { useEffect, useState } from 'react';
import { WindowSizeSpace } from '../../../util/utility';

const SectionOne = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeSpace.IWindowSize>(WindowSizeSpace.getWindowSize());
  const labelSectionOne = {...strings.whoPage.section_one};
  const windowWidth: number = windowSize.innerWidth;
  const windowWidthTablet: number = 769;

  let gif = require('../../../assets/gif/who-first-gif.gif')

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(WindowSizeSpace.getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const parenthesisText = () => {
    return (
      <>
        <div className='first-section-first-word-parenthesis-wrapper'>
          <p className='first-section-first-word-parenthesis'>(</p>
            <p className='first-section-first-word-parenthesis-text'>
              {labelSectionOne.composing.second_paragraph}
            </p>
          <p className='first-section-first-word-parenthesis'>)</p>
        </div>
      </>
    )
  }

  return ( 
    <>
      <section className='first-section-container'>
        <div className='first-section-text'>
          { windowWidth >= windowWidthTablet ? (
            <>
              <div className='first-section-first-word-wrapper'>
                <h2 className='first-section-first-word'>
                  {labelSectionOne.engagement.first_word}
                </h2>
                {parenthesisText()}
              </div>
              <h2 className='first-section-second-word'>
                {labelSectionOne.engagement.second_word}
              </h2>
              <h2 className='first-section-third-word'>
                {labelSectionOne.engagement.third_word}
                <picture className='first-section-gif-wrapper'>
                  <img 
                    className='first-section-gif'
                    src={gif} 
                    alt="gif of me moving" 
                  />
                </picture>
              </h2>
              <h2 className='first-section-fourth-word'>
                {labelSectionOne.engagement.fourth_word}
              </h2>
            </>
          ) : (
              <>
                <div className='first-section-first-word-wrapper'>
                  <h2 className='first-section-first-word'>
                    {labelSectionOne.engagement.first_word}&nbsp;{labelSectionOne.engagement.second_word}
                  </h2>
                </div>
                <h2 className='first-section-third-word'>
                  {labelSectionOne.engagement.third_word}
                </h2>
                <h2 className='first-section-fourth-word'>
                  {labelSectionOne.engagement.fourth_word}
                </h2>
                {parenthesisText()}
                <picture className='first-section-gif-wrapper'>
                  <img 
                    className='first-section-gif'
                    src={gif} 
                    alt="gif of me moving" 
                  />
                </picture>
              </>
            )
          }
        </div>
        <ArrowLink/>
      </section>
    </>
  );
}

export default SectionOne;