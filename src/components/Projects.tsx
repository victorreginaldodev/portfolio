import { FaArrowRightLong, FaGithub } from 'react-icons/fa6'

const projects = [
  {
    name: 'Projeto 01',
    imageLabel: 'Preview do projeto 01',
    description: 'Uma apresentação curta do projeto, destacando proposta, contexto e o valor entregue.',
  },
  {
    name: 'Projeto 02',
    imageLabel: 'Preview do projeto 02',
    description: 'Uma apresentação curta do projeto, destacando proposta, contexto e o valor entregue.',
  },
  {
    name: 'Projeto 03',
    imageLabel: 'Preview do projeto 03',
    description: 'Uma apresentação curta do projeto, destacando proposta, contexto e o valor entregue.',
  },
]

function Projects() {
  return (
    <section className="projects-section" id="projetos">
      <div className="projects-header">
        <span className="projects-kicker">Projetos</span>
        <h2 className="projects-title">Projetos pensados para unir clareza visual, contexto e valor real.</h2>
        <p className="projects-subtitle">
          Aqui ficam os espaços dos projetos em destaque, com uma apresentação mais direta, visual e
          preparada para evoluir conforme o portfólio cresce.
        </p>
      </div>

      <div className="projects-grid" aria-label="Lista de projetos">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-preview" aria-label={project.imageLabel}>
              <div className="project-preview-glow" />
              <span className="project-preview-text">Imagem do projeto</span>
            </div>

            <div className="project-card-body">
              <h3 className="project-card-title">{project.name}</h3>
              <p className="project-card-description">{project.description}</p>

              <div className="project-card-actions">
                <button type="button" className="project-icon-button" aria-label={`GitHub do ${project.name}`}>
                  <FaGithub aria-hidden="true" />
                </button>

                <button type="button" className="project-link-button">
                  <span>Saiba mais</span>
                  <FaArrowRightLong aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
