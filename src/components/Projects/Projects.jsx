import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/projects.json");
        if (!response.ok) {
          throw new Error("Não foi possível buscar os projetos");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProjects();
  }, []);

  const delay = 300; // Atraso em milissegundos entre cada projeto

  return (
    <section className="card projects">
      <h2 className="subtitle">Projetos</h2>

      <div className="projects__content">
        {projects.map((project, index) => (
          <ProjectWithDelay
            key={project.id}
            project={project}
            delay={index * delay}
          />
        ))}
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
};

const ProjectWithDelay = ({ project, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  if (!isVisible) {
    return null;
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="project"
      data-aos="zoom-in"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-offset="-100"
      data-aos-delay="300"
    >
      <picture>
        <img src={project.image} alt={`Imagem do projeto ${project.name}`} />
      </picture>
      <strong>{project.name}</strong>

      <div>
        {project.tags.map((tag, tagIndex) => (
          <span key={tagIndex}>{tag}</span>
        ))}
      </div>
    </a>
  );
};

ProjectWithDelay.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  delay: PropTypes.number.isRequired,
};

export default Projects;
