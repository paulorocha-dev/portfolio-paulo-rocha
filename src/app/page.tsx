// Import dos componentes
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'
import Navbar from '@/components/Navbar/Navbar'
import Contact from '@/components/Contact/Contact'

// Página principal
export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />
      {/* Seção Sobre Mim */}
      <About />
      {/* Seção de Projetos */} 
      <Projects />
      {/* Seção de Habilidades */}
      <Skills />
      {/* Seção de Contato */}
      <Contact />

    </main>
  )
}