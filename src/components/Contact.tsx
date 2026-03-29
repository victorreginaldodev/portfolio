import { FaEnvelope, FaPhone } from 'react-icons/fa6'

const contactOptions = [
  {
    label: 'Email',
    value: 'contato.victordev02@gmail.com',
    hint: 'Para projetos, oportunidades e parcerias.',
    href: 'mailto:contato.victordev02@gmail.com',
    icon: FaEnvelope,
  },
  {
    label: 'Telefone',
    value: '+55 34 99694-1992',
    hint: 'Contato direto para conversas rápidas e objetivas.',
    href: 'tel:+5534996941992',
    icon: FaPhone,
  },
]

function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-copy">
        <h2 className="contact-title">Contato</h2>
        <p className="contact-body">
          Se você quiser trocar uma ideia sobre projeto, oportunidade ou parceria, aqui estão os
          canais mais diretos para falar comigo.
        </p>

        <div className="contact-links" aria-label="Canais de contato">
          {contactOptions.map(({ label, value, hint, href, icon: Icon }) => (
            <a
              key={value}
              className="contact-link-card"
              href={href}
              aria-label={label}
              title={value}
            >
              <span className="contact-link-icon">
                <Icon aria-hidden="true" />
              </span>

              <span className="contact-link-content">
                <span className="contact-link-label">{label}</span>
                <strong className="contact-link-value">{value}</strong>
                <span className="contact-link-hint">{hint}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
