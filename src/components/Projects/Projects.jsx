import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import frshmilk from "../../assets/freshmilk.png";
import hungerbites from "../../assets/hungerbites.png";
import mbfunkyzone from "../../assets/mbfunkyzone.png";
import organicoils from "../../assets/organicoil.png";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Fresh Milkk – Milk Subscription E-Commerce",
      img: frshmilk,
      desc: "A subscription-based milk delivery e-commerce platform featuring coupon discounts, daily schedule management, and seamless checkout experience for Fresh Milkk.",
      url: "https://freshmilkk.com",
    },
    {
      title: "Hunger Bites – Snacks E-Commerce",
      img: hungerbites,
      desc: "A modern snacks e-commerce store with OTP-based user registration, secure authentication, and Shiprocket integration for automated shipping and AWB generation.",
      url: "https://hungerbites.store",
    },
    {
      title: "MB Funky Zone – Fashion E-Commerce",
      img: mbfunkyzone,
      desc: "A clothing e-commerce platform for MB Funky Zone featuring pants, shirts, and hoodies with advanced filtering, real-time stock management, and smooth cart experience.",
      url: "https://mbfunkyzone.onrender.com",
    },
    {
      title: "Organic Oils – Oil & Grocery E-Commerce",
      img: organicoils,
      desc: "An organic store e-commerce platform selling oils, seeds, and pickles with category-based browsing, dynamic product pricing, and user-friendly shopping flow.",
      url: "https://organicoils.onrender.com",
    },
    {
      title: "Sri Ganesh Interiors – Interior Design Website",
      img: "https://ik.imagekit.io/izqq5ffwt/interior-project.jpg",
      desc: "A professional interior design portfolio website for Sri Ganesh Interiors showcasing services, project gallery, contact information, and responsive UI.",
      url: "https://sriganeshinterior.onrender.com",
    },
    {
      title: "E-Commerce",
      img: "https://ik.imagekit.io/izqq5ffwt/7897863.jpg",
      desc: "A full-featured online shopping platform with cart, payment, and order tracking.",
      url: "https://malanxttrendze.ccbp.tech/",
    },
    {
      title: "Task Management",
      img: "https://ik.imagekit.io/izqq5ffwt/3271441.jpg",
      desc: "A productivity app to manage tasks with real-time updates and reminders.",
      url: "https://task-flow-frontend-dntu.onrender.com/",
    },
    {
      title: "NxtWatch (YouTube Clone)",
      img: "https://ik.imagekit.io/izqq5ffwt/6350310.jpg",
      desc: "A YouTube-like app with search, video playback, and dark mode support.",
      url: "https://nxtwatch.ccbp.tech/",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">
        <span>My Work</span>
        <br />
        <strong>Featured Projects</strong>
      </h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image-wrapper">
              <img src={proj.img} alt={proj.title} className="project-img" />

              {/* Hover overlay */}
              <div className="project-hover-overlay">
                <span className="view-btn">View Project →</span>
              </div>
            </div>

            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="view-all-container">
        <button
          className="view-all-btn"
          onClick={() => navigate("/all-projects")}
        >
          Explore All Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
