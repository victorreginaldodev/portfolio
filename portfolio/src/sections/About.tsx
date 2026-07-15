import { SectionHeader } from '../components/SectionHeader'
import { aboutParagraphs, metrics, skillCategories } from '../data/portfolio/about'

export function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <SectionHeader
          label="Sobre"
          title={
            <>
              Desenvolvedor com foco
              <br />
              <em>em resultados.</em>
            </>
          }
        />

        <div className="sobre-grid fade-in">
          <div className="sobre-text">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="sobre-cards">
            {metrics.map((metric) => (
              <div className="sobre-card" key={metric.label}>
                <p className="sobre-card-label">{metric.label}</p>
                <p className="sobre-card-value">{metric.value}</p>
                <p className="sobre-card-desc">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-block">
          <p className="section-label">Stack Técnica</p>
          <div className="skills-grid fade-in">
            {skillCategories.map((category) => (
              <div className="skill-cat" key={category.label}>
                <p className="skill-label">{category.label}</p>
                <div className="skill-items">
                  {category.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <span className={`skill-dot ${skill.tone}`} />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
