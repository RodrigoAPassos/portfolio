import { useEffect, useState } from 'react'
import '../src/App.css';
import { Outlet, Link, useLocation } from "react-router-dom";

function App(props) {

  const [lang, setLang] = useState("pt-BR");

  const location = useLocation();

  const onLangChange = (e) => {
    setLang(e.target.value);
  }

  useEffect(()=> {
    props.handleLanguage(lang);
  }, [lang])

  return (
    <>
      <header className='header'>
        <div className="header__logo">
          <span className='name-logo text1'>Rodrigo Passos</span>
        </div>
        <nav className='header__nav'>
          <Link to="/" className={location.pathname === "/" ? "nav-link reading text2" : "nav-link not-reading text2"}>{props.language === "pt-BR" ? <span>Projetos</span> : <span>Projects</span>}</Link>
          <Link to="/details" id='/details' className={location.pathname === "/details" ? "nav-link reading text2" : "nav-link not-reading text2"}>{props.language === "pt-BR" ? <span>Contato</span> : <span>Details</span>}</Link>
        </nav>
      </header>
      <main className='main'>
        <Outlet />
      </main>
      <footer className='footer'>
        <div className="language-entry">
          <input id='lang-en' title='English' type="radio" name='language' value={"en"} checked={lang === "en"} onChange={Event => onLangChange(Event)}/>
          <label htmlFor="lang-en">En</label>
          <input title='Português' id='lang-pt' type="radio" name='language' value={"pt-BR"} checked={lang === "pt-BR"} onChange={Event => onLangChange(Event)}/>
          <label htmlFor="lang-pt">pt-BR</label>
        </div>
        <div className="footer-text">
          {props.language === "pt-BR" ? <p className='text-footer'>desenvolvido por <span className='gh-link text1'>RodrigoAPassos</span> </p> :
           <p className='text-footer'>developed by <span className='gh-link text1'>RodrigoAPassos</span> </p>}
           {props.language === "pt-BR" ? <p className='subtext-footer'>como parte do currículo<a className='top-link text2' href='https://www.theodinproject.com/about' target='_blank' rel="noreferrer" title={props.language === "pt-BR" ? 'Sobre The Odin Project' : 'About The Odin Project'}>The Odin Project</a></p> :
           <p className='subtext-footer'>as a project for <a className='top-link text2' href='https://www.theodinproject.com/about' target='_blank' rel="noreferrer" title={props.language === "pt-BR" ? 'Sobre The Odin Project' : 'About The Odin Project'}>The Odin Project</a> curriculum</p>}
        </div>
      </footer>
    </>
  )
}

export default App
