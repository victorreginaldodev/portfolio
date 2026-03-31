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
import { downloadResumePdf } from './utils/downloadResumePdf'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contato' },
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
  const [isDownloadingResume, setIsDownloadingResume] = useState(false)

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

  useEffect(() => {
    if (isProjectView) {
      window.scrollTo(0, 0)
    }
  }, [isProjectView, currentProjectSlug])

  async function handleResumeDownload() {
    if (isDownloadingResume) {
      return
    }

    setIsDownloadingResume(true)

    try {
      await downloadResumePdf()
      setIsMenuOpen(false)
    } catch (error) {
      console.error('Erro ao gerar PDF do curriculo:', error)
      window.alert('Nao foi possivel gerar o PDF do curriculo agora. Tente novamente em instantes.')
    } finally {
      setIsDownloadingResume(false)
    }
  }

  return (
    <main className={`landing-shell${isProjectView ? ' project-shell' : ''}`} id="home">
      {!isProjectView && (
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
            {navLinks.map(({ label, href }) => (
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

          <button
            type="button"
            className={`resume-button${isMenuOpen ? ' resume-button-open' : ''}`}
            onClick={handleResumeDownload}
            disabled={isDownloadingResume}
          >
            <FaDownload aria-hidden="true" />
            <span>{isDownloadingResume ? 'Gerando PDF...' : 'Baixar curriculo'}</span>
          </button>
        </header>
      )}

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
