import { strings } from '../../../util/strings';
import './sectionTwo.css';

const SectionTwo = () => {
  const labelSectionTwo = {...strings.whoPage.section_two};
  const labelSkills = {...labelSectionTwo.skills};

  const renderSkills = Object.values(labelSkills).map((skill, index) => {
      return (
        <a
          aria-label="skill link"
          className="skill-link"
          href='#'
          key={index}
        >
          <p className="skill-title">{skill}.&nbsp;</p>
        </a>
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