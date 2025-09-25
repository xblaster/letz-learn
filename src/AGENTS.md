# Directives techniques pour `src/`

Ces instructions complètent le `AGENTS.md` racine et s'appliquent à tout le code et contenu du dossier `src/`.

## Structure et organisation
- Réutilisez les dossiers existants : `components` (UI), `data` (contenus pédagogiques), `hooks`, `services`, `utils`, `types`.
- Toute nouvelle vue doit passer par les hooks fournis (`useRouting`, `useConfirmAction`) pour conserver le routage interne et la logique de confirmation.

## TypeScript & React
- Typage strict obligatoire : aucune valeur `any`. Utilisez ou étendez les interfaces de `src/types/LearningTypes.ts`.
- Préférez des composants fonctionnels avec hooks, et factorisez les sous-composants UI dans `components/`.
- Conservez la compatibilité Material UI : stylisez avec `sx` ou `styled`, pas de CSS inline non contrôlé.
- Ajoutez un test React Testing Library dans `src/__tests__/` pour toute interaction nouvelle ou modifiée.

## Contenu pédagogique dans le code
- Les composants ne doivent contenir que de la logique de présentation ou d'orchestration. Les données textuelles (phrases, vocabulaires, consignes) doivent résider dans `src/data`.
- Lorsque vous affichez du texte luxembourgeois, fournissez au minimum :
  1. le terme luxembourgeois exact,
  2. une traduction française claire,
  3. la prononciation phonétique simple si utile pour l'apprenant.
- Les messages d'interface doivent encourager l'apprenant et rester positifs.

## Accessibilité et engagement
- Ajoutez des `aria-*` pertinents pour tous les contrôles non standards. Vérifiez les contrastes avec le thème clair et le thème sombre (`theme.ts` et `theme-dark.ts`).
- Toute animation doit être testée sur mobile (`App-mobile-optimized.tsx` / `mobile-optimized.css`). Prévoyez une alternative réduite pour les utilisateurs sensibles au mouvement.

## Tests et instrumentation
- Pour toute nouvelle logique métier, ajoutez des helpers dans `utils/` et couvrez-les par des tests ciblés.
- Les effets secondaires (localStorage, audio, synthèse vocale) doivent être isolés dans des hooks ou services dédiés et simulés dans les tests.

Respectez également les consignes spécifiques dans les sous-dossiers (ex. `src/data/AGENTS.md`).
