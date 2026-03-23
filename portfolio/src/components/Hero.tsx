import {
  FaArrowRightLong,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
} from 'react-icons/fa6'
import profilePhoto from '../assets/victor-photo.jpeg'

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="hero-intro">Olá, eu sou</p>
        <h1 className="hero-title">Victor Reginaldo</h1>
        <p className="hero-support">
          Desenvolvo sistemas que resolvem problemas reais de negócios.
        </p>
        <p className="hero-body">
          Sou engenheiro de software com foco em backend e regras de negócios, atuando como
          cofundador do SSTSuite, uma plataforma SaaS para área Saúde e Segurança do Trabalho.
        </p>

        <div className="hero-actions">
          <a className="primary-action" style={{ color: '#fff' }} href="mailto:contato.victordev02@gmail.com">
            <FaEnvelope aria-hidden="true" />
            <span>Entrar em contato</span>
            <FaArrowRightLong aria-hidden="true" />
          </a>

          <a
            className="secondary-action"
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub aria-hidden="true" />
            <span>Ver GitHub</span>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-card">
          <img
            src={profilePhoto}
            alt="Foto de Victor Reginaldo"
            className="portrait-image"
          />

          <div className="portrait-meta">
            <p>Software Engineer, 25 anos, Uberaba-MG, Brasil.</p>
            <div className="portrait-icons" aria-label="Contato rapido">
              <a href="tel:+5534996941992" aria-label="Telefone">
                <FaPhone aria-hidden="true" />
              </a>
              <a href="mailto:contato.victordev02@gmail.com" aria-label="Email">
                <FaEnvelope aria-hidden="true" />
              </a>
              <a
                href="https://github.com/seu-usuario"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/seu-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
