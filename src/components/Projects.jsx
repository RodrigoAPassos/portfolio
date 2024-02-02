import React from 'react';
import projectData from "../assets/projects.json";
import "../styles/projects.css"

const Projects = (props) => {
  return (
    <div className="projects-container">
    {projectData.projects.map((project, index) => {
      return (
        <div key={index} className='project-card'>
          <span className='project-title'>{project.projectTitle}</span>
          <div className="project-card__info">
            <img src={project.imgPath} alt={project.projectTitle + " image"} />
            <div className="desc-info">
              {props.language === "pt-BR" ? <span >{project.info['pt-BR'].description}</span> : <span>{project.info.en.description}</span>}
              {project.techs.map((tech, index2) => {
                return (
                  <div className="techs" key={index2}>{tech}</div>
                )
              })}
            </div>
          </div>
        </div>
      )
    })}
    </div>
  )
}

export default Projects