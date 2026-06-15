import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import './Navbar.css'

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand" onClick={() => scrollToSection('home')}>
          <span className="brand-text">RS</span>
        </div>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }} className="nav-link">Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }} className="nav-link">About</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }} className="nav-link">Skills</a>
          <a href="#works" onClick={(e) => { e.preventDefault(); scrollToSection('works') }} className="nav-link">Works</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }} className="nav-link">Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className="nav-link">Contact</a>
          
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
          </button>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
