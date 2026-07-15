import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="nav" aria-label="Navegação principal">
      <div className="nav-inner">
        <a className="nav-logo" href="#" onClick={closeMenu}>
          Victor <span>Reginaldo</span>
        </a>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="menu-principal">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              className="nav-cv"
              to="/curriculo?download=1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Baixar CV
            </Link>
          </li>
        </ul>

        <button
          className={`nav-menu-btn ${isOpen ? 'open' : ''}`}
          type="button"
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
