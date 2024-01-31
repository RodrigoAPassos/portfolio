import React from 'react'

const Projects = (props) => {
  return (
    <div>{props.language === "pt-BR" ? <span>Projetos</span> : <span>Projects</span>}</div>
  )
}

export default Projects