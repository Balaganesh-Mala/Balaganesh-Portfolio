import React from "react";
import "./Skills.css";

const Skills = () => {
  const frontend = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "Bootstrap", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 90 },
    { name: "Flexbox", level: 90 },
  ];

  const backend = [
    { name: "Node.js", level: 70 },
    { name: "MongoDB", level: 80 },
    { name: "SQL", level: 80 },
    { name: "Python", level: 60 },
    { name: "Git", level: 70 },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div key={index} className="skill-item">
        <div className="skill-header">
          <span className="skill-name">{skill.name}</span>
          <span className="skill-level">{skill.level}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ));

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-card-container">
        <div className="skills-card">
          <h3 className="card-title">Frontend Technologies</h3>
          {renderSkills(frontend)}
        </div>

        <div className="skills-card">
          <h3 className="card-title">Backend & Database</h3>
          {renderSkills(backend)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
