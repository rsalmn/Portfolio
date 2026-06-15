import { ExternalLink, Bitcoin, PanelsTopLeft, Users } from 'lucide-react'
import './Works.css'

function Works() {
  const works = [
    {
      id: 1,
      title: 'NFT App',
      description: 'Web3 NFT marketplace application with wallet integration and smart contracts',
      category: 'Web3',
      link: 'https://nfa-v1.web.app/',
      type: 'live'
    },
    {
      id: 2,
      title: 'NFT Marketplace',
      description: 'Advanced NFT trading platform with collection management and bidding system',
      category: 'Web3',
      link: '#',
      type: 'project'
    },
    {
      id: 3,
      title: 'Solana Decentralized Exchange',
      description: 'DEX built on Solana blockchain for token swapping and liquidity pools',
      category: 'Web3',
      link: 'https://rsalmn.github.io/SolSwap/#/',
      type: 'live'
    },
    {
      id: 4,
      title: 'Astrozen Minting Page',
      description: 'NFT minting interface for Astrozen collection with real-time minting status',
      category: 'Web3',
      link: 'https://astro-minting-example.netlify.app/',
      type: 'live'
    },
    {
      id: 5,
      title: 'Astrozen Landing Page',
      description: 'Professional landing page showcasing Astrozen NFT collection and features',
      category: 'Frontend',
      link: 'https://astrozen.art/',
      type: 'live'
    },
    {
      id: 6,
      title: 'Crown Chaser Moderator',
      description: 'Discord community management and moderation for Crown Chaser community',
      category: 'Community',
      link: 'https://discord.com/invite/QDX9QcjAJu',
      type: 'community'
    },
    {
      id: 7,
      title: 'Astrozens Developer/Moderator',
      description: 'Full-stack management including development support and community moderation',
      category: 'Community',
      link: 'https://discord.gg/GJEuF2mYSr',
      type: 'community'
    },
    {
      id: 8,
      title: 'RebelSols Moderator/Collab Manager',
      description: 'Managing collaborations and community operations for RebelSols project',
      category: 'Community',
      link: 'https://discord.gg/NbJuCNx9XF',
      type: 'community'
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Web3': '#6c63ff',
      'Frontend': '#f50057',
      'Community': '#00bcd4',
      'Bot': '#4caf50'
    }
    return colors[category] || '#6c63ff'
  }

  const getCategoryIcon = (category) => {
    const icons = {
      'Web3': <Bitcoin size={16} strokeWidth={2} />,
      'Frontend': <PanelsTopLeft size={16} strokeWidth={2} />,
      'Community': <Users size={16} strokeWidth={2} />,
    }
    return icons[category] || <ExternalLink size={16} strokeWidth={2} />
  }

  return (
    <section id="works" className="works">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="title-accent">Recent Works</span>
        </h2>
        
        <p className="works-subtitle">
          Showcase of recent projects and collaborations I've been working on
        </p>

        <div className="works-grid">
          {works.map((work, index) => (
            <div key={work.id} className="work-card" style={{ animationDelay: `${index * 0.08}s` }}>
              <div className="work-header">
                <div className="work-category-badge" style={{ background: getCategoryColor(work.category) }}>
                  {getCategoryIcon(work.category)}
                  <span>{work.category}</span>
                </div>
              </div>

              <h3 className="work-title">{work.title}</h3>
              <p className="work-description">{work.description}</p>

              <div className="work-footer">
                <a 
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-link"
                  aria-label={`Visit ${work.title}`}
                >
                  <span>View {work.type === 'live' ? 'Live' : work.type === 'community' ? 'Community' : 'Project'}</span>
                  <ExternalLink size={16} strokeWidth={2} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
