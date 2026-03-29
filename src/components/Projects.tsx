import type { CSSProperties } from 'react'
import { FaArrowRightLong, FaLayerGroup } from 'react-icons/fa6'
import { TbHierarchy3 } from 'react-icons/tb'
import {
  SiCss,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import { projects } from '../content/projects'

const techStyles = {
  Python: { icon: SiPython, background: '#3776AB', color: '#FFFFFF' },
  Django: { icon: SiDjango, background: '#0F5B46', color: '#FFFFFF' },
  FastAPI: { icon: SiFastapi, background: '#05998B', color: '#FFFFFF' },
  React: { icon: SiReact, background: '#0B1F2A', color: '#61DAFB' },
  JavaScript: { icon: SiJavascript, background: '#F7DF1E', color: '#1B1B1B' },
  TypeScript: { icon: SiTypescript, background: '#3178C6', color: '#FFFFFF' },
  MySQL: { icon: SiMysql, background: '#0B6477', color: '#FFFFFF' },
  Docker: { icon: SiDocker, background: '#1D63ED', color: '#FFFFFF' },
  Git: { icon: SiGit, background: '#F05032', color: '#FFFFFF' },
  HTML: { icon: SiHtml5, background: '#E34F26', color: '#FFFFFF' },
  CSS: { icon: SiCss, background: '#1572B6', color: '#FFFFFF' },
  'Engenharia de Software': { icon: FaLayerGroup, background: '#334155', color: '#F8FAFC' },
  'Arquitetura de Software': { icon: TbHierarchy3, background: '#14532D', color: '#F8FAFC' },
} as const

function Projects() {
  return (
    <section className="projects-section" id="projetos">
      <div className="projects-header">
        <h2 className="projects-title">Projetos reais em produção</h2>
        <p className="projects-subtitle">
          Sistemas desenvolvidos do zero, com usuários ativos, conectando produto, regras de
          negócio e operação.
        </p>
      </div>

      <div className="projects-grid" aria-label="Lista de projetos">
        {projects.map((project) => (
          <article
            key={project.slug}
            className={`project-card${project.featuredLabel ? ' project-card-featured' : ''}`}
          >
            <div className="project-preview">
              <img className="project-preview-media" src={project.image} alt={project.imageAlt} />
              <div className="project-preview-overlay" />
              <div className="project-preview-meta">
                <span className="project-preview-kicker">{project.eyebrow}</span>
                {project.featuredLabel ? (
                  <span className="project-preview-highlight">{project.featuredLabel}</span>
                ) : null}
              </div>
            </div>

            <div className="project-card-body">
              <div className="project-card-copy">
                <div className="project-card-heading">
                  <h3 className="project-card-title">{project.title}</h3>
                  <span className="project-card-status">Em produção</span>
                </div>
                <p className="project-card-description">{project.cardSummary}</p>
              </div>

              <div className="project-card-footer">
                <div
                  className="project-card-tags"
                  aria-label={`Stack principal do projeto ${project.title}`}
                >
                  {(project.cardStack ?? project.stack.slice(0, 4)).map((item) => {
                    const techStyle = techStyles[item as keyof typeof techStyles]
                    const Icon = techStyle?.icon

                    return (
                      <span
                        key={item}
                        className="project-card-tag"
                        style={
                          {
                            '--project-tag-accent': techStyle?.background ?? 'rgba(255, 255, 255, 0.12)',
                            '--project-tag-color': techStyle?.color ?? 'var(--text-title)',
                          } as CSSProperties
                        }
                      >
                        {Icon ? (
                          <span className="project-card-tag-icon-shell">
                            <Icon aria-hidden="true" className="project-card-tag-icon" />
                          </span>
                        ) : null}
                        <span>{item}</span>
                      </span>
                    )
                  })}
                </div>

                <div className="project-card-actions">
                  <a className="project-link-button" href={`#/projetos/${project.slug}`}>
                    <span>Ver detalhes do projeto</span>
                    <FaArrowRightLong aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
