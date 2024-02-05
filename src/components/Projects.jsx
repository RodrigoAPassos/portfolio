import React from 'react';
import projectData from "../assets/projects.json";
import "../styles/projects.css";

const Projects = (props) => {
  return (
    <div className="projects-container">
    {projectData.projects.map((project, index) => {
      return (
        <div key={index} className='project-card'>
          <a href={project.previewLink} target='_blank' className='project-title'>{project.projectTitle}</a>
          <div className="project-card__info">
            <img src={"../src/assets/"+project.imgName} alt={project.projectTitle + " image"}></img>
            <div className="desc-info">
              {props.language === "pt-BR" ? <a href={project.ghLink} target='_blank'>{project.info['pt-BR'].description}</a> : <a href={project.ghLink} target='_blank'>{project.info.en.description}</a>}
              <div className="tech-container">
                {project.techs.map((tech, index2) => {
                  return (
                    <div className="techs" key={index2}>{tech}</div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )
    })}
    </div>
  )
}

export default Projects