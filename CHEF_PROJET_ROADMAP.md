# 📋 CHEF DE PROJET - ROADMAP LËTZEBUERGESCH LÉIEREN

## 🎯 VISION PRODUIT
**Créer la première application d'apprentissage luxembourgeois avec progression A1→B2, thème dark mobile-first, et intégration culturelle authentique.**

---

## 📊 ÉTAT ACTUEL - SPRINT EN COURS

### 🔄 **SPRINT ACTUEL : Section 1 "Premiers pas"**
- **Début** : Restructuration Unit1 complétée
- **Objectif** : 8 unités A1 niveau fondation solide
- **Progression** : 2/8 unités (25%)
- **Deadline estimée** : 3-4 jours

### 🏆 **RÉALISATIONS CLÉS**
1. ✅ Architecture scalable 48 unités documentée
2. ✅ UX mobile-first dark theme complet
3. ✅ Types d'exercices étendus (15 types)
4. ✅ Unit1 restructurée (progression scaffoldée parfaite)
5. ✅ Unit3 "Nombres" avec contextes luxembourgeois authentiques

---

## 🗺️ ROADMAP DÉTAILLÉE

### **PHASE 1 : FONDATIONS** *(Semaine 1-2)*

#### **Task 1.1 : Compléter Section 1** 🔄 EN COURS
**Input développement :**
- Finaliser Unit4 "Temps et jours" (50% fait)
- Créer Units 5-8 selon template établi
- Maintenir standards : 5 étapes scaffoldées, 30% construction min
- Intégrer contextes luxembourgeois spécifiques

**Réflexions critiques :**
- Équilibrer vocabulaire nouveau vs révision (70/30)
- Assurer progression culturelle : vie quotidienne → institutions
- Valider métriques pédagogiques pour chaque unité

**Tâches restantes :**
- [ ] Finaliser Unit4NewData.ts (templates, jours, planning)
- [ ] Créer Unit5NewData.ts (famille étendue + possessifs)
- [ ] Créer Unit6NewData.ts (directions + navigation Luxembourg)
- [ ] Créer Unit7NewData.ts (urgences + services d'aide)
- [ ] Créer Unit8NewData.ts (politesse formelle + administration)

#### **Task 1.2 : Composants React Multi-Sections**
**Input développement :**
- Adapter LearningPathData.ts pour 6 sections
- Créer composants navigation étendue
- Implémenter lazy loading par section
- Intégrer thème dark existant

**Réflexions critiques :**
- Performance : éviter chargement 48 unités simultané
- UX : navigation intuitive entre niveaux A1→B2
- Accessibilité : maintenir standards WCAG AA

**Tâches à accomplir :**
- [ ] Refactorer LearningPathData.ts (6 sections × 8 unités)
- [ ] Créer SectionNavigator.tsx (overview sections)
- [ ] Créer UnitGrid.tsx (grille unités par section)
- [ ] Implémenter ProgressTracker.tsx (suivi global)
- [ ] Tester navigation responsive mobile/desktop

---

### **PHASE 2 : EXPANSION CONTENU** *(Semaine 3-4)*

#### **Task 2.1 : Section 2 "Communication quotidienne"**
**Input développement :**
- 8 unités A1+ : situations sociales pratiques
- Vocabulaire : 6-8 mots nouveaux + 2-3 révision par unité
- Contextes : magasins Luxembourg, restaurants, CFL transports

**Réflexions critiques :**
- Transition A1→A1+ : complexité syntaxique progressive
- Intégrer expressions idiomatiques luxembourgeoises courantes
- Équilibrer situations formelles/informelles

**Tâches à accomplir :**
- [ ] Unit9: Conversations simples (comment allez-vous, état)
- [ ] Unit10: Au magasin (acheter, prix, Cactus/Delhaize)
- [ ] Unit11: Au restaurant (menu, commander, traditions culinaires)
- [ ] Unit12: Transports CFL (bus, train, billets, destinations)
- [ ] Unit13: Météo (expressions, saisons luxembourgeoises)
- [ ] Unit14: Loisirs (sports populaires, activités culturelles)
- [ ] Unit15: Rendez-vous (planification, confirmations)
- [ ] Unit16: Téléphone (conversations, messages, protocoles)

#### **Task 2.2 : Section 3 "Vie pratique"**
**Input développement :**
- 8 unités A2 : autonomie complète situations courantes
- Augmenter % exercices construction (35% minimum)
- Introduire passé simple et futur proche

**Réflexions critiques :**
- Niveau A2 : phrases complexes, opinions basiques
- Contextes administratifs luxembourgeois réels
- Préparer transition vers aspects culturels (Section 4)

**Tâches à accomplir :**
- [ ] Unit17: Logement (types, location, quartiers Luxembourg)
- [ ] Unit18: Santé (médecins, pharmacies, système santé LUX)
- [ ] Unit19: Banque (comptes, cartes, services financiers)
- [ ] Unit20: Travail (bureau, collègues, secteurs économiques)
- [ ] Unit21: Voyages (aéroport Findel, réservations, tourisme)
- [ ] Unit22: Vêtements (shopping, tailles, styles)
- [ ] Unit23: Nourriture (courses, cuisine, spécialités)
- [ ] Unit24: Services publics (mairie, poste, administrations)

---

### **PHASE 3 : CULTURE & AVANCÉ** *(Semaine 5-6)*

#### **Task 3.1 : Section 4 "Culture et société"**
**Input développement :**
- 8 unités A2+ : immersion culturelle luxembourgeoise
- 40% exercices construction minimum
- Types avancés : cultural_context, text_comprehension

**Réflexions critiques :**
- Authenticité culturelle maximale : histoire, traditions réelles
- Éviter stéréotypes, montrer Luxembourg moderne et diversifié
- Intégrer multilinguisme luxembourgeois (français, allemand, anglais)

**Tâches à accomplir :**
- [ ] Unit25: Histoire (indépendance 1839, guerres, évolution)
- [ ] Unit26: Traditions (Schueberfouer, Emaischen, Oktave)
- [ ] Unit27: Politique (institutions UE, gouvernement, démocratie)
- [ ] Unit28: Éducation (système scolaire, université, formation)
- [ ] Unit29: Médias (RTL, Tageblatt, presse locale)
- [ ] Unit30: Sports (football, cyclisme, événements sportifs)
- [ ] Unit31: Événements (festivals, concerts, vie culturelle)
- [ ] Unit32: Géographie (cantons, villes, nature, frontières)

#### **Task 3.2 : Sections 5-6 Maîtrise**
**Input développement :**
- Section 5 (B1) : 50% construction, opinions nuancées
- Section 6 (B1+/B2) : 60% construction, registres formels
- Types experts : argumentation_building, register_adaptation

**Réflexions critiques :**
- Transition majeure A2→B1 : autonomie complète
- B2 ciblé contextes professionnels (secteur financier, institutions UE)
- Maintenir spécificité luxembourgeoise à haut niveau

---

### **PHASE 4 : OPTIMISATION & LANCEMENT** *(Semaine 7-8)*

#### **Task 4.1 : Performance & Tests**
**Input développement :**
- Tests pédagogiques complets 48 unités
- Optimisations performance mobile
- Validation progression A1→B2

**Réflexions critiques :**
- Courbe apprentissage : éviter décrochage niveau B1
- Métriques engagement : temps session, rétention D7/D30
- Feedback utilisateurs beta : ajustements finaux

#### **Task 4.2 : Documentation & Déploiement**
**Input développement :**
- Guide utilisateur multilingue
- Documentation technique complète
- Stratégie lancement et marketing

---

## 🎯 INPUTS DÉVELOPPEMENT PAR COMPOSANT

### **📚 UNITÉS PÉDAGOGIQUES**

**Template Standard :**
```typescript
// Structure obligatoire par unité
interface UnitTemplate {
  vocabulaire: 6-8_mots_nouveaux + 2-3_révision
  exercices: 10-12_exercices_total
  étapes_scaffolding: 5_étapes_obligatoires
  distribution: {
    QCM: "max_40%",
    construction: "min_30%_A1, 35%_A2, 50%_B1, 60%_B2",
    autres: "25-30%"
  }
  contextes_luxembourgeois: "min_30%_exercices"
  durée: "4-7_minutes"
  score_cible: 80
}
```

**Progression Vocabulaire :**
- **A1** : Survie (salutations, nombres, temps, famille)
- **A1+** : Social (magasins, restaurants, transports)
- **A2** : Pratique (logement, santé, travail, services)
- **A2+** : Culturel (histoire, traditions, société)
- **B1** : Personnel (opinions, projets, expériences)
- **B1+/B2** : Professionnel (réunions, négociations, expertise)

### **🎨 COMPOSANTS UI**

**Hiérarchie Navigation :**
```
App (dark theme)
├── SectionOverview (6 sections)
├── SectionDetail (8 unités par section)
├── UnitDetail (exercices individuels)
└── ProgressDashboard (métriques globales)
```

**Spécifications Techniques :**
- **Mobile-first** : breakpoints 320px, 768px, 1024px+
- **Dark theme** : couleurs cyan (#00d4ff), orange (#ff6b35), violet (#c877ff)
- **Performance** : lazy loading sections, <3s Time to Interactive
- **Accessibilité** : WCAG AA, touch targets 48px min

### **📊 MÉTRIQUES & VALIDATION**

**KPI Pédagogiques :**
- Progression scaffolding : "excellent" pour toutes unités
- Équilibre exercices : respecté pour chaque niveau
- Authenticité culturelle : score 7+/10 par unité
- Rétention apprentissage : >70% après 1 semaine

**KPI Techniques :**
- Performance mobile : score Lighthouse >90
- Engagement utilisateur : session moyenne >10min
- Taux complétion unité : >80%
- Feedback qualité : >4.2/5

---

## 🚨 RISQUES & MITIGATION

### **Risque 1 : Décrochage utilisateurs niveau B1**
**Mitigation :** Checkpoints fréquents, système de badges, parcours adaptatifs

### **Risque 2 : Complexité technique 48 unités**
**Mitigation :** Architecture modulaire, lazy loading, tests automatisés

### **Risque 3 : Authenticité culturelle superficielle**
**Mitigation :** Validation experts luxembourgeois, contextes vérifiés

### **Risque 4 : Performance mobile dégradée**
**Mitigation :** Optimisations GPU, bundle splitting, monitoring continu

---

## 📅 TIMELINE CRITIQUE

### **Semaine 1 : Fondations**
- Lun-Mar : Finaliser Section 1 (Units 4-8)
- Mer-Ven : Composants React multi-sections

### **Semaine 2 : Communication**
- Lun-Ven : Section 2 complète (Units 9-16)

### **Semaine 3 : Vie Pratique**
- Lun-Ven : Section 3 complète (Units 17-24)

### **Semaine 4 : Culture**
- Lun-Ven : Section 4 complète (Units 25-32)

### **Semaine 5-6 : Maîtrise**
- Sections 5-6 (Units 33-48)
- Tests et optimisations

### **Semaine 7-8 : Lancement**
- Beta testing, corrections finales
- Documentation et déploiement

---

## 🎯 SUCCESS METRICS

**Objectif Final :** Application luxembourgeoise de référence avec 48 unités A1→B2, engagement utilisateur optimal, et authenticité culturelle maximale.

**Critères de succès :**
- ✅ 48 unités pédagogiquement validées
- ✅ UX mobile-first dark theme parfaite
- ✅ Performance technique excellente
- ✅ Contextes culturels authentiques
- ✅ Progression CEFR certifiée A1→B2