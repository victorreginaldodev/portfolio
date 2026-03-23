const aboutParagraphs = [
  'Desenvolvo sistemas focados em resolver problemas reais de negócio, com ênfase em backend e regras mais complexas.',
  'Tenho uma abordagem prática e orientada à execução, buscando me aprofundando no que for necessário, sob demanda — seja arquitetura, negócio ou implementação.',
  'Atuo como cofundador na construção do SSTSuite, uma plataforma SaaS para Saúde e Segurança do Trabalho, onde trabalho desde as regras de negócio até o sistema em produção.',
  'Também tenho experiência profissional no desenvolvimento de sistemas ERP, atuando na organização e automação de rotinas operacionais.',
  'Busco sempre construir sistemas confiáveis, escaláveis e que realmente gerem impacto na operação.',
]

function AboutMe() {
  return (
    <section className="about-section" id="sobre">
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
    </section>
  )
}

export default AboutMe
