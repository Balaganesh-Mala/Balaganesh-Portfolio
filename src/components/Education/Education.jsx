import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="education-heading">Learning Journey & Experience</h2>

      <div className="timeline">

        {/* Internship Experience */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Full Stack Developer Intern</h3>
            <p className="timeline-date">Oct 2025 - Dec 2025</p>
            <p>
              Completed a 2-month internship working on real-world MERN stack
              projects including e-commerce, inventory modules, OTP login,
              Shiprocket integration, and production-ready API development.
            </p>
          </div>
        </div>

        {/* Frontend */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Frontend Technologies</h3>
            <p className="timeline-date">Dec 2024 - May 2025</p>
            <p>
              Learned HTML, CSS, Bootstrap, Flexbox, JavaScript, and React.js.
              Built multiple responsive and modern UI projects.
            </p>
          </div>
        </div>

        {/* Database */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Database</h3>
            <p className="timeline-date">May 2025 - July 2025</p>
            <p>
              Mastered SQL and MongoDB for data modeling, queries, and seamless
              integration with backend systems.
            </p>
          </div>
        </div>

        {/* Backend */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Backend Technologies</h3>
            <p className="timeline-date">July 2025 - Oct 2025</p>
            <p>
              Developed backend REST APIs using Node.js and Express.js, and
              improved full-stack integration with databases and frontend apps.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
