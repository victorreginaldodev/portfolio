import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { pdf } from '@react-pdf/renderer'
import { curriculoProfile } from '../data/curriculo/profile'
import { experience } from '../data/curriculo/experience'
import { education } from '../data/curriculo/education'
import { skillCategories } from '../data/curriculo/skills'
import { differentials } from '../data/curriculo/differentials'
import { languages } from '../data/curriculo/languages'
import { CurriculoDocument } from '../pdf/CurriculoDocument'
import './Curriculo.css'

export function Curriculo() {
  const [searchParams] = useSearchParams()
  const hasAutoDownloaded = useRef(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    setIsGenerating(true)
    try {
      const blob = await pdf(<CurriculoDocument />).toBlob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${curriculoProfile.documentTitle}.pdf`
      link.click()
      URL.revokeObjectURL(url)
    } finally {
      setIsGenerating(false)
    }
  }

  useEffect(() => {
    if (searchParams.get('download') !== '1' || hasAutoDownloaded.current) return

    hasAutoDownloaded.current = true
    void handleDownload()
  }, [searchParams])

  return (
    <div className="cv-page">
      <header className="cv-header">
        <div className="cv-header-left">
          <p className="cv-label">{curriculoProfile.label}</p>
          <h1 className="cv-name">
            {curriculoProfile.name}
            <br />
            <em>{curriculoProfile.nameEm}</em>
          </h1>
          <p className="cv-tagline">{curriculoProfile.tagline}</p>
        </div>
        <div className="cv-header-right">
          <ul className="cv-contact-list">
            <li>{curriculoProfile.location}</li>
            <li>
              <a href={`mailto:${curriculoProfile.email}`}>{curriculoProfile.email}</a>
            </li>
            <li>
              <a href={curriculoProfile.linkedin.href} target="_blank" rel="noreferrer">
                {curriculoProfile.linkedin.label}
              </a>
            </li>
            <li>
              <a href={curriculoProfile.github.href} target="_blank" rel="noreferrer">
                {curriculoProfile.github.label}
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className="cv-body">
        <main>
          <section className="cv-section">
            <p className="cv-section-label">Experiência Profissional</p>

            {experience.map((item, index) => (
              <div key={item.company}>
                <div className="cv-exp-item">
                  <div className="cv-exp-header">
                    <h3 className="cv-exp-role">{item.role}</h3>
                    <span className="cv-exp-period">{item.period}</span>
                  </div>
                  <p className="cv-exp-company">{item.company}</p>
                  <p className="cv-exp-desc">{item.description}</p>
                  <ul className="cv-bullets">
                    {item.bullets.map((bullet, bulletIndex) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                {index < experience.length - 1 && <hr className="cv-exp-divider" />}
              </div>
            ))}
          </section>

          <section className="cv-section">
            <p className="cv-section-label">Formação</p>
            {education.map((item) => (
              <div className="cv-exp-item" key={item.institution}>
                <div className="cv-exp-header">
                  <h3 className="cv-exp-role">{item.role}</h3>
                  <span className="cv-exp-period">{item.period}</span>
                </div>
                <p className="cv-exp-company">{item.institution}</p>
              </div>
            ))}
          </section>
        </main>

        <aside className="cv-sidebar">
          <section className="cv-section">
            <p className="cv-section-label">Stack Técnica</p>
            {skillCategories.map((category) => (
              <div className="cv-sidebar-item" key={category.label}>
                <p className="cv-sidebar-item-title">{category.label}</p>
                <div className="cv-tags">
                  {category.tags.map((tag) => (
                    <span
                      className={`cv-tag ${tag.highlight ? 'cv-tag-highlight' : ''}`}
                      key={tag.name}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="cv-section">
            <p className="cv-section-label">Diferenciais</p>
            {differentials.map((item) => (
              <div className="cv-sidebar-item" key={item.title}>
                <p className="cv-sidebar-item-title">{item.title}</p>
                <p className="cv-sidebar-item-sub">{item.description}</p>
              </div>
            ))}
          </section>

          <section className="cv-section">
            <p className="cv-section-label">Idiomas</p>
            {languages.map((item) => (
              <div className="cv-sidebar-item" key={item.name}>
                <p className="cv-sidebar-item-title">{item.name}</p>
                <p className="cv-sidebar-item-sub">{item.level}</p>
              </div>
            ))}
          </section>
        </aside>
      </div>

      <footer className="cv-footer">
        <span className="cv-footer-note">{curriculoProfile.email}</span>
        <span className="cv-footer-note">{curriculoProfile.footerNote}</span>
      </footer>

      <button
        className="cv-btn-download"
        type="button"
        onClick={handleDownload}
        disabled={isGenerating}
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 10.5L3.5 6.5H6V1.5H9V6.5H11.5L7.5 10.5Z" fill="currentColor" />
          <path d="M2 12.5H13V13.5H2V12.5Z" fill="currentColor" />
        </svg>
        {isGenerating ? 'Gerando PDF…' : 'Baixar PDF'}
      </button>
    </div>
  )
}
