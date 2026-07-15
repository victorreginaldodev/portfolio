import profilePhoto from '../assets/foto-perfil.jpeg'
import { ButtonLink } from '../components/ButtonLink'
import { Icon } from '../components/Icon'
import { profile, socials } from '../data/portfolio/hero'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <p className="hero-label">{profile.role}</p>
          <h1 className="hero-name">
            Victor Reginaldo
            <br />
            <em>Silva e Silva</em>
          </h1>
          <p className="hero-sub">{profile.intro}</p>
          <div className="hero-actions">
            <ButtonLink href="#projetos">Ver projetos</ButtonLink>
            <ButtonLink href="#contato" variant="secondary">
              Entrar em contato
            </ButtonLink>
          </div>
          <div className="hero-social" aria-label="Links sociais">
            {socials.map((social) => (
              <a
                className="social-link"
                href={social.href}
                key={social.label}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                title={social.label}
              >
                <Icon name={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-avatar">
          <img src={profilePhoto} alt="Victor Reginaldo" />
        </div>
      </div>
    </section>
  )
}
