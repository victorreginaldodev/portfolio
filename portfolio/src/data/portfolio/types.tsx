export type SocialName = 'github' | 'linkedin' | 'mail' | 'whatsapp'

export type LinkItem = {
  label: string
  href: string
  icon: SocialName
  value?: string
}
