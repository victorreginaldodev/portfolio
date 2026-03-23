import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa6'

const socialOptions = [
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

function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-copy">
        <span className="contact-kicker">Contato</span>
        <h2 className="contact-title">
          Vamos conversar sobre produto, backend, arquitetura e software que resolve problema real.
        </h2>
        <p className="contact-body">
          Se você quiser trocar uma ideia sobre projeto, oportunidade ou parceria, aqui estão formas
          diretas de falar comigo.
        </p>

        <div className="contact-message-card">
          <span className="contact-message-kicker">Mensagem direta</span>
          <h3 className="contact-message-title">Escreva uma mensagem rápida</h3>

          <div className="contact-message-fields" aria-label="Modelo de mensagem">
            <div className="contact-field">
              <span className="contact-field-label">Nome</span>
              <span className="contact-field-value">Seu nome</span>
            </div>

            <div className="contact-field">
              <span className="contact-field-label">Email</span>
              <span className="contact-field-value">voce@empresa.com</span>
            </div>

            <div className="contact-field">
              <span className="contact-field-label">Título da mensagem</span>
              <span className="contact-field-value">Assunto do contato</span>
            </div>

            <div className="contact-field contact-field-description">
              <span className="contact-field-label">Descrição</span>
              <span className="contact-field-value">
                Me conte brevemente sobre o projeto, contexto e o que você precisa resolver.
              </span>
            </div>
          </div>
        </div>

        <div className="contact-socials" aria-label="Links profissionais">
          {socialOptions.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              className="contact-social-link"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon aria-hidden="true" />
            </a>
          ))}

          <a
            className="contact-social-link"
            href="mailto:contato.victordev02@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope aria-hidden="true" />
          </a>

          <a
            className="contact-social-link"
            href="tel:+5534996941992"
            aria-label="Telefone"
            title="Telefone"
          >
            <FaPhone aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
