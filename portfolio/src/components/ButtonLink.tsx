import type { ReactNode } from 'react'

type ButtonLinkProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
}: ButtonLinkProps) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      {children}
    </a>
  )
}
