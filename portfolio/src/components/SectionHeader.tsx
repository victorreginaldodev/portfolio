import type { ReactNode } from 'react'

type SectionHeaderProps = {
  label: string
  title: ReactNode
  inverted?: boolean
}

export function SectionHeader({
  label,
  title,
  inverted = false,
}: SectionHeaderProps) {
  return (
    <>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      <div className={`section-rule ${inverted ? 'section-rule-muted' : ''}`} />
    </>
  )
}
