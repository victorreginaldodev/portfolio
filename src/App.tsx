import { useEffect, useState } from 'react'
import { FaBars, FaDownload, FaXmark } from 'react-icons/fa6'
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProjectPage from './components/ProjectPage'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { getProjectBySlug } from './content/projects'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contato' },
]

const projectNavLinks = [
  { label: 'Portfólio', href: '#home' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: 'mailto:contato.victordev02@gmail.com' },
]

function getCurrentProjectSlug(hash: string) {
  const normalizedHash = hash.replace(/^#\/?/u, '')

  if (!normalizedHash.startsWith('projetos/')) {
    return null
  }

  const [, slug] = normalizedHash.split('/')

  return slug || null
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState(() => window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
      setIsMenuOpen(false)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const currentProjectSlug = getCurrentProjectSlug(currentHash)
  const currentProject = currentProjectSlug ? getProjectBySlug(currentProjectSlug) : undefined
  const isProjectView = Boolean(currentProject)
  const activeNavLinks = isProjectView ? projectNavLinks : navLinks

  useEffect(() => {
    if (isProjectView) {
      window.scrollTo(0, 0)
    }
  }, [isProjectView, currentProjectSlug])

  return (
    <main className={`landing-shell${isProjectView ? ' project-shell' : ''}`} id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Ir para o inicio">
          <span className="brand-mark">VR</span>
          <span className="brand-copy">
            <strong>Victor Reginaldo</strong>
            <span>Software Engineer</span>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <nav
          id="site-navigation"
          className={`site-nav${isMenuOpen ? ' site-nav-open' : ''}`}
          aria-label="Navegacao principal"
        >
          {activeNavLinks.map(({ label, href }) => (
            <a
              key={label}
              className="nav-link"
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <a
          className={`resume-button${isMenuOpen ? ' resume-button-open' : ''}`}
          href="/Victor-Reginaldo-Curriculo.html"
          download
        >
          <FaDownload aria-hidden="true" />
          <span>Baixar curriculo</span>
        </a>
      </header>

      {isProjectView && currentProject ? (
        <>
          <ProjectPage project={currentProject} />
          <Footer />
        </>
      ) : (
        <>
          <Hero />
          <AboutMe />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  )
}

export default App
