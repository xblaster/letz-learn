import { useState } from 'react'
import { LearningSection, TeamMember } from '../types/LearningTypes'
import { learningSections, getTeamStats, teamMembers } from '../data/SectionsData'

interface SectionManagerProps {
  onSectionSelect: (section: LearningSection) => void
  onBackToMenu: () => void
}

const SectionManager: React.FC<SectionManagerProps> = ({ onSectionSelect, onBackToMenu }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'active' | 'development'>('all')
  const stats = getTeamStats()

  const filteredSections = learningSections.filter(section => {
    switch (selectedFilter) {
      case 'active':
        return section.isActive
      case 'development':
        return !section.isActive
      default:
        return true
    }
  })

  const renderTeamMember = (member: TeamMember, isLead: boolean = false) => (
    <div key={member.id} className={`team-member ${isLead ? 'team-lead' : ''}`}>
      <span className="member-avatar">{member.avatar}</span>
      <div className="member-info">
        <span className="member-name">{member.name}</span>
        <span className="member-role">{isLead ? 'Lead' : member.role}</span>
      </div>
    </div>
  )

  const renderSectionCard = (section: LearningSection) => (
    <div key={section.id} className={`section-card ${section.isActive ? 'active' : 'development'}`}>
      <div className="section-header">
        <div className="section-icon" style={{ color: section.color }}>
          {section.icon}
        </div>
        <div className="section-info">
          <h3 className="section-title">{section.title}</h3>
          <p className="section-description">{section.description}</p>
          <div className="section-metadata">
            <span className="section-level">Niveau {section.level}</span>
            <span className="section-time">~{section.estimatedTotalTime} min</span>
            <span className="section-units">{section.units.length} unités</span>
          </div>
        </div>
        <div className={`section-status ${section.isActive ? 'status-active' : 'status-dev'}`}>
          {section.isActive ? '✅ Actif' : '🚧 En développement'}
        </div>
      </div>

      <div className="section-team">
        <h4 className="team-title">Équipe assignée</h4>
        <div className="team-members">
          {renderTeamMember(section.teamLead, true)}
          {section.contributors.map(member => renderTeamMember(member))}
        </div>
      </div>

      <div className="section-actions">
        {section.isActive ? (
          <button
            className="btn btn-primary"
            onClick={() => onSectionSelect(section)}
          >
            Accéder à la section
          </button>
        ) : (
          <button className="btn btn-outline" disabled>
            En cours de développement
          </button>
        )}
      </div>
    </div>
  )

  return (
    <div className="section-manager">
      <div className="manager-header">
        <button className="btn btn-outline btn-sm" onClick={onBackToMenu}>
          ← Retour au menu
        </button>
        <h2 className="manager-title">Gestion des Sections</h2>
      </div>

      <div className="stats-overview">
        <div className="stat-card">
          <span className="stat-icon">📚</span>
          <div className="stat-info">
            <div className="stat-value">{stats.totalSections}</div>
            <div className="stat-label">Sections</div>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">✅</span>
          <div className="stat-info">
            <div className="stat-value">{stats.activeSections}</div>
            <div className="stat-label">Actives</div>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🚧</span>
          <div className="stat-info">
            <div className="stat-value">{stats.inDevelopment}</div>
            <div className="stat-label">En dev</div>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">👥</span>
          <div className="stat-info">
            <div className="stat-value">{stats.teamSize}</div>
            <div className="stat-label">Membres</div>
          </div>
        </div>
      </div>

      <div className="section-filters">
        <button
          className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('all')}
        >
          Toutes les sections
        </button>
        <button
          className={`filter-btn ${selectedFilter === 'active' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('active')}
        >
          Sections actives
        </button>
        <button
          className={`filter-btn ${selectedFilter === 'development' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('development')}
        >
          En développement
        </button>
      </div>

      <div className="sections-grid">
        {filteredSections.map(renderSectionCard)}
      </div>

      <div className="team-overview">
        <h3 className="team-overview-title">Aperçu de l'équipe</h3>
        <div className="team-grid">
          {Object.values(teamMembers).map(member => (
            <div key={member.id} className="team-card">
              <span className="team-avatar">{member.avatar}</span>
              <div className="team-details">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-spec">{member.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionManager