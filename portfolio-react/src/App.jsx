import { useRef } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Developer from './components/Developer'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Drummer from './components/Drummer'
import Mentalist from './components/Mentalist'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const rootRef = useRef(null)
  useReveal(rootRef)

  return (
    <div ref={rootRef} className="bg-white text-text font-body overflow-x-hidden">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Developer />
      <Projects />
      <Skills />
      <Experience />
      <Drummer />
      <Mentalist />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
