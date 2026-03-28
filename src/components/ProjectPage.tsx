import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { projects, type ProjectEntry } from '../content/projects'
import MarkdownContent from './MarkdownContent'

type ProjectPageProps = {
  project: ProjectEntry
}

function ProjectPage({ project }: ProjectPageProps) {
  const relatedProjects = projects.filter(({ slug }) => slug !== project.slug).slice(0, 2)

  return (
    <article className="project-page">
      <div className="project-breadcrumbs">
        <a href="#projetos" className="project-back-link">
          <FaArrowLeftLong aria-hidden="true" />
          <span>Voltar para projetos</span>
        </a>
        <span className="project-breadcrumb-separator" aria-hidden="true">
          /
        </span>
        <span className="project-breadcrumb-current">{project.title}</span>
      </div>

      <section className="project-hero-panel">
        <div className="project-hero-copy">
          <span className="project-page-kicker">{project.eyebrow}</span>
          <h1 className="project-page-title">{project.title}</h1>
          <p className="project-page-summary">{project.summary}</p>

          <div className="project-page-tags" aria-label="Stack principal do projeto">
            {project.stack.map((item) => (
              <span key={item} className="project-page-tag">
                {item}
              </span>
            ))}
          </div>

          <div className="project-page-actions">
            <a className="secondary-action" href="#projetos">
              <FaArrowLeftLong aria-hidden="true" />
              <span>Explorar outros projetos</span>
            </a>
            <a className="primary-action" href="mailto:contato.victordev02@gmail.com" style={{ color: '#fff' }}>
              <span>Conversar sobre este projeto</span>
              <FaArrowRightLong aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="project-hero-visual">
          <div className="project-hero-image-shell">
            <img className="project-hero-image" src={project.image} alt={project.imageAlt} />
          </div>
        </div>
      </section>

      <section className="project-facts-grid" aria-label="Resumo do projeto">
        {project.facts.map((fact) => (
          <article key={fact.label} className="project-fact-card">
            <span className="project-fact-label">{fact.label}</span>
            <strong className="project-fact-value">{fact.value}</strong>
          </article>
        ))}
      </section>

      <div className="project-content-layout">
        <section className="project-article-card" aria-label={`Descricao detalhada do projeto ${project.title}`}>
          <MarkdownContent markdown={project.markdown} />

          <section className="project-article-footer">
            <span className="project-sidebar-kicker">Outros projetos</span>
            <div className="project-related-list">
              {relatedProjects.map((relatedProject) => (
                <a key={relatedProject.slug} href={`#/projetos/${relatedProject.slug}`} className="project-related-link">
                  <div>
                    <strong>{relatedProject.title}</strong>
                    <p>{relatedProject.eyebrow}</p>
                  </div>
                  <FaArrowRightLong aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>
        </section>
      </div>
    </article>
  )
}

export default ProjectPage
