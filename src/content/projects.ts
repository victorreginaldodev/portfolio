import ergonomiaImage from '../../docs/projetos/img/ergonomia-ergogroup.png'
import erpImage from '../../docs/projetos/img/erp-system-operation.png'
import sstsuiteImage from '../../docs/projetos/img/sstsuite.png'
import ergonomiaMarkdown from '../../docs/projetos/ergonimia-ergogroup.md?raw'
import erpMarkdown from '../../docs/projetos/erp-system-operation.md?raw'
import sstsuiteMarkdown from '../../docs/projetos/sstsuite.md?raw'

export type ProjectEntry = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  cardSummary: string
  featuredLabel?: string
  cardStack?: string[]
  image: string
  imageAlt: string
  markdown: string
  facts: Array<{ label: string; value: string }>
  stack: string[]
}

function stripLeadingProjectIntro(markdown: string) {
  return markdown
    .replace(/^!\[[^\]]*\]\([^)]+\)\s*\n+/u, '')
    .replace(/^[\s\S]*?(?=##\s)/u, '')
    .trim()
}

export const projects: ProjectEntry[] = [
  {
    slug: 'sstsuite',
    title: 'SSTSuite',
    eyebrow: 'SaaS / SST / Produto',
    summary:
      'Plataforma SaaS para a área de Saúde e Segurança do Trabalho (SST), voltada à estruturação de avaliações técnicas, análise de riscos ocupacionais e automação da geração de documentos técnicos.',
    cardSummary:
      'Plataforma SaaS para Saúde e Segurança do Trabalho, conectando avaliações técnicas, análise de riscos e geração de documentos em um fluxo único.',
    featuredLabel: 'Projeto principal',
    image: sstsuiteImage,
    imageAlt: 'Tela ilustrativa do projeto SSTSuite',
    markdown: stripLeadingProjectIntro(sstsuiteMarkdown),
    facts: [
      { label: 'Formato', value: 'Produto SaaS orientado a domínio' },
      { label: 'Domínio', value: 'Saúde e Segurança do Trabalho' },
      { label: 'Entrega', value: 'Avaliações, riscos e documentos técnicos' },
    ],
    cardStack: ['Python', 'Django', 'React', 'TypeScript', 'MySQL'],
    stack: ['Python', 'Django', 'MySQL', 'React', 'TypeScript', 'python-docx'],
  },
  {
    slug: 'erp-system-operation',
    title: 'ERP',
    eyebrow: 'ERP / Operações / Financeiro',
    summary:
      'ERP desenvolvido para centralizar vendas, operação técnica e financeiro, reduzindo planilhas paralelas e organizando o fluxo completo da empresa.',
    cardSummary:
      'Sistema ERP que integrou comercial, área técnica e financeiro em uma única plataforma, estruturando fluxos e regras de negócio da operação.',
    image: erpImage,
    imageAlt: 'Tela ilustrativa do projeto ERP System Operation',
    markdown: stripLeadingProjectIntro(erpMarkdown),
    facts: [
      { label: 'Formato', value: 'ERP interno com módulos operacionais' },
      { label: 'Domínio', value: 'Vendas, execução de serviços e faturamento' },
      { label: 'Entrega', value: 'Fluxo integrado da venda à nota fiscal' },
    ],
    cardStack: ['Python', 'Django', 'React', 'JavaScript', 'MySQL'],
    stack: ['Python', 'Django', 'React', 'JavaScript', 'MySQL', 'APIs fiscais'],
  },
  {
    slug: 'ergonomia-ergogroup',
    title: 'Ergonomia Ergogroup',
    eyebrow: 'SST / Automação técnica / Relatórios',
    summary:
      'Sistema técnico-operacional para automatizar análises ergonômicas preliminares e relatórios de iluminância com padronização e escala.',
    cardSummary:
      'Plataforma voltada à automação de Análises Ergonômicas Preliminares (AEP - NR-17) e Relatórios de Iluminância (NHO-11), com geração técnica padronizada para SST.',
    image: ergonomiaImage,
    imageAlt: 'Tela ilustrativa do projeto Ergonomia Ergogroup',
    markdown: stripLeadingProjectIntro(ergonomiaMarkdown),
    facts: [
      { label: 'Formato', value: 'Plataforma técnica com fluxos especializados' },
      { label: 'Domínio', value: 'Ergonomia, AEP e iluminância' },
      { label: 'Entrega', value: 'Coleta estruturada e relatórios automatizados' },
    ],
    cardStack: ['Python', 'Django', 'HTML', 'CSS', 'MySQL'],
    stack: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'python-docx', 'OpenXML'],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
