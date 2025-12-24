import "./home.css";
import { useEffect, useRef } from "react";
import profilePic from "../../assets/profileIMG.jpg";

const Home = () => {
  const isRunning = useRef(false); // Prevent double execution (React strict mode)

  useEffect(() => {
    if (isRunning.current) return;
    isRunning.current = true;

    const roles = [
      "Full Stack Developer",
      "MERN Stack Developer",
      "React.js Developer",
      "Node.js Developer",
      "UI/UX Enthusiast",
    ];

    let index = 0;
    let charIndex = 0;
    const typingSpeed = 100;

    const textElement = document.querySelector(".text");
    if (!textElement) return;

    function typingEffect() {
      if (charIndex < roles[index].length) {
        textElement.textContent += roles[index][charIndex];
        charIndex++;
        setTimeout(typingEffect, typingSpeed);
      } else {
        setTimeout(eraseEffect, 1200);
      }
    }

    function eraseEffect() {
      if (charIndex > 0) {
        textElement.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
      } else {
        index = (index + 1) % roles.length;
        setTimeout(typingEffect, 300);
      }
    }

    typingEffect();
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-left">
        <h1 className="title">
          Hi, I'm <span className="orange">Bala Ganesh Mala</span>
        </h1>

        <h2 className="typing">
          <span className="text"></span>
          <span className="cursor">|</span>
        </h2>

        <p className="description">
          MERN Stack Developer crafting fast, responsive, and scalable web
          applications with clean UI and smooth user experience.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Hire Me</button>

          <a
            href="/resume.pdf"
            download="Bala-Ganesh-Resume.pdf"
            className="btn-outline"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-wrapper">
          {/* Profile Image */}
          <img src={profilePic} alt="Profile" className="hero-img" />

          {/* Floating Icons */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
            className="float-icon icon1"
            alt="HTML"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
            className="float-icon icon2"
            alt="CSS"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            className="float-icon icon3"
            alt="JavaScript"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            className="float-icon icon4"
            alt="React"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            className="float-icon icon5"
            alt="Node.js"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
