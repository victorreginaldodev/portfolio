import type { ReactNode } from 'react'

export const aboutParagraphs: ReactNode[] = [
  <>
    Desenvolvedor full-stack com foco em{' '}
    <strong>backend Python/Django</strong>. Gosto de sistemas que resolvem
    problemas reais: bem modelados, fáceis de manter e que aguentam crescer.
  </>,
  <>
    Atuo na <strong>Ergogroup</strong> desenvolvendo a plataforma{' '}
    <strong>SSTSuite</strong> — sistemas de avaliação SST usados por empresas
    do segmento diariamente. Tenho experiência com arquitetura{' '}
    <strong>multi-tenant e isolamento de dados por cliente</strong>, APIs REST,
    frontend em React, deploy e sustentação em produção. Desenvolvi também a
    solução de <strong>coleta de dados em campo</strong> — PWA com suporte
    offline — eliminando uma dor operacional crítica da empresa.
  </>,
  <>
    Nos últimos 3 anos: sistemas entregues e em produção, automação que
    eliminou <strong>60% do tempo de geração de relatórios técnicos</strong>,
    e liderança técnica no desenvolvimento de um portal enterprise projetado
    para escalar para{' '}
    <strong>+100 mil funcionários terceirizados</strong>.
  </>,
]

export const metrics = [
  {
    label: 'Redução de tempo',
    value: '60%',
    description: 'Geração de relatórios técnicos',
  },
  {
    label: 'Funcionários',
    value: '100k+',
    description: 'Escopo do portal enterprise',
  },
  {
    label: 'Experiência',
    value: '+3 anos',
    description: 'Entregando em produção',
  },
]

export const skillCategories = [
  {
    label: 'Backend',
    skills: [
      { name: 'Python', tone: 'python' },
      { name: 'Django', tone: 'highlight' },
      { name: 'Django REST Framework', tone: 'highlight' },
      { name: 'FastAPI', tone: 'neutral' },
    ],
  },
  {
    label: 'Banco de Dados',
    skills: [
      { name: 'PostgreSQL', tone: 'postgres' },
      { name: 'MySQL', tone: 'mysql' },
      { name: 'SQLite', tone: 'neutral' },
      { name: 'Modelagem relacional', tone: 'neutral' },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React', tone: 'react' },
      { name: 'JavaScript', tone: 'javascript' },
      { name: 'HTML / CSS', tone: 'neutral' },
    ],
  },
  {
    label: 'DevOps & Ferramentas',
    skills: [
      { name: 'Docker', tone: 'docker' },
      { name: 'Git', tone: 'git' },
      { name: 'Linux', tone: 'neutral' },
      { name: 'APIs REST', tone: 'neutral' },
    ],
  },
  {
    label: 'IA & Automação',
    skills: [
      { name: 'OpenAI API', tone: 'accent' },
      { name: 'RAG', tone: 'accent' },
      { name: 'Embeddings', tone: 'accent' },
      { name: 'Análise documental', tone: 'accent' },
    ],
  },
]
