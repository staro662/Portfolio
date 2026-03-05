import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalClickSparkSimple from './components/GlobalClickSparkSimple'
import PantheonCaseStudy from './pages/PantheonCaseStudy'
import './index.css'
import './pages/pantheon.css'

createRoot(document.getElementById('pantheon-root')).render(
  <StrictMode>
    <GlobalClickSparkSimple
      sparkColor="#FF1493"
      sparkSize={15}
      sparkRadius={30}
      sparkCount={6}
      duration={800}
      glowEffect={true}
      glowIntensity={0.8}
      className="neon-pulse"
    >
      <PantheonCaseStudy />
    </GlobalClickSparkSimple>
  </StrictMode>,
)
