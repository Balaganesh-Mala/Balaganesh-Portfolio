import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">Bala Ganesh Mala</h2>
          <p className="footer-description">
            I'm a dedicated Full Stack Developer (MERN) passionate about
            creating responsive, user-friendly, and scalable web applications.
            This portfolio showcases my skills, projects, and journey in web
            development.
          </p>
        </div>

        <div className="content-footer">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="footer-icons">
              <a
                href="https://www.linkedin.com/in/yourlinkedin/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/yourinstagram/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.youtube.com/@youryoutube"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Bala Ganesh Mala — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
