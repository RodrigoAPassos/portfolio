import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useState } from 'react'
import App from "../App";
import Contact from "./Contact"
import Projects from "./Projects";

const Router = () => {

    const [language, setLanguage] = useState("pt-BR");

    const handleLanguage = (lang) => {
      setLanguage(lang);
    }
    
    const router = createBrowserRouter([
    {
      path: "/",
      element: <App language = {language} handleLanguage = {handleLanguage} />,
      children: [
        { index: true, element: <Projects language = {language}/> },
        { path: "/details", element: <Contact language = {language} /> },
        { path: "*", element: <Navigate to={"/"} />},
      ],
      /* errorElement: <Navigate to="/projects" />, */
    },
  ],{ basename: import.meta.env.BASE_URL });

  return <RouterProvider router={router} />;
};

export default Router;