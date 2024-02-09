import projectData from "../assets/projects.json";
import "../styles/projects.css";

const Projects = (props) => {

  return (
    <div className="projects-container">
    {projectData.projects.map((project, index) => {
      const imgPath = project.imgName;
      return (
        /* Parallax Test */
        <div key={index} className="project-card">
          <div className="project-bg" style={{
          backgroundImage: `url(../src/assets/${imgPath})`,
        }}>
            <div className="title">
              <a href={project.previewLink} target='_blank' className='project-title' rel="noreferrer" title={props.language === "pt-BR" ? 'Clique para testar' : 'Click to preview'}>{
                props.language === "pt-BR" ? project.info['pt-BR'].projectTitle : project.info.en.projectTitle}</a></div>
          </div>
          <div className="desc-info">
              <a href={project.ghLink} target='_blank' rel="noreferrer" title={props.language === "pt-BR" ? 'Clique para ver o código' : 'Click to see the code'}>{props.language === "pt-BR" ? project.info['pt-BR'].description : project.info.en.description}</a>
              <div className="tech-container">
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