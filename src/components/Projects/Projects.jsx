import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "E-Commerce",
      img: "https://ik.imagekit.io/izqq5ffwt/7897863.jpg",
      desc: "A full-featured online shopping platform with cart, payment, and order tracking.",
      url: "https://malanxttrendze.ccbp.tech/",
    },
    {
      title: "E-Learning",
      img: "https://ik.imagekit.io/izqq5ffwt/2176.jpg",
      desc: "An online education platform offering interactive video courses and quizzes.",
      url: "https://balaganesh-mala.github.io/not-found",
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
    {
      title: "Jobby (Job Search)",
      img: "https://ik.imagekit.io/izqq5ffwt/NA_October_10.jpg",
      desc: "A job search web app built using React and REST APIs for listings and filters.",
      url: "https://jobby.ccbp.tech/",
    },
    {
      title: "Todo List",
      img: "https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-10-17%20164815.png",
      desc: "A simple and efficient task management app to add, edit, and delete daily tasks with real-time updates.",
      url: "https://todolist.ccbp.tech/",
    },
    {
      title: "Wikipedia Search",
      img: "https://ik.imagekit.io/izqq5ffwt/2668228.jpg",
      desc: "A dynamic Wikipedia search application that fetches real-time article results using the Wikipedia API.",
      url: "https://wikipedia.ccbp.tech/",
    },
    {
      title: "Food Munch",
      img: "https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-10-17%20163113.png",
      desc: "A modern food delivery UI with dynamic menu and responsive layout.",
      url: "https://foodmunch.ccbp.tech/",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={proj.img} alt={proj.title} className="project-img" />
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
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
