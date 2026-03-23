import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

const footerLinks = [
  {
    label: 'Email',
    href: 'mailto:contato.victordev02@gmail.com',
    icon: FaEnvelope,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/seu-usuario',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/seu-link',
    icon: FaLinkedinIn,
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-copy">
        <strong>Victor Reginaldo</strong>
        <p>Software Engineer focado em backend, regras de negócio e sistemas confiáveis.</p>
      </div>

      <div className="site-footer-links" aria-label="Links do rodapé">
        {footerLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            className="site-footer-link"
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={label}
            title={label}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
