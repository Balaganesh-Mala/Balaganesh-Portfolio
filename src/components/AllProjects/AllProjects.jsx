import React from "react";
import { useNavigate } from "react-router-dom";
import "./AllProjects.css";

const allProjects = [
  {
    title: "E-Commerce Platform",
    image: "https://ik.imagekit.io/izqq5ffwt/3828838.jpg",
    desc: "A full-featured shopping site with product listings, cart, and checkout using React and Node.js.",
  },
  {
    title: "E-Learning Platform",
    image: "https://ik.imagekit.io/izqq5ffwt/3828838.jpg",
    desc: "An interactive learning portal offering courses, quizzes, and video lessons for students.",
  },
  {
    title: "Task Management App",
    image: "https://ik.imagekit.io/izqq5ffwt/3828838.jpg",
    desc: "Organize and track tasks efficiently with this responsive MERN stack task manager.",
  },
  {
    title: "NxtWatch (YouTube Clone)",
    image: "https://ik.imagekit.io/izqq5ffwt/3828838.jpg",
    desc: "A YouTube-like video streaming app with dark mode and real-time video fetching.",
  },
  {
    title: "Jobby App",
    image: "https://ik.imagekit.io/izqq5ffwt/3828838.jpg",
    desc: "A job search platform that allows users to explore jobs and apply using JWT authentication.",
  },
  {
    title: "Food Munch",
    image: "https://ik.imagekit.io/izqq5ffwt/3828838.jpg",
    desc: "A responsive restaurant website showcasing menus, offers, and smooth animations.",
  },
  {
    title: "Todo Tracker",
    image: "https://ik.imagekit.io/izqq5ffwt/3828838.jpg",
    desc: "A simple and efficient to-do list app to manage daily goals and progress tracking.",
  },
  {
    title: "Weather App",
    image: "https://ik.imagekit.io/izqq5ffwt/3828838.jpg",
    desc: "Displays real-time weather data using OpenWeather API with a minimal interface.",
  },
  {
    title: "Portfolio Website",
    image: "https://ik.imagekit.io/izqq5ffwt/3828838.jpg",
    desc: "A responsive and professional personal portfolio built with React and Vite.",
  },
  {
    title: "Music Player",
    image: "https://ik.imagekit.io/izqq5ffwt/3828838.jpg",
    desc: "A custom-built music player with playlist management and animated UI.",
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
          <div key={index} className="all-project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
