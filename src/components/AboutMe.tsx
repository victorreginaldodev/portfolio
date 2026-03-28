const aboutParagraphs = [
  'Minha atuação vai além de escrever código: eu entro no problema, entendo a operação e transformo regra de negócio em sistema confiável.',
  'Como cofundador do SSTSuite, participo da construção do produto com visão de arquitetura, contexto e execução.',
  'Também trago experiência no desenvolvimento de sistemas ERP, lidando com processos que exigem clareza, consistência e responsabilidade técnica.',
  'Gosto de trabalhar onde software precisa sustentar decisão real, rotina real e crescimento real.',
]

function AboutMe() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-layout">
        <div className="about-header">
          <span className="about-kicker">Sobre mim</span>
          <h2 className="about-title">
            Desenvolvo software focado em resolver problemas reais.
          </h2>
        </div>

        <div className="about-story">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMe
