import type { ExperienceItem } from './types'

export const experience: ExperienceItem[] = [
  {
    role: 'Desenvolvedor Full-Stack',
    company: 'Ergogroup Medicina e Segurança do Trabalho',
    period: 'Jan 2023 — presente',
    description:
      'Desenvolvedor responsável pelos produtos SaaS da marca SSTSuite e pelos sistemas internos da empresa. Atuação com autonomia técnica completa — da arquitetura ao deploy e sustentação em produção.',
    bullets: [
      <>
        Desenvolvedor principal da plataforma <strong>SSTSuite</strong> — SaaS
        B2B multi-tenant de avaliações SST (AEP, AET, Luminância, Análises
        Psicossociais) com <strong>arquitetura multi-tenant</strong> e
        isolamento completo de dados por cliente.
      </>,
      <>
        Construiu sistema de{' '}
        <strong>automação de relatórios técnicos</strong> extensos,{' '}
        <strong>reduzindo o tempo de geração em 60%</strong> — processo
        anteriormente manual, hoje completamente automatizado.
      </>,
      <>
        Desenvolveu solução de{' '}
        <strong>coleta de dados em campo via PWA com suporte offline</strong>,
        eliminando dependência de conectividade em ambientes industriais e
        resolvendo uma dor operacional crítica da empresa.
      </>,
      <>
        Lidera tecnicamente o desenvolvimento do{' '}
        <strong>Portal de Mobilização SST</strong> — sistema enterprise para
        controle de documentação (PGR, PCMSO, LTCAT, ASOs) de{' '}
        <strong>+100 mil funcionários terceirizados</strong>, com análise
        automatizada via <strong>IA (OpenAI API)</strong>. Coordena equipe de{' '}
        <strong>2 desenvolvedores</strong> (arquitetura, code review, roadmap).
      </>,
      <>
        Desenvolveu <strong>ERP interno completo</strong> integrando módulos
        comercial, técnico e financeiro —{' '}
        <strong>em produção há +1 ano</strong>, eliminando 5+ planilhas Excel
        desconexas e centralizando as operações diárias da empresa.
      </>,
      <>
        Stack:{' '}
        <strong>
          Python, Django, Django REST Framework, FastAPI, PostgreSQL, MySQL,
          React, PWA, OpenAI API, Celery, Docker, Linux.
        </strong>
      </>,
    ],
  },
]
