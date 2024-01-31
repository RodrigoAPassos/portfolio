import React from 'react'

const Contact = (props) => {
  return (
    <div>{props.language === "pt-BR" ? <span>Contato</span> : <span>Details</span>}</div>
  )
}

export default Contact