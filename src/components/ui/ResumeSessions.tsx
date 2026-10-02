"use client";

import Link from "next/link";
import { PlayCircle, X } from "lucide-react";
import { clearSession, useSavedSessions } from "@/lib/sessionStore";

/**
 * Cartes « Reprendre » pour les sessions laissées en cours (examen blanc,
 * examen ultime, QCM). `only` restreint aux clés qui commencent par ce préfixe.
 */
export function ResumeSessions({ only }: { only?: string }) {
  const sessions = useSavedSessions().filter((s) => !only || s.key.startsWith(only));
  if (sessions.length === 0) return null;

  return (
    <section className="space-y-2">
      {sessions.map((s) => (
        <div
          key={s.key}
          className="flex items-center gap-2 rounded-card border-2 border-gold/40 bg-gold-soft p-1.5 pl-4"
        >
          <Link
            href={s.href}
            className="flex min-w-0 flex-1 items-center gap-3 py-2 transition-transform active:scale-[0.98]"
          >
            <PlayCircle className="size-7 shrink-0 text-gold" />
            <span className="min-w-0 flex-1">
              <span className="block truncate font-bold">Reprendre : {s.title}</span>
              <span className="block text-sm text-muted">{s.progress}</span>
            </span>
          </Link>
          <button
            onClick={() => clearSession(s.key)}
            aria-label={`Abandonner « ${s.title} »`}
            className="rounded-full p-2 text-muted transition-colors hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>
      ))}
    </section>
  );
}
