import React from "react";
import { useNavigate } from "react-router-dom";
import "./AllProjects.css";

const allProjects = [
  {
    title: "Portfolio Website",
    image: "https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-10-18%20130214.png",
    desc: "A responsive and professional personal portfolio built with React and Vite.",
    link: "https://balaganesh-portfolio-k2vv.onrender.com",
  },
  {
    title: "Tourism",
    image: "https://ik.imagekit.io/izqq5ffwt/3913824.jpg",
    desc: "A modern tourism website showcasing destinations and experiences with responsive UI.",
    link: "https://balaganesh-tourism.netlify.app/",
  },
  {
    title: "Typing Speed Test",
    image:
      "https://ik.imagekit.io/izqq5ffwt/closeup-gamer-typing-professional-rgb-keyboard-playing-online-video-game-gaming-home-studio-player-using-modern-equipment-streaming-e-sport-competition-late-night.jpg",
    desc: "A typing speed app that measures accuracy and speed in real-time.",
    link: "https://typing.ccbp.tech/",
  },
  {
    title: "Weather App",
    image: "https://ik.imagekit.io/izqq5ffwt/OIP.jpg",
    desc: "Displays real-time weather data using OpenWeather API with a clean interface.",
    link: "https://balaganesh-weatherapp.netlify.app/",
  },
  {
    title: "E-Commerce Platform",
    image: "https://ik.imagekit.io/izqq5ffwt/7897863.jpg",
    desc: "A full-featured shopping site with product listings, cart, and checkout using React and Node.js.",
    link: "https://malanxttrendze.ccbp.tech/",
  },
  {
    title: "E-Learning Platform",
    image: "https://ik.imagekit.io/izqq5ffwt/2176.jpg",
    desc: "An interactive learning portal offering courses, quizzes, and video lessons.",
    link: "https://balaganesh-mala.github.io/not-found",
  },
  {
    title: "Task Management App",
    image: "https://ik.imagekit.io/izqq5ffwt/3271441.jpg",
    desc: "Organize and track tasks efficiently with this responsive MERN stack task manager.",
    link: "https://task-flow-frontend-dntu.onrender.com/",
  },
  {
    title: "NxtWatch (YouTube Clone)",
    image: "https://ik.imagekit.io/izqq5ffwt/6350310.jpg",
    desc: "A YouTube-like app with video search, dark mode, and player integration.",
    link: "https://nxtwatch.ccbp.tech/",
  },
  {
    title: "Jobby App",
    image: "https://ik.imagekit.io/izqq5ffwt/NA_October_10.jpg",
    desc: "A job search platform allowing users to explore and apply for jobs securely.",
    link: "https://jobby.ccbp.tech/",
  },
  {
    title: "Food Munch",
    image:
      "https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-10-17%20163113.png",
    desc: "A restaurant website showcasing menus, offers, and animations.",
    link: "https://foodmunch.ccbp.tech/",
  },
  {
    title: "Todo Tracker",
    image:
      "https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-10-17%20164815.png",
    desc: "A simple and efficient to-do list app to manage daily goals.",
    link: "https://todolist.ccbp.tech/",
  },
  {
    title: "Wikipedia Search App",
    image:
      "https://ik.imagekit.io/izqq5ffwt/2668228.jpg",
    desc: "A Wikipedia search tool that fetches articles using API and displays results instantly.",
    link: "https://wikipedia.ccbp.tech/",
  },
];

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <section className="all-projects-section">
      <div className="header-with-back">
        <h2 className="all-projects-heading">All Projects</h2>
        <button className="back-button" onClick={() => navigate("/#projects")}>
          ← Back
        </button>
      </div>

      <div className="all-projects-grid">
        {allProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="all-project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
