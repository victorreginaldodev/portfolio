import {
  SiDocker,
  SiDjango,
  SiFastapi,
  SiGit,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import { FaLayerGroup } from 'react-icons/fa6'
import { TbHierarchy3 } from 'react-icons/tb'

const skills = [
  {
    label: 'Python',
    icon: SiPython,
    background: '#3776AB',
    color: '#FFFFFF',
  },
  {
    label: 'Django',
    icon: SiDjango,
    background: '#0F5B46',
    color: '#FFFFFF',
  },
  {
    label: 'FastAPI',
    icon: SiFastapi,
    background: '#05998B',
    color: '#FFFFFF',
  },
  {
    label: 'React',
    icon: SiReact,
    background: '#0B1F2A',
    color: '#61DAFB',
  },
  {
    label: 'JavaScript',
    icon: SiJavascript,
    background: '#F7DF1E',
    color: '#1B1B1B',
  },
  {
    label: 'TypeScript',
    icon: SiTypescript,
    background: '#3178C6',
    color: '#FFFFFF',
  },
  {
    label: 'MySQL',
    icon: SiMysql,
    background: '#0B6477',
    color: '#FFFFFF',
  },
  {
    label: 'Docker',
    icon: SiDocker,
    background: '#1D63ED',
    color: '#FFFFFF',
  },
  {
    label: 'Git',
    icon: SiGit,
    background: '#F05032',
    color: '#FFFFFF',
  },
  {
    label: 'Engenharia de Software',
    icon: FaLayerGroup,
    background: '#334155',
    color: '#F8FAFC',
  },
  {
    label: 'Arquitetura de Software',
    icon: TbHierarchy3,
    background: '#14532D',
    color: '#F8FAFC',
  },
]

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <span className="skills-kicker">Skills</span>
        <h2 className="skills-title">Tecnologias e fundamentos que fazem parte do meu dia a dia.</h2>
      </div>

      <div className="skills-marquee" aria-label="Lista de skills">
        <div className="skills-track">
          {[...skills, ...skills].map(({ label, icon: Icon, background, color }, index) => (
            <article
              key={`${label}-${index}`}
              className="skill-pill"
              style={{ backgroundColor: background, color }}
              aria-hidden={index >= skills.length ? 'true' : undefined}
            >
              <Icon aria-hidden="true" className="skill-pill-icon" />
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
