import { Icon } from '../components/Icon'
import { SectionHeader } from '../components/SectionHeader'
import { contactLinks } from '../data/portfolio/contact'

export function Contact() {
  return (
    <section className="section contato-section" id="contato">
      <div className="container">
        <SectionHeader
          inverted
          label="Contato"
          title={
            <>
              Vamos conversar
              <br />
              <em>sobre seu projeto.</em>
            </>
          }
        />

        <div className="contato-grid fade-in">
          {contactLinks.map((contact) => (
            <a
              className="contact-card"
              href={contact.href}
              key={contact.label}
              rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
            >
              <div className="contact-icon">
                <Icon name={contact.icon} />
              </div>
              <p className="contact-label">{contact.label}</p>
              <p className="contact-value">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
