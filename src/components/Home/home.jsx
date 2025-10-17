import "./home.css";


const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="info-container">
        <h1 className="name">
          Bala Ganesh <span>Mala</span>
        </h1>
        <p className="location">
          Aspiring MERN Stack Developer | CCBPian at NxtWave | Python, SQL,
          React JS
        </p>
        <div className="btn-container">
          <button className="btn btn-orange">Hire Me</button>
          <button className="btn btn-border">Download Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
