/** « samedi 7 novembre » (avec l'année si ce n'est pas l'année en cours). */
export function formatJour(day: string, now: Date = new Date()): string {
  const d = new Date(`${day}T12:00:00Z`);
  const memeAnnee = d.getUTCFullYear() === now.getUTCFullYear();
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    ...(memeAnnee ? {} : { year: "numeric" }),
    timeZone: "UTC",
  }).format(d);
}

/** « 7 nov. » pour les axes et étiquettes. */
export function formatJourCourt(day: string): string {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", timeZone: "UTC" }).format(
    new Date(`${day}T12:00:00Z`),
  );
}

export const fmt1 = (n: number) =>
  n.toLocaleString("fr-FR", { maximumFractionDigits: 1, minimumFractionDigits: 1 });
