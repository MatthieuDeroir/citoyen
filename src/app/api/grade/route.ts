import { NextResponse } from "next/server";
import { z } from "zod";
import { eq, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { attempts, userStats } from "@/db/schema";
import { getOuverte, getTrous } from "@/content";
import { matchBlank } from "@/lib/grading/local";
import { gradeOuverte, gradeTrousRemainder } from "@/lib/grading/mistral";
import { addXp, markActivity, XP } from "@/lib/xp";

export const runtime = "nodejs";
export const maxDuration = 30;

const bodySchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("ouverte"),
    exerciseId: z.string(),
    answer: z.string().min(1).max(1500),
  }),
  z.object({
    type: z.literal("trous"),
    exerciseId: z.string(),
    answers: z.record(z.string(), z.string().max(200)),
  }),
]);

/* Rate-limit applicatif simple (par instance) : 20 corrections/minute/utilisateur. */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 20;
const hits = new Map<string, number[]>();

function rateLimited(userId: string): boolean {
  const now = Date.now();
  const list = (hits.get(userId) ?? []).filter((t) => now - t < WINDOW_MS);
  if (list.length >= MAX_PER_WINDOW) return true;
  list.push(now);
  hits.set(userId, list);
  return false;
}

async function persistAttempt(params: {
  userId: string;
  exerciseId: string;
  exerciseType: "ouverte" | "trous";
  userAnswer: string;
  verdict: "correct" | "partial" | "incorrect";
  score: number;
  aiFeedback?: string;
  gradedBy: "local" | "ai";
}) {
  await db.insert(attempts).values({ ...params, createdAt: new Date() });
  await db
    .update(userStats)
    .set({ totalAttempts: sql`${userStats.totalAttempts} + 1` })
    .where(eq(userStats.userId, params.userId));
}

export async function POST(req: Request) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  if (rateLimited(userId)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  const body = parsed.data;

  /* ---------- Question ouverte : Mistral systématique ---------- */
  if (body.type === "ouverte") {
    const exercise = getOuverte(body.exerciseId);
    if (!exercise) return NextResponse.json({ error: "not_found" }, { status: 404 });

    try {
      const result = await gradeOuverte({
        question: exercise.question,
        expectedAnswer: exercise.expectedAnswer,
        keyPoints: exercise.keyPoints,
        userAnswer: body.answer,
      });

      await persistAttempt({
        userId,
        exerciseId: exercise.id,
        exerciseType: "ouverte",
        userAnswer: body.answer,
        verdict: result.verdict,
        score: result.score,
        aiFeedback: result.feedback,
        gradedBy: "ai",
      });

      const xp =
        result.verdict === "correct"
          ? XP.ouverteCorrect
          : result.verdict === "partial"
            ? XP.ouvertePartial
            : 0;
      if (xp > 0) await addXp(userId, xp, "ouverte");
      else await markActivity(userId);

      return NextResponse.json({
        gradedBy: "ai",
        verdict: result.verdict,
        score: result.score,
        feedback: result.feedback,
        expectedAnswer: exercise.expectedAnswer,
        xp,
      });
    } catch {
      // API indisponible : mode dégradé, l'utilisateur s'auto-évalue
      return NextResponse.json({
        gradedBy: "self",
        expectedAnswer: exercise.expectedAnswer,
      });
    }
  }

  /* ---------- Texte à trous : local d'abord, Mistral en fallback ---------- */
  const exercise = getTrous(body.exerciseId);
  if (!exercise) return NextResponse.json({ error: "not_found" }, { status: 404 });

  const results = new Map<number, { correct: boolean; comment?: string }>();
  const toJudge: { index: number; accepted: string[]; candidat: string }[] = [];

  for (const blank of exercise.blanks) {
    const answer = body.answers[String(blank.index)] ?? "";
    if (matchBlank(blank, answer)) {
      results.set(blank.index, { correct: true });
    } else if (blank.strict || answer.trim() === "") {
      results.set(blank.index, { correct: false });
    } else {
      toJudge.push({ index: blank.index, accepted: blank.accepted, candidat: answer });
    }
  }

  let gradedBy: "local" | "ai" = "local";
  if (toJudge.length > 0) {
    const filledTemplate = exercise.template.replace(/\{\{(\d+)\}\}/g, (_, n) => {
      const idx = Number(n);
      const r = results.get(idx);
      if (r?.correct) return body.answers[String(idx)] ?? "___";
      return "___";
    });
    try {
      const aiResult = await gradeTrousRemainder({ filledTemplate, toJudge });
      gradedBy = "ai";
      for (const b of aiResult.blanks) {
        if (toJudge.some((t) => t.index === b.index)) {
          results.set(b.index, { correct: b.correct, comment: b.comment });
        }
      }
    } catch {
      // API indisponible : les trous ambigus sont comptés faux mais signalés
      for (const t of toJudge) {
        results.set(t.index, {
          correct: false,
          comment: "Non vérifiable automatiquement — compare avec la réponse attendue.",
        });
      }
    }
  }

  const blanks = exercise.blanks.map((b) => ({
    index: b.index,
    correct: results.get(b.index)?.correct ?? false,
    comment: results.get(b.index)?.comment,
    accepted: b.accepted[0],
  }));
  const correctCount = blanks.filter((b) => b.correct).length;
  const score = Math.round((correctCount / blanks.length) * 100);
  const verdict: "correct" | "partial" | "incorrect" =
    correctCount === blanks.length ? "correct" : correctCount >= blanks.length / 2 ? "partial" : "incorrect";

  await persistAttempt({
    userId,
    exerciseId: exercise.id,
    exerciseType: "trous",
    userAnswer: JSON.stringify(body.answers),
    verdict,
    score,
    gradedBy,
  });

  const xp =
    verdict === "correct" ? XP.trousCorrect : verdict === "partial" ? XP.trousPartial : 0;
  if (xp > 0) await addXp(userId, xp, "trous");
  else await markActivity(userId);

  return NextResponse.json({ gradedBy, verdict, score, blanks, xp });
}
