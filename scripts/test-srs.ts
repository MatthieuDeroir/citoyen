/** Test manuel de la logique SRS + XP + streak contre local.db (usage : npx tsx scripts/test-srs.ts) */
import { db } from "../src/lib/db";
import { users, userStats, cardProgress } from "../src/db/schema";
import { eq } from "drizzle-orm";
import { review, nextDueDate, INITIAL_STATE } from "../src/lib/srs";
import { addXp, getTodayXp } from "../src/lib/xp";
import { getDailyQueue } from "../src/lib/queue";

const TEST_ID = "test-user-srs";

async function main() {
  // reset
  await db.delete(users).where(eq(users.id, TEST_ID));
  await db.insert(users).values({ id: TEST_ID, name: "Test", email: "test@srs.local" });
  await db.insert(userStats).values({ userId: TEST_ID });

  // --- SRS pur ---
  let state = INITIAL_STATE;
  state = review(state, "good");
  console.assert(state.intervalDays === 1, "1re review good → 1 jour");
  state = review(state, "good");
  console.assert(state.intervalDays === 3, "2e review good → 3 jours");
  state = review(state, "good");
  console.assert(state.intervalDays === Math.round(3 * 2.5), "3e review good → interval × ease");
  const lapsed = review(state, "again");
  console.assert(lapsed.intervalDays === 0 && lapsed.lapses === 1 && lapsed.ease === 2.3, "again → reset + ease -0.2");
  console.log("✓ SM-2 : intervalles corrects", { after3Good: state, afterAgain: lapsed });

  // --- persistance progress ---
  const now = new Date();
  const s1 = review(INITIAL_STATE, "good");
  await db.insert(cardProgress).values({
    userId: TEST_ID,
    cardId: "p1-s1-fc-001",
    ...s1,
    dueAt: nextDueDate(s1, now),
    lastReviewedAt: now,
  });
  const row = (await db.select().from(cardProgress).where(eq(cardProgress.userId, TEST_ID)))[0];
  const dueDiffH = (row.dueAt.getTime() - now.getTime()) / 3600_000;
  console.assert(dueDiffH > 23 && dueDiffH < 25, `dueAt ≈ +24h (${dueDiffH.toFixed(1)}h)`);
  console.log("✓ cardProgress persisté, dueAt à +24h");

  // --- file du jour : la carte revue n'est plus due, les nouvelles sont capées à 10 ---
  const queue = await getDailyQueue(TEST_ID);
  console.assert(queue.dueCount === 0, "aucune carte due");
  console.assert(queue.newCount === 10, `10 nouvelles (reçu ${queue.newCount})`);
  console.assert(!queue.cards.some((c) => c.id === "p1-s1-fc-001"), "carte revue exclue des nouvelles");
  console.log("✓ file du jour :", { due: queue.dueCount, nouvelles: queue.newCount });

  // --- XP + streak : atteindre l'objectif (50 XP) déclenche le streak ---
  for (let i = 0; i < 5; i++) await addXp(TEST_ID, 10, "review");
  const todayXp = await getTodayXp(TEST_ID);
  const stats = (await db.select().from(userStats).where(eq(userStats.userId, TEST_ID)))[0];
  console.assert(todayXp === 50, `XP du jour = 50 (reçu ${todayXp})`);
  console.assert(stats.totalXp === 50, "totalXp = 50");
  console.assert(stats.currentStreak === 1, `streak = 1 (reçu ${stats.currentStreak})`);
  console.assert(stats.lastActivityDate !== null, "lastActivityDate posée");
  console.log("✓ XP + streak :", {
    todayXp,
    streak: stats.currentStreak,
    freezes: stats.streakFreezes,
    lastActivityDate: stats.lastActivityDate,
  });

  // cleanup
  await db.delete(users).where(eq(users.id, TEST_ID));
  console.log("\n✓ Tous les tests SRS/XP/streak passent.");
}

main().then(() => process.exit(0));
