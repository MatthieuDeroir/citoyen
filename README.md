# Citoyen — préparation à l'examen civique

Une leçon de 15 questions par jour (environ 7 minutes), au format exact de l'examen civique de
naturalisation, et la date à laquelle on sera prêt. Contenu tiré du Livret du citoyen 2026
(ministère de l'Intérieur).

## Principe

- **Leçon du jour** : 15 QCM. Au moins une par jour pour garder la série, autant qu'on veut ensuite.
  Elle mélange les révisions dues, des pièges (variantes de questions déjà acquises) et des
  questions nouvelles, prises là où elles rapportent le plus de points à l'examen.
- **Toujours difficile** : distracteurs proches, difficulté réglée sur la réussite des 7 derniers
  jours (cible ≈ 70 %, plus de pièges au-delà de 85 %).
- **Progrès = score attendu sur 40**, par thème, selon la répartition officielle (28 questions de
  connaissance, 12 mises en situation, admis à 32/40), avec la chance d'admission.
- **Date d'examen calculée** : droite de base à 80 % de 15 = 12 questions acquises par jour (à
  l'image des 32/40), puis rythmes réels nets des oublis (depuis le début, 30 jours, 7 jours).
- **Examen blanc** hebdomadaire : 40 questions, 45 minutes. Rappel push vers midi et/ou 18 h si la
  leçon du jour n'est pas faite.

## Contenu (`src/content/questions/`)

676 QCM au format `Question` (`src/content/types.ts`), la bonne réponse toujours en premier :

- les **258 questions officielles** de la banque du ministère (12 décembre 2025), intitulés et
  réponses intacts (vérifiés par `scripts/v2/check-officielles.ts`) ;
- **80 mises en situation** (Principes et valeurs, Droits et devoirs : la banque des situations
  n'est pas publiée) ;
- **208 variantes** des questions officielles (même savoir, autre angle) et des questions du
  livret hors banque ; difficulté de 1 à 3, page du livret pour chaque question.

Les questions qui comptent pour la date : banque officielle + mises en situation (338).

## Moteur (`src/lib/memoire.ts`, fonctions pures)

La mémoire n'est pas stockée : elle se **rejoue depuis le journal des réponses** (`attempts`).
Une question est *acquise* si la dernière réponse est juste, *maîtrisée* si elle est réussie à
nouveau au moins 7 jours après, sans erreur entre-temps. Les leçons sont figées dans `lecons`
(plan, ordre des choix, score attendu au départ) et se reprennent sur tout appareil.

## Stack

Next.js 16 (App Router) · Tailwind CSS 4 · Motion · Turso (libsql) + Drizzle · Auth.js v5 (Google) ·
Web Push · Vercel (cron)

## Démarrer en local

```bash
npm install
cp .env.example .env.local   # puis remplir (voir ci-dessous)
npx drizzle-kit push          # crée les tables (local.db si TURSO_DATABASE_URL absent)
npm run dev -- -p 3123        # le port 3000 sert souvent un autre projet
```

| Variable | Rôle |
|---|---|
| `AUTH_SECRET` | `npx auth secret` |
| `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` | OAuth Google |
| `AUTH_DEV_BYPASS=1` | connexion locale sans Google (développement uniquement) |
| `NEXT_PUBLIC_VAPID_PUBLIC_KEY` / `VAPID_PRIVATE_KEY` / `VAPID_SUBJECT` | rappels push |
| `CRON_SECRET` | protège `/api/cron/reminders` |
| `TURSO_DATABASE_URL` / `TURSO_AUTH_TOKEN` | prod uniquement — en local, `local.db` |

## Scripts

- `npm run validate` : intégrité des questions et des 258 intitulés officiels
- `npm test` : simulation du moteur (40 jours de leçons, score attendu, projections)
- `scripts/v2/test-lecon-db.mts` : déroule une leçon contre une **copie** de la base locale

## Déployer

Toujours sauvegarder la base Turso avant une modification de schéma
(`turso db shell citoyen .dump > backups/turso-<date>.sql`), puis `npx drizzle-kit push` avec les
variables Turso. Les changements de la v2 sont additifs (table `lecons`, colonnes
`attempts.lecon_id` et `user_stats.reminder_slots`).
