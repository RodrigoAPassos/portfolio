import "../styles/contact.css"

const Contact = (props) => {
  return (
    <div className="details-container">
      <span className='details__title text1'>Rodrigo Araujo dos Passos</span>
      <div className="details-info">
        <div className="phone-info">
          <i className="fa-solid fa-phone fa-xl"></i>
          <span className='phone-number'>+55 (011) 9 8534-9638</span>
        </div>
        <div className="email-info">
          <i className="fa-solid fa-envelope fa-xl"></i>
          <span className='email'>rodrigoarapassos@gmail.com</span>
        </div>
      </div>
      <div className="links-info">
        <a href='https://www.linkedin.com/in/rodrigo-passos-244a1a113/' className="fa-brands fa-linkedin fa-xl linkedin-profile" target='_blank' rel="noreferrer" title={props.language === "pt-BR" ? 'Ir para LinkedIn' : 'Go to LinkedIn'}></a>
        <a href="https://github.com/RodrigoAPassos" className="fa-brands fa-square-github fa-xl gh-profile" target='_blank' rel="noreferrer" title={props.language === "pt-BR" ? 'Ir para GitHub' : 'Go to GitHub'}></a>
      </div>
      
    </div>
  )
}

export default Contact;