import { profile } from '../data/portfolio/hero'

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer-name">{profile.name}</span>
      <span className="footer-note">
        {profile.location} · {profile.email}
      </span>
    </footer>
  )
}
