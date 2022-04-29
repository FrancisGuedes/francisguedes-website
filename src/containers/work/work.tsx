import * as React from 'react';
import * as Router from 'react-router-dom';
import './work.css';
import { strings } from '../../util/strings';
import { Link } from 'react-router-dom';
import ArrowBack from '../../components/arrow-back/arrowBack';
import '../../assets/images/work/first-steps-website.jpg'

const projectsObj = [...strings.workPage.projects];

const projectsMapper = projectsObj.map( element => {
  return (
    <div key={element.title} className="work-project-content">
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
          src={element.imageThumb}
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
                    {/* colocar social media */}
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