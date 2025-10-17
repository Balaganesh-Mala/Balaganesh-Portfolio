import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home/home.jsx";
import About from "./components/AboutMe/About.jsx";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AllProjects from "./components/AllProjects/AllProjects.jsx";

import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Education />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
};

export default App;
