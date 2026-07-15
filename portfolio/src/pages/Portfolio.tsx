import '../App.css'
import { Navbar } from '../components/Navbar'
import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Footer } from '../sections/Footer'
import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Portfolio() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
