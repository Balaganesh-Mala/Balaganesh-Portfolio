import React from "react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://ik.imagekit.io/izqq5ffwt/IMG_20251017_135815.jpg"
            alt="Bala Ganesh"
          />
        </div>
        <div className="about-info">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I'm <span className="highlight">Bala Ganesh Mala</span>, a passionate{" "}
            <strong>MERN Stack Developer</strong> dedicated to building scalable
            and user-friendly web applications. I have strong skills in
            JavaScript, React.js, Node.js, and databases like MongoDB & SQL.
            <br />
            <br />
            With over <strong>60+ projects</strong> completed, I’ve honed my
            ability to turn complex problems into elegant solutions. My goal is
            to create digital experiences that combine creativity with clean
            code.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <h3>60+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-box">
              <h3>5+</h3>
              <p>Achievements</p>
            </div>
          </div>

          <div className="about-buttons">
            <a href="#" className="btn btn-black">
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
