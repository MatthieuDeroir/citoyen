# Citoyen — Entraînement au Livret du citoyen 2026

Application d'entraînement à l'examen civique et à l'entretien de naturalisation, basée sur le Livret du citoyen (édition mai 2026, Ministère de l'Intérieur).

## Fonctionnalités

- **Cartes de révision** avec répétition espacée (SM-2 simplifié) — 233 cartes
- **QCM** corrigés instantanément — 158 questions
- **Questions ouvertes** corrigées par IA (Mistral Small), style entretien préfecture — 55 questions
- **Textes à trous** à correction hybride (locale + IA) — 46 exercices
- **Examen blanc** au format officiel : 40 questions, 45 min, admis à 32/40 (arrêté du 10 octobre 2025), tiré des **258 questions officielles** du ministère de l'Intérieur (banque du 12 décembre 2025) avec la répartition réglementaire par thème
- **Gamification** : parcours d'unités déverrouillables, XP et objectif quotidien, streak avec gels, badges
- Comptes Google, progression synchronisée (Turso), mobile-first, dark mode

## Stack

Next.js (App Router) · Tailwind CSS 4 · Motion · Turso (libsql) + Drizzle · Auth.js v5 (Google) · API Mistral

## Démarrer en local

```bash
npm install
cp .env.example .env.local   # puis remplir (voir ci-dessous)
npx drizzle-kit push          # crée les tables (local.db si TURSO_DATABASE_URL absent)
npm run dev
```

Variables d'environnement (`.env.local`) :

| Variable | Rôle |
|---|---|
| `AUTH_SECRET` | `npx auth secret` |
| `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` | OAuth Google — redirect URI `http://localhost:3000/api/auth/callback/google` |
| `MISTRAL_API_KEY` | Correction IA (console.mistral.ai) |
| `TURSO_DATABASE_URL` / `TURSO_AUTH_TOKEN` | Prod uniquement — en local, un fichier `local.db` est utilisé |

## Déployer sur Vercel

1. Créer une base sur [turso.tech](https://turso.tech) : `turso db create citoyen` puis récupérer l'URL et un token.
2. `npx drizzle-kit push` avec les variables Turso pour créer les tables.
3. Importer le repo GitHub dans Vercel, renseigner les 6 variables d'environnement.
4. Ajouter `https://<domaine>/api/auth/callback/google` aux redirect URIs Google.

## Scripts

- `npm run validate` — intégrité du contenu (Zod : IDs uniques, trous cohérents…)
- `npx tsx scripts/test-srs.ts` — tests SRS/XP/streak contre la base locale
- `npx tsx --env-file=.env.local scripts/test-grading.ts` — tests de correction (dont appel Mistral réel)

## Contenu

Le contenu pédagogique (`src/content/`) est transcrit du livret officiel, sous-thème par sous-thème, avec la page source de chaque item. Le PDF source reste hors du dépôt.
