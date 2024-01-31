import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App(props) {

  return (
    <>
      <header className='header'>
        <div className="header__logo">
          <span className='name-logo text1'>RodrigoAPassos</span>
          <span className='gh-logo hidden'></span>
        </div>
        <nav className='header__nav'>
          <Link to="/projects" className='nav-link text2'>{props.language === "pt-BR" ? <span>Projetos</span> : <span>Projects</span>}</Link>
          <Link to="/contact" className='nav-link text2'>{props.language === "pt-BR" ? <span>Contato</span> : <span>Details</span>}</Link>
        </nav>
      </header>
      <main className='main'>
        <Outlet />
      </main>
      <footer className='footer'>
      {props.language === "pt-BR" ? <p className='text1'>desenvolvido por <span className='gh-link'>RodrigoAPassos</span> </p> :
       <p className='text1'>developed by <span className='gh-link'>RodrigoAPassos</span> </p>}
       {props.language === "pt-BR" ? <p className='text2'>como parte do currículo do curso<span className='top-link'>The Odin Project</span></p> :
       <p className='text2'>as a project for <span className='top-link'>The Odin Project</span> curriculum</p>}
      </footer>
    </>
  )
}

export default App
