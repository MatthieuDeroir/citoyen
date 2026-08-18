/** Jour "YYYY-MM-DD" en Europe/Paris (Vercel tourne en UTC). */
export function parisDay(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("fr-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function parisYesterday(date: Date = new Date()): string {
  return parisDay(new Date(date.getTime() - 24 * 60 * 60 * 1000));
}

/** Nombre de jours entre deux jours "YYYY-MM-DD" (b - a). */
export function daysBetween(a: string, b: string): number {
  const ta = new Date(`${a}T00:00:00Z`).getTime();
  const tb = new Date(`${b}T00:00:00Z`).getTime();
  return Math.round((tb - ta) / (24 * 60 * 60 * 1000));
}
