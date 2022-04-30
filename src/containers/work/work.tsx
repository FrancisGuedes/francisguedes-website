import ArrowBack from '../../components/arrow-back/arrowBack';
import { strings } from '../../util/strings';

import './work.css';
import '../../assets/images/work/first-steps-website.jpg'
import SocialMedia from '../../components/social-media/socialMedia';

const projectsObj = [...strings.workPage.projects];

const projectsMapper = projectsObj.map( (element, index) => {
  return (
    <div key={index} className="work-project-content">
      <a 
        className="work-project-link"
        href={element.href}
        key={element.title} 
        target="_blank"
      >
        <span className="project-title">{element.title}</span>
      </a>
      <div className='project-thumb'>
        <img 
          className='project-thumb-image' 
          src={element.imagePath}
        />
      </div>
    </div>
  )
})

console.log(projectsMapper)



const Work = () => {

  return ( 
    <>
      <main className="work-wrapper" data-container="content">
        <ArrowBack/>
        <div className="work-wrapper-padding">
          <div className="content_padded">
                <div id="content" className="padded" data-id="392958">
                  <div className="project_title">
                    {strings.workPage.titleHide}
                  </div>

                  <div className="work-container" data-active="on" data-elementresizer data-resize-parent>
                    <section>
                      <h1 className="work-title">
                        {strings.workPage.title}</h1>
                      <br/>
                      <h2 className="work-sub-title">
                        {strings.workPage.subTitle}
                      <br/>
                      </h2>
                      <br/>
                    </section>
                    <section className="work-projects-scroll">
                      <div className="work-project" data-active="on">
                          {projectsMapper}
                      </div>
                    </section>
                    <br/>
                    <br/>
                    <h2>
                      <b>
                        <hr/>
                      </b>
                    </h2>
                    <br/>
                    <h1 className="work-footer-title">
                      {strings.workPage.footerTitle}
                    </h1>
                    <br/>
                    <br/>
                    <SocialMedia isBackGroundYellow={false}/>
                    <br/>
              </div>
            </div>
          </div>
        </div>
    </main>
  </>
  );
}

export default Work;