import type { Blank } from "@/content/types";

/** Normalisation : minuscules, sans accents, espaces réduits, articles initiaux retirés. */
export function normalize(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[''`]/g, "'")
    .replace(/^(le |la |les |l'|un |une |des |du |de la |de l')/, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Distance de Levenshtein bornée à 2 (suffisant pour la tolérance typo). */
function levenshtein(a: string, b: string): number {
  if (Math.abs(a.length - b.length) > 2) return 3;
  const dp = Array.from({ length: a.length + 1 }, (_, i) => i);
  for (let j = 1; j <= b.length; j++) {
    let prev = dp[0];
    dp[0] = j;
    for (let i = 1; i <= a.length; i++) {
      const tmp = dp[i];
      dp[i] = Math.min(
        dp[i] + 1,
        dp[i - 1] + 1,
        prev + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      prev = tmp;
    }
  }
  return dp[a.length];
}

/**
 * Correction locale d'un trou.
 * - strict : égalité exacte après trim/minuscules (dates, chiffres, noms propres)
 * - sinon : normalisation + Levenshtein ≤ 1 pour les mots de 5+ lettres
 */
export function matchBlank(blank: Blank, answer: string): boolean {
  if (blank.strict) {
    const a = answer.trim().toLowerCase();
    return blank.accepted.some((acc) => acc.trim().toLowerCase() === a);
  }
  const a = normalize(answer);
  if (a.length === 0) return false;
  return blank.accepted.some((acc) => {
    const n = normalize(acc);
    if (n === a) return true;
    if (n.length >= 5 && a.length >= 3) return levenshtein(n, a) <= 1;
    return false;
  });
}
