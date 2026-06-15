import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const titles = [
    'Full Stack Developer & Blockchain Enthusiast',
    'Web3 & Smart Contract Developer',
    'Frontend Developer & UI Designer',
    'Bot Developer & Automation Expert',
    'Game Developer & Lua Scripter',
    'Reverse Engineer & Security Researcher'
  ]

  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Raden Salman Al Faridzi</h1>
          <p className="hero-tagline">
            <span className="rotating-text" key={currentTitle}>{titles[currentTitle]}</span>
          </p>
          <p className="hero-description">
            Passionate about building innovative solutions across Web3, Frontend Development, 
            Bot Automation, Game Development, and Reverse Engineering.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-window">
            <div className="code-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
            </div>
            <div className="code-content">
              <pre>
{`const developer = {
  name: "Raden Salman",
  skills: [
    "Web3 & Blockchain",
    "Frontend & UI",
    "Bot Development",
    "Game Dev",
    "Reverse Engineering"
  ],
  passion: "Building the future"
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
