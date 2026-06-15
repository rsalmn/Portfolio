import { Bitcoin, PanelsTopLeft, Bot, Gamepad2, Shield } from 'lucide-react'
import './Skills.css'

function Skills() {
  const skills = [
    {
      icon: <Bitcoin size={40} strokeWidth={1.5} />,
      title: 'Web3 & Blockchain',
      description: 'Smart contracts, DApps, DeFi protocols, dan blockchain development dengan Solidity dan Web3.js',
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts']
    },
    {
      icon: <PanelsTopLeft size={40} strokeWidth={1.5} />,
      title: 'Frontend & UI/UX',
      description: 'Modern web applications dengan React, responsive design, dan user-friendly interfaces',
      technologies: ['React', 'JavaScript', 'CSS3', 'UI/UX Design']
    },
    {
      icon: <Bot size={40} strokeWidth={1.5} />,
      title: 'Bots & Automation',
      description: 'Custom bots untuk Discord, Telegram, dan automation scripts untuk workflow optimization',
      technologies: ['Node.js', 'Python', 'Discord.js', 'API Integration']
    },
    {
      icon: <Gamepad2 size={40} strokeWidth={1.5} />,
      title: 'Game Dev & Lua',
      description: 'Game development dengan Lua scripting, game logic, dan interactive experiences',
      technologies: ['Lua', 'Roblox Studio', 'Game Logic', '3D Modeling']
    },
    {
      icon: <Shield size={40} strokeWidth={1.5} />,
      title: 'Reverse Engineering',
      description: 'Mobile app analysis, security research, dan reverse engineering untuk pembelajaran',
      technologies: ['Android', 'APK Analysis', 'Security', 'Debugging']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="title-accent">Expertise</span>
        </h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-technologies">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
