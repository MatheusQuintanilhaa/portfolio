import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("./projects.json");
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

  return (
    <section className="card projects">
      <h2 className="subtitle">Projetos</h2>

      <div className="projects__content">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project"
          >
            <picture>
              <img
                src={project.image}
                alt={`Imagem do projeto ${project.name}`}
              />
            </picture>
            <strong>{project.name}</strong>

            <div>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
