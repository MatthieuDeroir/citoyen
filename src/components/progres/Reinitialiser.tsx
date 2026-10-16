"use client";

import { useState } from "react";
import { RotateCcw, TriangleAlert, Loader2 } from "lucide-react";
import { reinitialiserCompte } from "@/actions/compte";
import { MOT_CONFIRMATION, confirmationValide } from "@/lib/compte";

/**
 * Réinitialisation du compte en deux temps : un premier clic ouvre
 * l'avertissement, puis il faut recopier le mot de confirmation.
 */
export function Reinitialiser() {
  const [etape, setEtape] = useState<"ferme" | "confirmer">("ferme");
  const [saisie, setSaisie] = useState("");
  const [enCours, setEnCours] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const ok = confirmationValide(saisie);

  async function confirmer() {
    setEnCours(true);
    setErreur(null);
    try {
      await reinitialiserCompte(saisie);
      // copies locales des leçons et examen en cours : elles appartiennent à l'ancienne progression
      try {
        for (const k of Object.keys(localStorage)) if (k.startsWith("citoyen:")) localStorage.removeItem(k);
      } catch {}
      // rechargement complet : le cache client de l'ancienne progression part avec
      window.location.assign("/");
    } catch {
      setErreur("La réinitialisation a échoué, rien n'a été supprimé. Réessaie.");
      setEnCours(false);
    }
  }

  if (etape === "ferme") {
    return (
      <button
        onClick={() => setEtape("confirmer")}
        className="flex w-full items-center justify-center gap-2 rounded-2xl border border-accent/40 bg-surface py-3 text-sm font-semibold text-accent"
      >
        <RotateCcw className="size-4" /> Réinitialiser ma progression
      </button>
    );
  }

  return (
    <section
      ref={(el) => el?.scrollIntoView({ behavior: "smooth", block: "center" })}
      role="alertdialog"
      aria-labelledby="reinit-titre"
      className="space-y-3 rounded-card border-2 border-accent bg-accent-soft p-4 text-sm"
    >
      <h2 id="reinit-titre" className="flex items-center gap-2 font-bold text-accent">
        <TriangleAlert className="size-5" /> Repartir de zéro ?
      </h2>
      <p>
        Toutes tes réponses, leçons, examens blancs et ta série seront effacés. Ta date d&apos;examen
        repartira d&apos;aujourd&apos;hui. Ton compte et tes rappels sont conservés.
      </p>
      <label className="block">
        <span className="font-semibold">
          Pour confirmer, écris <strong>{MOT_CONFIRMATION}</strong> :
        </span>
        <input
          value={saisie}
          onChange={(e) => setSaisie(e.target.value)}
          autoComplete="off"
          autoCapitalize="characters"
          spellCheck={false}
          className="mt-1.5 w-full rounded-xl border border-border bg-surface px-3 py-2.5 font-semibold tracking-wide"
        />
      </label>
      {erreur && <p className="font-semibold text-accent">{erreur}</p>}
      <div className="flex gap-2">
        <button
          onClick={() => {
            setEtape("ferme");
            setSaisie("");
          }}
          disabled={enCours}
          className="flex-1 rounded-xl border border-border bg-surface py-2.5 font-semibold"
        >
          Annuler
        </button>
        <button
          onClick={confirmer}
          disabled={!ok || enCours}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent py-2.5 font-semibold text-white disabled:opacity-40"
        >
          {enCours && <Loader2 className="size-4 animate-spin" />} Tout effacer
        </button>
      </div>
    </section>
  );
}
