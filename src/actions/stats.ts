"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { userStats } from "@/db/schema";

const GOALS = [20, 50, 80, 120];

/** Change l'objectif XP quotidien (paramétrable depuis l'accueil). */
export async function setDailyGoal(goal: number) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Non authentifié");
  if (!GOALS.includes(goal)) throw new Error("Objectif invalide");

  await db.update(userStats).set({ dailyXpGoal: goal }).where(eq(userStats.userId, userId));
  revalidatePath("/dashboard");
  return { ok: true };
}
