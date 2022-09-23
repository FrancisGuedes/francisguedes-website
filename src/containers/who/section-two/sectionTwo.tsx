import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { strings } from '../../../util/strings';
import './sectionTwo.css';

export type Skill = {
  [key: string]: string; 
  name: string;
  description: string;
}

const SectionTwo = () => {
  
  let skillProps: Skill = {
    name: '',
    description: ''
  }
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [dataModel, setDataModal] = useState<Skill>(skillProps);

  const labelSectionTwo = {...strings.whoPage.section_two};
  const labelSkills = {...labelSectionTwo.skills};

  const renderSkills = Object.values(labelSkills).map((skill, index) => {
      function toggleModal(): void {
        setDisplayModal(!displayModal);
      }

      function openModalWithData(skillData: Skill): void {
        setDataModal(skillData);
      }

      return (
        <>
          <div className={`modal ${displayModal ? "show" : ""}`}>
            <h1 className='modal-skill-title'>{dataModel.name}</h1>
            <FontAwesomeIcon
                key={index}
                className="close"
                title="ArrowLeft" 
                icon={faArrowDown}
                onClick={toggleModal}
              />
            <p className="modal-skill-description">
              {dataModel.description}.
            </p>
          </div>

          <a
            aria-label="skill link"
            className={`skill-link ${displayModal ? "show" : ""}`}
            onClick={() => {
              toggleModal();
              openModalWithData(skill);
            }}
            key={index}
          >
            <p className="skill-title">{skill.name}.&nbsp;</p>
          </a>
        </>
      )
  });
  
  return ( 
    <>
      <section id='skills' className='second-section-container'>
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