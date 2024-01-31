import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from 'react'
import App from "../App";
import Contact from "./Contact"
import Projects from "./Projects";

const Router = () => {
    const [language, setLanguage] = useState("pt-BR");
    const router = createBrowserRouter([
    {
      path: "/",
      element: <App language = {language} />,
      children: [
        { index: true, path: "/projects", element: <Projects language = {language}/> },
        { path: "/contact", element: <Contact language = {language} /> },
      ]
      /* errorElement: <ErrorPage />, */
    },
    /* {
      path: "/contact",
      element: <Contact />,
    }, */
  ]);

  return <RouterProvider router={router} />;
};

export default Router;