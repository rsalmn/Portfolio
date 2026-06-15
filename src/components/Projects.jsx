import { useGitHubRepos, useRepoFilters } from '../hooks/useGitHubRepos'
import './Projects.css'

function Projects() {
  const { repos, loading, error, lastUpdated, refresh } = useGitHubRepos()
  const {
    filteredRepos,
    languages,
    selectedLanguage,
    setSelectedLanguage,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    showForks,
    setShowForks
  } = useRepoFilters(repos)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now - date
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#3178c6',
      'Python': '#3572A5',
      'Lua': '#000080',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'Solidity': '#AA6746',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'C#': '#178600',
      'PHP': '#4F5D95',
      'Shell': '#89e051'
    }
    return colors[language] || '#6c63ff'
  }

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="title-accent">Projects</span>
        </h2>

        <div className="projects-header">
          <p className="projects-subtitle">
            Real-time projects from my GitHub repository
          </p>

          <button className="refresh-btn" onClick={refresh} disabled={loading}>
            <span className={`refresh-icon ${loading ? 'spinning' : ''}`}></span>
            {loading ? 'Loading...' : 'Refresh'}
          </button>
        </div>

        {/* Filters */}
        <div className="projects-filters">
          <div className="filter-group">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-controls">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="filter-select"
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>
                  {lang === 'all' ? 'All Languages' : lang}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="updated">Recently Updated</option>
              <option value="created">Recently Created</option>
              <option value="stars">Most Stars</option>
              <option value="name">Name A-Z</option>
            </select>

            <label className="toggle-label">
              <input
                type="checkbox"
                checked={showForks}
                onChange={(e) => setShowForks(e.target.checked)}
                className="toggle-input"
              />
              <span className="toggle-text">Show Forks</span>
            </label>
          </div>
        </div>

        {/* Status Info */}
        {lastUpdated && (
          <div className="status-info">
            <span className="status-dot"></span>
            Last updated: {lastUpdated.toLocaleTimeString()} • {filteredRepos.length} projects
          </div>
        )}

        {/* Loading State */}
        {loading && repos.length === 0 && (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading projects from GitHub...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-state">
            <span className="error-icon">⚠️</span>
            <p>{error}</p>
            <button onClick={refresh} className="btn btn-primary">Try Again</button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredRepos.map((repo, index) => (
            <div key={repo.id} className="project-card" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="project-header">
                <h3 className="project-name">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </h3>
                {repo.fork && <span className="fork-badge">Fork</span>}
              </div>

              <p className="project-description">
                {repo.description || 'No description available'}
              </p>

              {repo.topics && repo.topics.length > 0 && (
                <div className="project-topics">
                  {repo.topics.slice(0, 3).map((topic, idx) => (
                    <span key={idx} className="topic-tag">{topic}</span>
                  ))}
                </div>
              )}

              <div className="project-meta">
                {repo.language && (
                  <div className="meta-item">
                    <span
                      className="language-dot"
                      style={{ background: getLanguageColor(repo.language) }}
                    ></span>
                    <span>{repo.language}</span>
                  </div>
                )}

                <div className="meta-item">
                  <span>⭐</span>
                  <span>{repo.stargazers_count}</span>
                </div>

                <div className="meta-item">
                  <span>🍴</span>
                  <span>{repo.forks_count}</span>
                </div>

                <div className="meta-item">
                  <span>🕒</span>
                  <span>{formatDate(repo.updated_at)}</span>
                </div>
              </div>

              <div className="project-links">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredRepos.length === 0 && !loading && (
          <div className="empty-state">
            <span className="empty-icon">📦</span>
            <p>No projects found matching your criteria</p>
          </div>
        )}

        <div className="projects-footer">
          <a
            href="https://github.com/rsalmn?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
          >
            View All Repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
