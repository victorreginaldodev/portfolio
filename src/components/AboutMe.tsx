const aboutParagraphs = [
  'Sou engenheiro de software com foco em backend, arquitetura e regras de negócio.',
  'Atuo no desenvolvimento de sistemas e plataformas SaaS voltadas para operações reais, estruturando processos, organizando fluxos e automatizando tarefas críticas.',
  'Tenho experiência construindo soluções completas, desde a modelagem do domínio até a implementação e evolução do produto.',
  'Atualmente, sou cofundador do SSTSuite, uma plataforma para Saúde e Segurança do Trabalho.',
]

const aboutQuotes = [
  {
    label: 'Como eu trabalho hoje',
    text: 'Busco entender o problema de negócio antes de pensar na solução técnica, priorizando clareza, organização e evolução contínua dos sistemas.',
  },
  {
    label: 'Estudo sob demanda',
    text: 'Conduzo meu desenvolvimento técnico a partir das demandas reais do projeto, com foco em aplicação prática e evolução contínua. Estruturo meu aprendizado para gerar impacto imediato, utilizando fontes teóricas como suporte estratégico para aprofundamento e expansão de repertório.',
  },
]

function AboutMe() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-layout">
        <h2 className="about-title">Sobre mim</h2>

        <div className="about-content-grid">
          <div className="about-copy">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <aside className="about-side" aria-label="Como eu trabalho">
              {aboutQuotes.map(({ label, text }) => (
                <div key={label} className="about-side-group">
                  <span className="about-side-title">{label}</span>
                  <blockquote className="about-quote">
                    <span className="about-quote-mark" aria-hidden="true">
                      "
                    </span>
                    <p>{text}</p>
                  </blockquote>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
