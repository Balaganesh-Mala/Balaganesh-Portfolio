import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2>Portfolio</h2>
          <p>
            Passionate MERN Stack Developer dedicated to building user-friendly,
            responsive, and efficient web applications.
          </p>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#about">About Me</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Connect with Me</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/mala-balaganesh/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Balaganesh-Mala" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Bala Ganesh | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
