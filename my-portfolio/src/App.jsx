import { LanguageProvider } from './contexts/LanguageContext'
import GlobalClickSparkSimple from './components/GlobalClickSparkSimple'
import GlobalParticlesBackground from './components/GlobalParticlesBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <GlobalParticlesBackground />
      <GlobalClickSparkSimple
        sparkColor='#FF1493'
        sparkSize={15}
        sparkRadius={30}
        sparkCount={6}
        duration={800}
        glowEffect={true}
        glowIntensity={0.8}
        className="neon-pulse"
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />

        <Footer />
      </GlobalClickSparkSimple>
    </LanguageProvider>
  )
}

export default App
