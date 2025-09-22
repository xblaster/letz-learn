# Sentence Construction & Speech Recognition Exercises - Specification

## 🎯 Contexte
L'application propose déjà plusieurs types d'exercices (audio, images, dialogues, prononciation). Lors de la conception initiale, deux modules supplémentaires étaient prévus pour enrichir l'apprentissage :

1. **Construction de phrase** — guider l'apprenant dans la structuration de phrases courantes en luxembourgeois.
2. **Speech recognition** — évaluer une phrase prononcée en comparant la transcription vocale à la cible attendue.

Ces fonctionnalités doivent s'intégrer harmonieusement dans l'architecture existante (`LearningUnit`, `Exercise`, composants d'exercices) et respecter l'expérience utilisateur "Duolingo-like".

## ✅ Objectifs
- Étendre le modèle d'exercice pour supporter les deux nouveaux types.
- Offrir une UI accessible et tactile pour organiser des mots (sentence builder).
- Mettre en place un flux de reconnaissance vocale robuste avec fallback si l'API n'est pas disponible.
- Conserver les feedbacks audio/visuels et les métriques (temps, réussite) déjà utilisés.
- Ajouter des exercices pertinents dans chaque unité de cours afin d'exposer ces nouvelles mécaniques.

## 🧠 User stories
- *En tant qu'apprenant*, je peux réordonner des mots proposés pour former une phrase correcte et recevoir un feedback immédiat.
- *En tant qu'apprenant*, je peux prononcer une phrase complète, voir la transcription de mon essai et savoir si ma prononciation/structure correspond à la cible.
- *En tant que concepteur*, je peux créer facilement de nouveaux exercices de ces types via les fichiers de données sans modifier les composants.

## 🧱 Mise à jour du modèle de données
- Ajouter deux valeurs à `ExerciseType` : `sentence_construction` et `speech_recognition`.
- Étendre l'interface `Exercise` avec des propriétés optionnelles :
  - `wordBank?: string[]` — banque de mots à utiliser pour la construction.
  - `expectedSentence?: string` — phrase canonique utilisée pour les comparaisons (sinon `correctAnswer`).
  - `hint?: string` — courte aide contextuelle affichée sous la consigne.
- Mettre à jour les fichiers `Unit*Data.ts` pour fournir ces champs pour les nouveaux exercices.

## 🖥️ UX / UI
### Construction de phrase
- Afficher la consigne et un éventuel contexte.
- Montrer un espace "Phrase" où les mots sélectionnés apparaissent dans l'ordre.
- Liste de boutons/étiquettes représentant le `wordBank`.
- Les mots déjà utilisés deviennent désactivés (ou grisés) pour éviter les doublons.
- Bouton « Effacer » pour réinitialiser la tentative.
- Lorsque tous les mots sont utilisés ou que l'utilisateur valide, comparer au modèle et afficher un feedback (succès/erreur + phrase correcte).

### Speech recognition
- Afficher la phrase cible (ou un indice) et un bouton "Écouter" pour entendre le modèle.
- Bouton principal pour démarrer/arrêter l'enregistrement.
- Afficher l'état (enregistrement en cours, absence de support navigateur, fallback simulé).
- Montrer la transcription détectée en temps réel ou à la fin.
- Calculer une similarité pour déterminer la réussite, puis feedback (succès/encouragement) + possibilité de réessayer.

## ⚙️ Implémentation technique
1. **Types** — mettre à jour `LearningTypes.ts` et fournir une déclaration `SpeechRecognition` typée (fichier `src/types/speech-recognition.d.ts`).
2. **Services** — créer `SpeechRecognitionService` qui encapsule la logique start/stop, la détection de support et la normalisation de transcript.
3. **Composants** — ajouter `SentenceConstructionExercise` et `SpeechRecognitionExercise` dans `src/components/exercises`.
   - Les composants suivent la même API (`exercise`, `onComplete`).
   - Utilisation de `AudioService` pour la lecture modèle.
4. **Intégration** — mettre à jour `LearningUnit.tsx` (switch sur type et libellés de bandeau).
5. **Données** — enrichir chaque unité avec au moins un exercice de chaque nouveau type pour assurer la couverture.
6. **Feedback / audio** — réutiliser `AudioService` pour les interactions utilisateur (clic, lecture, etc.).

## 🧪 Plan de test
- Navigation complète dans une unité contenant les nouveaux exercices.
- Interaction tactile/clavier sur les mots (construction).
- Simulation du flux speech recognition avec navigateur sans support (fallback) et s'assurer que la complétion appelle `onComplete`.
- `npm run build` pour valider la compilation TypeScript.

## 🚀 Livrables
- Nouveaux composants d'exercice et service de reconnaissance vocale.
- Données mises à jour pour exposer les exercices.
- Documentation de ces spécifications (`docs/sentence-speech-exercises-spec.md`).
