import React from "react";
import "./AllProjects.css";

const allProjects = [
  "E-Commerce Platform",
  "E-Learning Platform",
  "Task Management App",
  "NxtWatch (YouTube Clone)",
  "Jobby App",
  "Food Munch",
  "Todo Tracker",
  "Weather App",
  "Portfolio Website",
  "Music Player",
  "Blog App",
  "Chat Application",
  "Notes App",
  "Netflix Clone",
  "Login System",
  "Calculator App",
  "Responsive Landing Page",
  "News Fetcher App",
  "Quiz Application",
  "Recipe Finder",
];

const AllProjects = () => {
  return (
    <section className="all-projects-section">
      <h2 className="all-projects-heading">All Projects</h2>
      <div className="all-projects-grid">
        {allProjects.map((title, index) => (
          <div key={index} className="all-project-card">
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
