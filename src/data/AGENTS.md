# Directives pour les contenus pédagogiques (`src/data`)

Ces règles sont prioritaires pour tous les fichiers de données (unités, parcours, contenus de phrases, etc.).

## Structure des fichiers
- Chaque unité doit exposer explicitement :
  - un tableau `unitXVocabulary` (`X` = numéro ou identifiant de l'unité),
  - une fonction `generateUnitXExercises` qui retourne un `Exercise[]`,
  - une constante `unitX` de type `LearningUnit` si le fichier la définit.
- Préservez la progression par étapes (commentaires `// ÉTAPE n` existants). Si vous ajoutez une étape, mettez à jour la numérotation et décrivez brièvement l'objectif pédagogique.

## Qualité des données linguistiques
- `VocabularyItem.luxembourgish` doit toujours contenir la graphie correcte avec diacritiques. Utilisez des identifiants (`id`) en minuscules sans espace ni accent (`moien`, `ech_sinn`...).
- Complétez systématiquement `french`, `pronunciation` (transcription phonétique simple, majuscules pour syllabes accentuées) et `usage` (contexte d'emploi en français).
- Lorsque pertinent, ajoutez `audioUrl` ou `imageUrl` pour soutenir différents styles d’apprentissage.

## Conception des exercices
- Les `Exercise.id` doivent être uniques à l'échelle du dépôt. Préfixez-les avec l'unité (`u01_`, `u15_`) si nécessaire.
- `correctAnswer` doit correspondre exactement à l'option ou à la phrase attendue. Vérifiez la cohérence entre `options`, `wordBank`, `expectedSentence` et `hint`.
- Indiquez la valeur `type` en respectant les options de `ExerciseType` (cf. `src/types/LearningTypes.ts`). Toute nouvelle catégorie implique la mise à jour de ce type.
- Les contextes (`context`) doivent expliquer pourquoi l'exercice est culturellement pertinent ou engageant.

## Cohérence pédagogique et engagement
- Veillez à alterner compétences (compréhension orale, production, culture) et niveaux de difficulté selon le niveau CECRL annoncé.
- Introduisez des encouragements ou mini-récompenses textuelles dans les explications (`usage`, `context`) pour soutenir la motivation.
- Lorsque vous ajoutez une unité, mettez à jour `LearningPathData.ts` ou `unitSections.ts` pour que le parcours reste complet.

## Vérifications
- Après toute modification de données, exécutez `npm test` pour détecter les régressions, puis faites un `npm run build` pour vérifier l'intégrité du bundle.
- Lisez le rendu dans l'application (mode desktop et mobile) afin de valider les coupures de lignes et l'affichage des diacritiques.

Ces consignes priment sur les autres fichiers `AGENTS.md` pour toute modification dans `src/data`.
