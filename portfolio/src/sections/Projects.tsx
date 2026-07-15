import { Icon } from '../components/Icon'
import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/portfolio/projects'

export function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <SectionHeader
          label="Trabalhos"
          title={
            <>
              Projetos em
              <br />
              <em>destaque.</em>
            </>
          }
        />

        <div className="projects-list fade-in">
          {projects.map((project, index) => (
            <article className="project-item" key={project.name}>
              <div className="project-num">{String(index + 1).padStart(2, '0')}</div>

              <div className="project-body">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-meta">
                <span className={`project-badge ${project.badgeTone}`}>
                  {project.badge}
                </span>
                {project.links ? (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        className="project-link-icon"
                        href={link.href}
                        key={link.label}
                        rel="noreferrer"
                        target="_blank"
                        title={link.label}
                      >
                        <Icon name={link.icon} />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
