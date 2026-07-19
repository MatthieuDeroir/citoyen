import {
  integer,
  sqliteTable,
  text,
  primaryKey,
  real,
  index,
} from "drizzle-orm/sqlite-core";
import type { AdapterAccountType } from "next-auth/adapters";

/* ---------- Tables Auth.js (schéma standard @auth/drizzle-adapter) ---------- */

export const users = sqliteTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
});

export const accounts = sqliteTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    primaryKey({ columns: [account.provider, account.providerAccountId] }),
  ],
);

export const sessions = sqliteTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export const verificationTokens = sqliteTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (vt) => [primaryKey({ columns: [vt.identifier, vt.token] })],
);

/* ---------- Tables métier ---------- */

/** État SRS (SM-2 simplifié) d'une flashcard pour un utilisateur. */
export const cardProgress = sqliteTable(
  "card_progress",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    cardId: text("card_id").notNull(), // ex. "p1-s1-fc-001" — pas de FK vers le contenu statique
    ease: real("ease").notNull().default(2.5),
    intervalDays: real("interval_days").notNull().default(0),
    repetitions: integer("repetitions").notNull().default(0),
    lapses: integer("lapses").notNull().default(0),
    dueAt: integer("due_at", { mode: "timestamp" }).notNull(),
    lastReviewedAt: integer("last_reviewed_at", { mode: "timestamp" }),
  },
  (t) => [
    primaryKey({ columns: [t.userId, t.cardId] }),
    index("idx_progress_due").on(t.userId, t.dueAt),
  ],
);

/** Tentative sur un exercice (QCM, question ouverte, texte à trous). */
export const attempts = sqliteTable(
  "attempts",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    exerciseId: text("exercise_id").notNull(),
    exerciseType: text("exercise_type", {
      enum: ["qcm", "ouverte", "trous"],
    }).notNull(),
    userAnswer: text("user_answer").notNull(), // JSON stringifié pour les trous
    verdict: text("verdict", {
      enum: ["correct", "partial", "incorrect"],
    }).notNull(),
    score: integer("score").notNull(), // 0-100
    aiFeedback: text("ai_feedback"),
    gradedBy: text("graded_by", { enum: ["local", "ai", "self"] }).notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  },
  (t) => [index("idx_attempts_user").on(t.userId, t.createdAt)],
);

/** Stats agrégées et gamification. */
export const userStats = sqliteTable("user_stats", {
  userId: text("user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  currentStreak: integer("current_streak").notNull().default(0),
  longestStreak: integer("longest_streak").notNull().default(0),
  lastActivityDate: text("last_activity_date"), // "YYYY-MM-DD" en Europe/Paris
  totalXp: integer("total_xp").notNull().default(0),
  dailyXpGoal: integer("daily_xp_goal").notNull().default(50),
  streakFreezes: integer("streak_freezes").notNull().default(2),
  totalReviews: integer("total_reviews").notNull().default(0),
  totalAttempts: integer("total_attempts").notNull().default(0),
});

/** Journal d'XP (source de vérité de l'XP du jour et de l'historique). */
export const xpEvents = sqliteTable(
  "xp_events",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    amount: integer("amount").notNull(),
    source: text("source", {
      enum: ["review", "qcm", "ouverte", "trous", "bonus"],
    }).notNull(),
    day: text("day").notNull(), // "YYYY-MM-DD" en Europe/Paris
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  },
  (t) => [index("idx_xp_user_day").on(t.userId, t.day)],
);

/** Badges débloqués (catalogue statique côté code). */
export const achievements = sqliteTable(
  "achievements",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    achievementId: text("achievement_id").notNull(),
    unlockedAt: integer("unlocked_at", { mode: "timestamp" }).notNull(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.achievementId] })],
);

/** Examens blancs passés (historique, rotation du sujet, graphe d'évolution). */
export const examens = sqliteTable(
  "examens",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    score: integer("score").notNull(),
    total: integer("total").notNull(),
    /** JSON [{ qcmId, chosenIndex|null, correct }] pour les 40 questions du sujet */
    detail: text("detail").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  },
  (t) => [index("idx_examens_user").on(t.userId, t.createdAt)],
);

/** Abonnements Web Push (rappels de streak). */
export const pushSubscriptions = sqliteTable(
  "push_subscriptions",
  {
    endpoint: text("endpoint").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    p256dh: text("p256dh").notNull(),
    auth: text("auth").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  },
  (t) => [index("idx_push_user").on(t.userId)],
);
