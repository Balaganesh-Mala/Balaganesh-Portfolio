import React from "react";

import "./Projects.css";

const Projects = () => {
  

  const projects = [
    {
      title: "E-Commerce",
      img: "https://ik.imagekit.io/izqq5ffwt/7897863.jpg", // replace with your actual image URL
      desc: "A full-featured online shopping platform with cart, payment, and order tracking.",
    },
    {
      title: "E-Learning",
      img: "https://ik.imagekit.io/izqq5ffwt/7897863.jpg",
      desc: "An online education platform offering interactive video courses and quizzes.",
    },
    {
      title: "Task Management",
      img: "https://ik.imagekit.io/izqq5ffwt/7897863.jpg",
      desc: "A productivity app to manage tasks with real-time updates and reminders.",
    },
    {
      title: "NxtWatch (YouTube Clone)",
      img: "https://ik.imagekit.io/izqq5ffwt/7897863.jpg",
      desc: "A YouTube-like app with search, video playback, and dark mode support.",
    },
    {
      title: "Jobby (Job Search)",
      img: "https://ik.imagekit.io/izqq5ffwt/7897863.jpg",
      desc: "A job search web app built using React and REST APIs for listings and filters.",
    },
    {
      title: "Food Munch",
      img: "https://ik.imagekit.io/izqq5ffwt/7897863.jpg",
      desc: "A modern food delivery UI with dynamic menu and responsive layout.",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.img} alt={proj.title} className="project-img" />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-container">
        <button
          className="view-all-btn"
        >
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
