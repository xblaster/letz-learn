# Directives pour les contributrices et contributeurs de Lëtz Learn

Bienvenue dans le dépôt de l'application **Lëtzebuergesch Léieren**. Ce document établit des règles transverses qui s'appliquent à l'ensemble du dépôt.

## 1. Gouvernance de produit (vision chef·fe de projet)
- Avant toute évolution fonctionnelle, consultez `CHEF_PROJET_ROADMAP.md`, `Architecture-Analysis-48-Units.md` et `CONSTRUCTION_RESUME.md` pour vérifier l'alignement stratégique.
- Documentez toute fonctionnalité livrée ou retirée dans `README-APP.md` et mettez à jour les diagrammes ou notes d'architecture concernées.
- Maintenez la cohérence des parcours pédagogiques : si une unité change, revoyez les dépendances et l'impact sur les tests end-to-end.

## 2. Qualité linguistique (voix de linguiste luxembourgeois·e)
- Les textes destinés aux apprenant·e·s doivent être d'abord en luxembourgeois correct (avec tréma/umlaut : ä, ë, é, ï, etc.), puis accompagnés d'explications françaises ou phonétiques.
- Respectez le registre attendu par niveau CECRL (A1 → phrases simples, B1 → nuances). Toute nouvelle phrase doit indiquer un usage clair et culturellement pertinent.
- Vérifiez systématiquement la justesse linguistique : orthographe, casse, ponctuation et grammaire luxembourgeoise.

## 3. Principes de conception et de développement
- Le projet utilise React 18 + TypeScript + Material UI. Privilégiez des composants fonctionnels typés et respectez la structure de dossiers actuelle (`components`, `data`, `hooks`, `services`, etc.).
- Mettez à jour ou créez les types dans `src/types` avant d'introduire une nouvelle forme de données ou d'exercice.
- Visez l'accessibilité : aria-labels pertinents, contrastes suffisants, interactions clavier testées.
- Les chaînes d'interface ne doivent pas être codées en dur dans le code métier quand elles relèvent de contenu pédagogique ; stockez-les dans `src/data`.

## 4. Engagement pédagogique et UX
- Chaque ajout doit renforcer la motivation : feedback positif, progression claire, encouragements empathiques.
- Évitez les formulations culpabilisantes ; préférez des messages constructifs et inclusifs.
- Lorsque vous créez des écrans ou animations, validez la compatibilité mobile (consultez `App-mobile-optimized.tsx` et `mobile-optimized.css`).

## 5. Qualité logicielle et tests
- Avant de soumettre une modification, exécutez :
  - `npm test` (tests unitaires et composants),
  - `npm run build` (contrôle de build de production).
- Ajoutez des tests dans `src/__tests__` pour tout comportement interactif non couvert.
- Si vous modifiez les scripts, synchronisez `scripts/generate-build-info.js` au besoin et regénérez `public/build-info.json` via `npm run build`.

## 6. Communication dans les PR
- Les messages de commit et de PR doivent souligner la valeur pédagogique ou UX apportée et résumer les impacts sur le parcours d'apprentissage.
- Mentionnez explicitement tout changement affectant la langue, le ton, ou l'engagement utilisateur.

Ces directives s'appliquent à l'ensemble du dépôt. Des instructions plus spécifiques peuvent exister dans des `AGENTS.md` plus profonds ; elles prévalent sur ce document dans leur périmètre.
