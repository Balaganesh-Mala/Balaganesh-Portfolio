import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/home.jsx";
import About from "./components/AboutMe/about.jsx";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />

      <About />

      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
