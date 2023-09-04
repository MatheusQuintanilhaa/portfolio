const Projects = () => {
  return (
    <section className="card projects">
      <h2 className="subtitle">Projetos</h2>

      <div className="projects__content">
        <a
          href="https://github.com/MatheusQuintanilhaa/Dash-Dine-App"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <picture>
            <img
              src="../../../src/assets/dashdine.png"
              alt="DashDine project app"
            />
          </picture>
          <strong>Dash Dine delivery App</strong>

          <div>
            <span>React JS</span>
            <span>Tailwind CSS</span>
            <span>Splide</span>
          </div>
        </a>
        <a
          href="https://github.com/MatheusQuintanilhaa/Projeto-Portfolio-Joao-Lemon-UX-UI"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <picture>
            <img
              src="../../../src/assets/joaolemon.png"
              alt="DashDine project app"
            />
          </picture>
          <strong>João Lemon UX-UI Portfolio</strong>

          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </a>
        <a
          href="https://github.com/MatheusQuintanilhaa/Metaverse"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <picture>
            <img
              src="../../../src/assets/metaverse.png"
              alt="DashDine project app"
            />
          </picture>
          <strong>Metaversus</strong>

          <div>
            <span>React JS</span>
            <span>Tailwind CSS</span>
            <span>Framer Motion</span>
          </div>
        </a>
        <a
          href="https://github.com/MatheusQuintanilhaa/Flight-Booking-Website"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <picture>
            <img
              src="../../../src/assets/flyAgency.png"
              alt="DashDine project app"
            />
          </picture>
          <strong>Dash Dine delivery App</strong>

          <div>
            <span>React JS</span>
            <span>SASS</span>
            <span>Core JS</span>
          </div>
        </a>
        <a
          href="https://github.com/MatheusQuintanilhaa/Bistro-cafe"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <picture>
            <img
              src="../../../src/assets/bistroCafe.png"
              alt="Bistro Cafe project app"
            />
          </picture>
          <strong>Bistro Cafe</strong>

          <div>
            <span>React JS</span>
            <span>Tailwind CSS</span>
            <span>Framer Motion</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
