import React from 'react';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Navbars from "./component/navbars.jsx"
import Home from "./component/home.jsx"
import About from "./component/about.jsx"
import Portofolio from "./component/portofolio.jsx"
import Skills from "./component/skills.jsx"
import Contact from "./component/contact.jsx"
import Copyright from "./component/copyright.jsx"
import DetailPortofolio from "./component/detailProject.jsx"

function App() {
  return (
    <div style={{backgroundColor: "#030712", height:"auto"}}>
      <Router>
      <Navbars/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/portofolio" element={<Portofolio/>} />
        <Route exact path="/skills" element={<Skills/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/detailPortofolio/:id" element={<DetailPortofolio/>} />
      </Routes>
      
      <Copyright/>
      </Router>
    </div>
  );
}

export default App;
