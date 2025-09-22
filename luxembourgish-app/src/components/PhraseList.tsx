import { useState } from 'react'

interface Phrase {
  luxembourgish: string
  french: string
  pronunciation: string
  category: string
  context?: string
}

const phrasesData: Phrase[] = [
  {
    luxembourgish: "Moien!",
    french: "Bonjour !",
    pronunciation: "MOY-en",
    category: "Salutations",
    context: "Salutation standard utilisée toute la journée"
  },
  {
    luxembourgish: "Wéi geet et?",
    french: "Comment allez-vous ?",
    pronunciation: "VAY gait et",
    category: "Salutations"
  },
  {
    luxembourgish: "Et geet mer gutt, merci",
    french: "Je vais bien, merci",
    pronunciation: "et gait mer goot MER-see",
    category: "Salutations"
  },
  {
    luxembourgish: "Ech heeschen...",
    french: "Je m'appelle...",
    pronunciation: "esh HAY-shen",
    category: "Présentation"
  },
  {
    luxembourgish: "Wou kënnt Dir hier?",
    french: "D'où venez-vous ?",
    pronunciation: "voo kent deer heer",
    category: "Présentation"
  },
  {
    luxembourgish: "Ech verstinn net",
    french: "Je ne comprends pas",
    pronunciation: "esh fer-SHTEEN net",
    category: "Communication"
  },
  {
    luxembourgish: "Kënnt Dir mir hëllefen?",
    french: "Pouvez-vous m'aider ?",
    pronunciation: "kent deer meer HEL-e-fen",
    category: "Communication"
  },
  {
    luxembourgish: "Wou ass d'Gare?",
    french: "Où est la gare ?",
    pronunciation: "voo ass d'GA-re",
    category: "Directions"
  },
  {
    luxembourgish: "Wéivill kascht dat?",
    french: "Combien cela coûte-t-il ?",
    pronunciation: "VAY-veel kasht dat",
    category: "Shopping"
  },
  {
    luxembourgish: "Ech hätt gäer...",
    french: "J'aimerais...",
    pronunciation: "esh het GAIR",
    category: "Restaurant"
  },
  {
    luxembourgish: "D'Rechnung, wann ech gelift",
    french: "L'addition, s'il vous plaît",
    pronunciation: "d'REKH-noong van esh ge-LEEFT",
    category: "Restaurant"
  },
  {
    luxembourgish: "Äddi!",
    french: "Au revoir !",
    pronunciation: "AD-dee",
    category: "Salutations"
  }
]

const categories = Array.from(new Set(phrasesData.map(phrase => phrase.category)))

const PhraseList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const filteredPhrases = phrasesData.filter(phrase => {
    const matchesCategory = selectedCategory === 'Tous' || phrase.category === selectedCategory
    const matchesSearch = phrase.luxembourgish.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         phrase.french.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const playPronunciation = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="phrase-list">
      <div className="phrase-list-header">
        <h2>Phrases Utiles</h2>
        <p>Phrases essentielles pour communiquer en luxembourgeois</p>
      </div>

      <div className="filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher une phrase..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filter">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="Tous">Toutes les catégories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="phrases-grid">
        {filteredPhrases.map((phrase, index) => (
          <div key={index} className="phrase-card">
            <div className="phrase-header">
              <span className="category-badge">{phrase.category}</span>
            </div>

            <div className="phrase-content">
              <div className="luxembourgish">
                <strong>{phrase.luxembourgish}</strong>
                <button
                  onClick={() => playPronunciation(phrase.luxembourgish)}
                  className="pronunciation-btn"
                  title="Écouter la prononciation"
                >
                  🔊
                </button>
              </div>

              <div className="french">{phrase.french}</div>

              <div className="pronunciation">
                <em>Prononciation: {phrase.pronunciation}</em>
              </div>

              {phrase.context && (
                <div className="context">
                  <small>{phrase.context}</small>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredPhrases.length === 0 && (
        <div className="no-results">
          <p>Aucune phrase trouvée pour votre recherche.</p>
        </div>
      )}
    </div>
  )
}

export default PhraseList