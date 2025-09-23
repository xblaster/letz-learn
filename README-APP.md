# 🇱🇺 Lëtzebuergesch Léieren - Application d'apprentissage du Luxembourgeois

Une application React moderne pour apprendre le luxembourgeois de manière interactive.

## Fonctionnalités

### 🎯 Quiz Vocabulaire
- Quiz interactif avec questions à choix multiples
- Progression en temps réel avec barre de progression
- Score final et encouragements
- Possibilité de recommencer le quiz
- Questions mélangées pour chaque session

### 📚 Phrases Utiles
- Collection de phrases essentielles en luxembourgeois
- Traductions françaises avec guide de prononciation
- Catégorisation par thème (salutations, présentation, etc.)
- Fonction de recherche par mots-clés
- Filtrage par catégories
- Synthèse vocale pour la prononciation (🔊)

## Contenu d'apprentissage

### Vocabulaire de base
- Salutations et politesse
- Questions courantes
- Nourriture et boissons
- Conversations de base

### Phrases organisées par catégories
- **Salutations** : Moien, Wéi geet et?, etc.
- **Présentation** : Se présenter et demander des informations
- **Communication** : Expressions pour demander de l'aide
- **Directions** : Demander son chemin
- **Shopping** : Achats et prix
- **Restaurant** : Commander et payer

## Installation et utilisation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation
```bash
cd luxembourgish-app
npm install
```

### Lancement de l'application
```bash
npm start
```

L'application sera accessible sur `http://localhost:3000`

### Autres commandes disponibles
```bash
# Construire pour la production
npm run build

# Lancer les tests
npm test

# Analyser le bundle
npm run eject
```

## Structure du projet

```
src/
├── components/
│   ├── VocabularyQuiz.tsx  # Composant du quiz
│   └── PhraseList.tsx      # Composant des phrases utiles
├── App.tsx                 # Composant principal
├── App.css                 # Styles de l'application
├── index.tsx              # Point d'entrée
└── index.css              # Styles globaux
```

## Technologies utilisées

- **React 18** avec TypeScript
- **React Hooks** (useState, useEffect)
- **CSS3** avec design responsive
- **Web Speech API** pour la synthèse vocale

## Fonctionnalités techniques

- Interface responsive adaptée aux mobiles et tablettes
- Design moderne avec animations et transitions
- Gestion d'état locale avec React Hooks
- TypeScript pour la sécurité de type
- Synthèse vocale intégrée pour la prononciation

## Améliorations futures possibles

- 🎵 Ajout de fichiers audio pour une meilleure prononciation
- 📖 Module de grammaire luxembourgeoise
- 🏆 Système de niveaux et achievements
- 💾 Sauvegarde du progrès utilisateur
- 🌍 Mode hors ligne (PWA)
- 📱 Application mobile native
- 🎨 Thèmes personnalisables
- 👥 Fonctionnalités communautaires

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Ajouter du vocabulaire et des phrases
- Améliorer les traductions
- Proposer de nouvelles fonctionnalités
- Corriger les bugs

## Licence

Ce projet est open source et disponible sous licence MIT.