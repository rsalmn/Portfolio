import { useState, useEffect } from 'react'

const GITHUB_USERNAME = 'rsalmn'
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=owner`
const CACHE_KEY = 'github_repos_cache'
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export function useGitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const fetchRepos = async (force = false) => {
    try {
      // Check cache first
      if (!force) {
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
          const { data, timestamp } = JSON.parse(cached)
          if (Date.now() - timestamp < CACHE_DURATION) {
            setRepos(data)
            setLastUpdated(new Date(timestamp))
            setLoading(false)
            return
          }
        }
      }

      setLoading(true)
      const response = await fetch(API_URL)

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('GitHub API rate limit exceeded. Please try again later.')
        }
        throw new Error(`Failed to fetch repositories (${response.status})`)
      }

      const data = await response.json()
      
      // Cache the data
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data,
        timestamp: Date.now()
      }))

      setRepos(data)
      setLastUpdated(new Date())
      setError(null)
    } catch (err) {
      setError(err.message)
      // Try to load from cache on error
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const { data } = JSON.parse(cached)
        setRepos(data)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRepos()

    // Auto-refresh every 5 minutes
    const interval = setInterval(() => fetchRepos(true), CACHE_DURATION)
    return () => clearInterval(interval)
  }, [])

  return { repos, loading, error, lastUpdated, refresh: () => fetchRepos(true) }
}

export function useRepoFilters(repos) {
  const [selectedLanguage, setSelectedLanguage] = useState('all')
  const [sortBy, setSortBy] = useState('updated')
  const [searchQuery, setSearchQuery] = useState('')
  const [showForks, setShowForks] = useState(false)

  const languages = ['all', ...new Set(
    repos
      .filter(repo => repo.language)
      .map(repo => repo.language)
      .sort()
  )]

  const filteredRepos = repos
    .filter(repo => {
      // Filter by fork status
      if (!showForks && repo.fork) return false
      
      // Filter by language
      if (selectedLanguage !== 'all' && repo.language !== selectedLanguage) return false
      
      // Filter by search
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          repo.name.toLowerCase().includes(query) ||
          (repo.description && repo.description.toLowerCase().includes(query)) ||
          (repo.topics && repo.topics.some(t => t.toLowerCase().includes(query)))
        )
      }
      
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'stars':
          return (b.stargazers_count || 0) - (a.stargazers_count || 0)
        case 'name':
          return a.name.localeCompare(b.name)
        case 'created':
          return new Date(b.created_at) - new Date(a.created_at)
        case 'updated':
        default:
          return new Date(b.updated_at) - new Date(a.updated_at)
      }
    })

  return {
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
  }
}
