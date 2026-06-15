import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved !== null ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    
    const root = document.documentElement
    if (darkMode) {
      root.style.setProperty('--bg-dark', '#0a0a0f')
      root.style.setProperty('--bg-card', '#1a1a2e')
      root.style.setProperty('--bg-card-hover', '#16213e')
      root.style.setProperty('--text-primary', '#ffffff')
      root.style.setProperty('--text-secondary', '#b8b8d1')
    } else {
      root.style.setProperty('--bg-dark', '#f5f5f5')
      root.style.setProperty('--bg-card', '#ffffff')
      root.style.setProperty('--bg-card-hover', '#f0f0f0')
      root.style.setProperty('--text-primary', '#1a1a1a')
      root.style.setProperty('--text-secondary', '#666666')
    }
  }, [darkMode])

  return (
    <div className="app">
      <div className="bg-animation">
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
      </div>
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
