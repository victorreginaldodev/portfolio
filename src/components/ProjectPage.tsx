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

      <header className="project-page-header">
        <span className="project-page-kicker">{project.eyebrow}</span>
        <h1 className="project-page-title">{project.title}</h1>
        <p className="project-page-subtitle">{project.summary}</p>
      </header>

      <div className="project-showcase">
        <div className="project-showcase-image-shell">
          <img className="project-showcase-image" src={project.image} alt={project.imageAlt} />
        </div>
      </div>

      <div className="project-content-layout">
        <header className="project-content-header">
          <span className="project-content-kicker">Exploração</span>
          <h2 className="project-content-title">Detalhamento do projeto</h2>
        </header>

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
