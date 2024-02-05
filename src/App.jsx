import { useEffect, useState } from 'react'
import '../src/App.css';
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";

function App(props) {

  const location = useLocation();

  return (
    <>
      <header className='header'>
        <div className="header__logo">
          <span className='name-logo text1'>Rodrigo Passos</span>
        </div>
        <nav className='header__nav'>
          <Link to="/projects" className={location.pathname === "/projects" ? "nav-link reading text2" : "nav-link not-reading text2"}>{props.language === "pt-BR" ? <span>Projetos</span> : <span>Projects</span>}</Link>
          <Link to="/details" id='/details' className={location.pathname === "/details" ? "nav-link reading text2" : "nav-link not-reading text2"}>{props.language === "pt-BR" ? <span>Contato</span> : <span>Details</span>}</Link>
        </nav>
      </header>
      <main className='main'>
        <Outlet />
      </main>
      <footer className='footer'>
      {props.language === "pt-BR" ? <p className='text-footer'>desenvolvido por <span className='gh-link text1'>RodrigoAPassos</span> </p> :
       <p className='text-footer'>developed by <span className='gh-link text1'>RodrigoAPassos</span> </p>}
       {props.language === "pt-BR" ? <p className='subtext-footer'>como parte do currículo<a className='top-link text2' href='https://www.theodinproject.com/about' target='_blank' >The Odin Project</a></p> :
       <p className='subtext-footer'>as a project for <a className='top-link text2' href='https://www.theodinproject.com/about' target='_blank' >The Odin Project</a> curriculum</p>}
      </footer>
    </>
  )
}

export default App
