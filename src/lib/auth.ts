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

export const { handlers, auth, signIn, signOut } = NextAuth({
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
