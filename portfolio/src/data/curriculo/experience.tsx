import type { ExperienceItem } from './types'

export const experience: ExperienceItem[] = [
  {
    role: 'Desenvolvedor Full-Stack',
    company: 'Ergogroup Medicina e Segurança do Trabalho',
    period: 'Set 2023 — presente',
    description:
      'Responsável pelo desenvolvimento de sistemas internos e produtos SaaS em parceria com a direção. Trabalho em dois modelos: (1) sistemas internos para otimização operacional da empresa, e (2) produtos comerciais desenvolvidos em parceria para o mercado de SST.',
    bullets: [
      <>
        Desenvolveu <strong>ERP completo</strong> integrando módulos comercial,
        técnico e financeiro — sistema <strong>em produção há +1 ano</strong>{' '}
        gerenciando operações diárias da empresa, eliminando 5+ planilhas Excel
        desconexas.
      </>,
      <>
        Construiu sistema de <strong>automação de relatórios técnicos</strong>{' '}
        de ergonomia (AEPs) e laudos de iluminância,{' '}
        <strong>reduzindo tempo de geração em 60%</strong> (processo manual
        para automatizado).
      </>,
      <>
        Responsável técnico pelo{' '}
        <strong>Portal de Gestão SST de Terceirizadas</strong> (projeto com
        equity) — sistema enterprise para indústrias de grande porte, gestão
        de conformidade de <strong>+100 mil funcionários terceirizados</strong>
        . Inclui upload e análise automatizada de documentos via IA (OpenAI
        API) e dashboards de compliance em tempo real. Lidera equipe de{' '}
        <strong>2 desenvolvedores freelancers</strong>.
      </>,
      <>
        Atuou de forma autônoma como <strong>único desenvolvedor</strong> nos
        sistemas internos, responsável por 100% da stack (modelagem de dados,
        desenvolvimento, deploy, sustentação em produção).
      </>,
      <>
        Stack:{' '}
        <strong>
          Python, Django, Django REST Framework, FastAPI, PostgreSQL, MySQL,
          React, OpenAI API, Celery, Docker.
        </strong>
      </>,
    ],
  },
  {
    role: 'Co-founder & Desenvolvedor Principal',
    company: 'SSTSuite — SaaS de Saúde e Segurança do Trabalho',
    period: 'Jan 2023 — presente',
    description:
      'Sociedade em processo de formalização com foco em produtos SaaS para o segmento de SST. Responsável por 100% do desenvolvimento técnico — da arquitetura ao deploy.',
    bullets: [
      <>
        Plataforma SaaS multi-tenant de avaliações SST automatizadas.{' '}
        <strong>30+ clientes ativos em produção</strong> (desde Set 2023)
        gerando relatórios técnicos automatizados diariamente.
      </>,
      <>
        Sistema multi-tenant com isolamento completo de dados por cliente,
        arquitetura escalável e APIs REST para integrações.
      </>,
      <>
        Responsável por: arquitetura de software, modelagem de dados,
        desenvolvimento full-stack, deploy, sustentação e evolução contínua do
        produto.
      </>,
      <>
        Stack:{' '}
        <strong>
          Python, Django, Django REST Framework, FastAPI, PostgreSQL, React,
          Docker.
        </strong>
      </>,
    ],
  },
]
