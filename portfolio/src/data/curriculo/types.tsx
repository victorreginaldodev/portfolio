import type { ReactNode } from 'react'

export type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
  bullets: ReactNode[]
}

export type EducationItem = {
  role: string
  institution: string
  period: string
}

export type SkillTag = {
  name: string
  highlight?: boolean
}

export type SkillCategory = {
  label: string
  tags: SkillTag[]
}

export type Differential = {
  title: string
  description: string
}

export type LanguageItem = {
  name: string
  level: string
}
