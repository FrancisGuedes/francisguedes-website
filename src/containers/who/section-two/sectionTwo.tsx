import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { strings } from '../../../util/strings';
import './sectionTwo.css';

const SectionTwo = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const labelSectionTwo = {...strings.whoPage.section_two};
  const labelSkills = {...labelSectionTwo.skills};

  const renderSkills = Object.values(labelSkills).map((skill, index) => {
      return (
        <>
          <div className={`modal ${displayModal ? "show" : ""}`}>
            <h1 className='modal-skill-title'>skill_name</h1>
            <FontAwesomeIcon
                key={index}
                className="close"
                title="ArrowUp" 
                icon={faArrowDown}
                onClick={() => setDisplayModal(!displayModal)}
              />
            <p className="modal-skill-description">
              Note: these settings are saved in the browser only and can be lost
            </p>
          </div>

          <a
            aria-label="skill link"
            className={`skill-link ${displayModal ? "show" : ""}`}
            onClick={() => setDisplayModal(!displayModal)}
            key={index}
          >
            <p className="skill-title">{skill}.&nbsp;</p>
          </a>
        </>
      )
  });
  
  return ( 
    <>
      <section className='second-section-container'>
        <div className='second-section-wrapper'>
          <div className='second-section-head-title'>
            <h1 className='second-section-title'>
              {labelSectionTwo.title}
            </h1>
            <br/>
            <h2 className='second-section-sub-title'>
              {labelSectionTwo.sub_title}
            </h2>
          </div>
          <div className='skills-wrapper'>
            <div className='skills-body'>
              {renderSkills}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionTwo;