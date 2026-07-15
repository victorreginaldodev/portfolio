import type { ReactNode } from 'react'
import type { LinkItem } from './types'

export type BadgeTone = 'live' | 'dev' | 'internal'

export const projects: {
  name: string
  description: ReactNode
  tags: string[]
  badge: string
  badgeTone: BadgeTone
  links?: LinkItem[]
}[] = [
  {
    name: 'SSTSuite — Sistema de Ergonomia',
    description: (
      <>
        SaaS B2B multi-tenant de avaliações SST — Luminância, AEP, AET e
        Análises Psicossociais. Foco em{' '}
        <strong>automação de relatórios técnicos</strong> extensos e demorados,
        com <strong>redução de 60% no tempo de geração</strong>. Inclui{' '}
        <strong>coleta de dados em campo</strong> via PWA com suporte offline e
        dashboards de análise e riscos identificados. Arquitetura multi-tenant
        com isolamento completo de dados por cliente.
      </>
    ),
    tags: ['Python', 'Django', 'DRF', 'MySQL', 'React', 'Celery', 'PWA'],
    badge: 'Em produção',
    badgeTone: 'live',
  },
  {
    name: 'Portal de Mobilização SST',
    description: (
      <>
        Portal enterprise para mobilização de empresas e colaboradores
        terceirizados em grandes indústrias. Focado no controle e
        gerenciamento de documentação (PGR, PCMSO, LTCAT, ASOs), análise
        automatizada via <strong>IA (OpenAI API)</strong> e dashboards de
        compliance. Projetado para escalar para{' '}
        <strong>+100 mil funcionários terceirizados</strong>. Lidero
        tecnicamente equipe de <strong>2 desenvolvedores</strong>.
      </>
    ),
    tags: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'React', 'OpenAI API'],
    badge: 'Em prototipagem',
    badgeTone: 'dev',
  },
  {
    name: 'Sistema de Ordens de Serviço',
    description: (
      <>
        Sistema interno da <strong>Ergogroup</strong> para gestão da rotina
        administrativa — <strong>em produção</strong> gerenciando operações
        diárias da empresa. Repositório aberto: API REST em{' '}
        <strong>Django REST Framework</strong> (backend) e interface completa
        em <strong>React</strong> (frontend).
      </>
    ),
    tags: ['Python', 'Django', 'DRF', 'React', 'PostgreSQL'],
    badge: 'Em produção',
    badgeTone: 'live',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/victorreginaldodev',
        icon: 'github',
      },
    ],
  },
]
