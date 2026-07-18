import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  users,
  accounts,
  sessions,
  verificationTokens,
  userStats,
} from "@/db/schema";

const nextAuth = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [Google],
  pages: {
    signIn: "/login",
  },
  events: {
    async createUser({ user }) {
      if (!user.id) return;
      const existing = await db
        .select({ userId: userStats.userId })
        .from(userStats)
        .where(eq(userStats.userId, user.id));
      if (existing.length === 0) {
        await db.insert(userStats).values({ userId: user.id });
      }
    },
  },
});

export const { handlers, signIn, signOut } = nextAuth;

// Bypass d'auth local : AUTH_DEV_BYPASS=1 dans .env.local, impossible en prod
// (NODE_ENV vaut "production" sur Vercel, et la variable n'y est pas définie).
const devBypass =
  process.env.AUTH_DEV_BYPASS === "1" && process.env.NODE_ENV === "development";

const DEV_USER = {
  id: "dev-local",
  name: "Dev Local",
  email: "dev@localhost",
  image: null,
};

let devUserSeeded = false;

async function ensureDevUser() {
  if (devUserSeeded) return;
  const existing = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.id, DEV_USER.id));
  if (existing.length === 0) {
    await db.insert(users).values(DEV_USER);
    await db.insert(userStats).values({ userId: DEV_USER.id });
  }
  devUserSeeded = true;
}

async function devAuth() {
  await ensureDevUser();
  return {
    user: DEV_USER,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };
}

export const auth: typeof nextAuth.auth = devBypass
  ? (devAuth as unknown as typeof nextAuth.auth)
  : nextAuth.auth;
