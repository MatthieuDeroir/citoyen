# Citoyen v2 — roadmap

Refonte décidée le 2026-10-16 : une app directe, sur le modèle de Rusky v2.

## Principe

- **Une leçon = 15 questions, environ 7 minutes.** Au moins une par jour (la série), autant que
  voulu ensuite (« Encore une »).
- **Uniquement comme à l'examen** : QCM à 4 choix, connaissances et mises en situation. Plus de
  cartes, de textes à trous ni de questions ouvertes.
- **Toujours difficile** : réussite visée autour de 70 % ; au-delà de 85 % sur une semaine, la
  difficulté monte. Distracteurs proches, variantes des annales, pièges.
- **Progrès = score attendu sur 40**, par thème (répartition officielle 11 · 6 · 11 · 8 · 4),
  face au seuil de 32.
- **3 onglets** : Aujourd'hui · Progrès · Livret.

## Date d'examen : calculée, jamais saisie

- *Apprise* : réussie en leçon. *Maîtrisée* : réussie à nouveau au moins 7 jours plus tard sans
  erreur entre-temps. Un oubli fait redescendre la question : le rythme est net des oublis.
- Périmètre compté : banque officielle (258 annales) + mises en situation. Les variantes
  entraînent mais ne comptent pas.
- **Projection de base : 80 % de 15 = 12 questions par jour**, à l'image des 32/40 exigés
  (258 / 12 ≈ 22 jours).
- Puis recalage sur le rythme réel : moyennes depuis le début, sur 30 jours et sur 7 jours, une
  date par rythme.
- Deux jalons : **admissible** (score attendu ≥ 32/40) et **banque maîtrisée** (100 %).

## Phases

0. **Cadrage et sauvegarde** — dump Turso + copie de `local.db` (`backups/`), branche `v2`.
1. **Modèle de contenu unique** — type `Question` (thème, notion, type connaissance / situation,
   difficulté 1-3, page source, explication). Annales converties telles quelles ; cartes et
   trous réécrits en QCM difficiles ou supprimés ; audit de difficulté relu à la main.
2. **Moteur** — répétition espacée par question réglée sur le taux d'oubli ; maîtrise par notion
   et par thème ; score attendu ; rythme net et projections ; composition de la leçon (révisions
   dues d'abord, puis nouvelles questions des thèmes faibles, puis pièges).
3. **Écran de leçon** — un seul lecteur QCM, clavier, correction immédiate avec explication et
   page du livret ; bilan avec la variation des 5 thèmes et « Encore une ».
4. **Progrès** — score attendu, probabilité d'admission, courbe des questions maîtrisées, droite
   de base à 12/jour, projections par rythme, détail par notion, examens blancs.
5. **Contenu exigeant** (continu) — mises en situation (12 sur 40 à l'examen, absentes de la
   banque publiée), variantes des annales générées hors ligne puis relues, distracteurs proches
   partout.
6. **Examen, rappels, mise en production** — examen blanc 40 questions / 45 min suggéré chaque
   semaine ; rappel push à l'heure choisie ; import de l'historique (migration additive après
   sauvegarde) ; déploiement Vercel ; suppression du code mort.

## Décisions

- App ouverte à tous (connexion Google), sans classement.
- Retirés : XP, niveaux, titres, badges, classement, examen ultime, parcours, page des erreurs,
  questions ouvertes corrigées par IA.
- Retirés temporairement : radio et Marseillaise.
- Gardés : Turso + Drizzle, Auth.js, PWA, DSFR, les 258 annales et leurs distracteurs, le
  lecteur du livret, les rappels push.
