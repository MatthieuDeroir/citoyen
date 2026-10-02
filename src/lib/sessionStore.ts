"use client";

import { useMemo, useSyncExternalStore } from "react";

/**
 * Sessions en cours (examen blanc, examen ultime, QCM) sauvegardées dans le
 * navigateur, pour pouvoir les reprendre après avoir quitté la page par
 * mégarde. Volontairement local (localStorage) : c'est un confort par
 * appareil, la progression elle-même reste en base.
 */

const PREFIX = "citoyen:session:";
const CHANGE_EVENT = "citoyen:session-change";
/** Au-delà, une session abandonnée n'est plus proposée à la reprise. */
const TTL_MS = 14 * 24 * 60 * 60 * 1000;

export interface SavedSession<T = unknown> {
  key: string;
  /** Page qui permet de reprendre la session. */
  href: string;
  title: string;
  /** Avancement lisible, ex. « 12/40 répondues ». */
  progress: string;
  savedAt: number;
  state: T;
}

function read(key: string): SavedSession | null {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (!raw) return null;
    const saved = JSON.parse(raw) as SavedSession;
    if (Date.now() - saved.savedAt > TTL_MS) {
      localStorage.removeItem(PREFIX + key);
      return null;
    }
    return saved;
  } catch {
    return null;
  }
}

export function saveSession<T>(session: Omit<SavedSession<T>, "savedAt">): void {
  try {
    localStorage.setItem(
      PREFIX + session.key,
      JSON.stringify({ ...session, savedAt: Date.now() }),
    );
    window.dispatchEvent(new Event(CHANGE_EVENT));
  } catch {
    // stockage plein ou bloqué (navigation privée) : pas de reprise possible
  }
}

export function clearSession(key: string): void {
  try {
    localStorage.removeItem(PREFIX + key);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  } catch {
    // stockage inaccessible : rien à effacer
  }
}

function subscribe(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

/** Liste des clés de session sauvegardées, sérialisée (snapshot stable). */
function keysSnapshot(): string {
  try {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k?.startsWith(PREFIX)) keys.push(k.slice(PREFIX.length));
    }
    return keys.sort().join("\n");
  } catch {
    return "";
  }
}

/**
 * Session sauvegardée pour `key` (null côté serveur et au premier rendu
 * client, pour ne pas casser l'hydratation). Le snapshot est la chaîne brute
 * du localStorage : stable tant que rien ne change.
 */
export function useSavedSession<T>(key: string | undefined): SavedSession<T> | null {
  const raw = useSyncExternalStore(
    subscribe,
    () => {
      if (!key) return null;
      try {
        return localStorage.getItem(PREFIX + key);
      } catch {
        return null;
      }
    },
    () => null,
  );
  return useMemo(() => (raw && key ? (read(key) as SavedSession<T> | null) : null), [raw, key]);
}

/** Toutes les sessions en cours, de la plus récente à la plus ancienne. */
export function useSavedSessions(): SavedSession[] {
  const keys = useSyncExternalStore(subscribe, keysSnapshot, () => "");
  return useMemo(
    () =>
      keys
        .split("\n")
        .filter(Boolean)
        .map(read)
        .filter((s): s is SavedSession => s !== null)
        .sort((a, b) => b.savedAt - a.savedAt),
    [keys],
  );
}
