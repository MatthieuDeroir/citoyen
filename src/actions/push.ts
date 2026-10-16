"use server";

import { and, eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { pushSubscriptions, userStats } from "@/db/schema";

interface SubscriptionPayload {
  endpoint: string;
  keys: { p256dh: string; auth: string };
}

/** Enregistre (ou met à jour) l'abonnement push de l'utilisateur. */
export async function savePushSubscription(sub: SubscriptionPayload) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Non authentifié");
  if (!sub?.endpoint || !sub.keys?.p256dh || !sub.keys?.auth) {
    throw new Error("Abonnement invalide");
  }

  await db
    .insert(pushSubscriptions)
    .values({
      endpoint: sub.endpoint,
      userId,
      p256dh: sub.keys.p256dh,
      auth: sub.keys.auth,
      createdAt: new Date(),
    })
    .onConflictDoUpdate({
      target: pushSubscriptions.endpoint,
      set: { userId, p256dh: sub.keys.p256dh, auth: sub.keys.auth },
    });
  return { ok: true };
}

/** Supprime l'abonnement push (désactivation des rappels sur cet appareil). */
export async function deletePushSubscription(endpoint: string) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Non authentifié");

  await db
    .delete(pushSubscriptions)
    .where(
      and(eq(pushSubscriptions.endpoint, endpoint), eq(pushSubscriptions.userId, userId)),
    );
  return { ok: true };
}

const CRENEAUX = ["midi", "soir", "midi,soir"] as const;

/** Créneaux des rappels : vers midi, vers 18 h, ou les deux. */
export async function enregistrerCreneaux(slots: string) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Non authentifié");
  if (!(CRENEAUX as readonly string[]).includes(slots)) throw new Error("Créneau invalide");
  await db.update(userStats).set({ reminderSlots: slots }).where(eq(userStats.userId, userId));
  return { ok: true };
}
