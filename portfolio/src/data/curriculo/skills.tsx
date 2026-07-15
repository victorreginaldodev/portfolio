import type { SkillCategory } from './types'

export const skillCategories: SkillCategory[] = [
  {
    label: 'Backend',
    tags: [
      { name: 'Python', highlight: true },
      { name: 'Django', highlight: true },
      { name: 'DRF' },
      { name: 'FastAPI' },
    ],
  },
  {
    label: 'Dados',
    tags: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'MySQL', highlight: true },
      { name: 'SQLite' },
      { name: 'Modelagem relacional' },
    ],
  },
  {
    label: 'Frontend & Interface',
    tags: [
      { name: 'React', highlight: true },
      { name: 'JavaScript' },
      { name: 'HTML/CSS' },
      { name: 'PWA' },
    ],
  },
  {
    label: 'Ferramentas & DevOps',
    tags: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Linux' },
      { name: 'APIs REST' },
    ],
  },
  {
    label: 'IA & Automação',
    tags: [
      { name: 'OpenAI API' },
      { name: 'RAG' },
      { name: 'Análise documental' },
    ],
  },
]
