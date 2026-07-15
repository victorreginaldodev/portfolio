import { profile } from '../data/portfolio/hero'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-name">{profile.name}</span>
        <span className="footer-note">✝ Louvado Seja Nosso Senhor Jesus Cristo</span>
      </div>
    </footer>
  )
}
