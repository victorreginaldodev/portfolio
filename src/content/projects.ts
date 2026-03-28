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
  cardStack?: string[]
  image: string
  imageAlt: string
  markdown: string
  facts: Array<{ label: string; value: string }>
  stack: string[]
}

function stripLeadingImage(markdown: string) {
  return markdown.replace(/^!\[[^\]]*\]\([^)]+\)\s*\n+/u, '').trim()
}

export const projects: ProjectEntry[] = [
  {
    slug: 'sstsuite',
    title: 'SSTSuite',
    eyebrow: 'SaaS / SST / Produto',
    summary:
      'Plataforma SaaS para estruturar avaliações técnicas, análise de riscos ocupacionais e geração de documentos em Saúde e Segurança do Trabalho.',
    cardSummary:
      'Produto central para a operação em SST, conectando avaliações, riscos e documentação técnica em um único fluxo.',
    image: sstsuiteImage,
    imageAlt: 'Tela ilustrativa do projeto SSTSuite',
    markdown: stripLeadingImage(sstsuiteMarkdown),
    facts: [
      { label: 'Formato', value: 'Produto SaaS orientado a domínio' },
      { label: 'Domínio', value: 'Saúde e Segurança do Trabalho' },
      { label: 'Entrega', value: 'Avaliações, riscos e documentos técnicos' },
    ],
    cardStack: ['Python', 'Django', 'React', 'MySQL'],
    stack: ['Python', 'Django', 'MySQL', 'React', 'TypeScript', 'python-docx'],
  },
  {
    slug: 'erp-system-operation',
    title: 'ERP System Operation',
    eyebrow: 'ERP / Operações / Financeiro',
    summary:
      'ERP desenvolvido para centralizar vendas, operação técnica e financeiro, reduzindo planilhas paralelas e organizando o fluxo completo da empresa.',
    cardSummary:
      'Sistema que integrou comercial, área técnica e financeiro em uma mesma plataforma com regras de negócio consistentes.',
    image: erpImage,
    imageAlt: 'Tela ilustrativa do projeto ERP System Operation',
    markdown: stripLeadingImage(erpMarkdown),
    facts: [
      { label: 'Formato', value: 'ERP interno com módulos operacionais' },
      { label: 'Domínio', value: 'Vendas, execução de serviços e faturamento' },
      { label: 'Entrega', value: 'Fluxo integrado da venda à nota fiscal' },
    ],
    cardStack: ['Python', 'Django', 'React', 'MySQL'],
    stack: ['Python', 'Django', 'React', 'TypeScript', 'MySQL', 'APIs fiscais'],
  },
  {
    slug: 'ergonomia-ergogroup',
    title: 'Ergonomia Ergogroup',
    eyebrow: 'SST / Automação técnica / Relatórios',
    summary:
      'Sistema técnico-operacional para automatizar análises ergonômicas preliminares e relatórios de iluminância com padronização e escala.',
    cardSummary:
      'Plataforma focada na geração estruturada de relatórios técnicos complexos para ergonomia e SST.',
    image: ergonomiaImage,
    imageAlt: 'Tela ilustrativa do projeto Ergonomia Ergogroup',
    markdown: stripLeadingImage(ergonomiaMarkdown),
    facts: [
      { label: 'Formato', value: 'Plataforma técnica com fluxos especializados' },
      { label: 'Domínio', value: 'Ergonomia, AEP e iluminância' },
      { label: 'Entrega', value: 'Coleta estruturada e relatórios automatizados' },
    ],
    stack: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'python-docx', 'OpenXML'],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
