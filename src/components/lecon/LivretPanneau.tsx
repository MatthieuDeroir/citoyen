"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageZoomable } from "@/components/livret/PageZoomable";

const PAGES = 83;

/**
 * Page du livret ouverte PAR-DESSUS la leçon : aucune navigation, donc on
 * retrouve la leçon exactement où on l'a laissée en fermant le panneau.
 */
export function LivretPanneau({ page, titre, onClose }: { page: number; titre?: string; onClose: () => void }) {
  const [n, setN] = useState(page);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setN((k) => Math.max(1, k - 1));
      if (e.key === "ArrowRight") setN((k) => Math.min(PAGES, k + 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Livret du citoyen, page ${n}`}
      className="fixed inset-0 z-50 flex flex-col bg-background"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
    >
      <header className="mx-auto flex w-full max-w-lg items-center gap-3 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2">
        <button
          onClick={onClose}
          aria-label="Revenir à la leçon"
          className="rounded-full p-2 text-muted transition-colors hover:text-foreground"
        >
          <X className="size-6" />
        </button>
        <div className="min-w-0 flex-1">
          <p className="font-bold">Livret, page {n}</p>
          {titre && n === page && <p className="truncate text-xs text-muted">{titre}</p>}
        </div>
      </header>
      <div className="mx-auto min-h-0 w-full max-w-lg flex-1 overflow-x-hidden overflow-y-auto overscroll-contain px-4">
        <PageZoomable key={n} n={n} priorite />
      </div>
      <nav className="mx-auto flex w-full max-w-lg items-center justify-between gap-3 px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <button
          onClick={() => setN((k) => Math.max(1, k - 1))}
          disabled={n <= 1}
          className="flex items-center gap-1 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-semibold disabled:opacity-40"
        >
          <ChevronLeft className="size-4" /> {n - 1 >= 1 ? n - 1 : ""}
        </button>
        <button
          onClick={onClose}
          className="flex-1 rounded-2xl bg-primary py-3 font-semibold text-on-primary transition-transform active:scale-[0.98]"
        >
          Revenir à la leçon
        </button>
        <button
          onClick={() => setN((k) => Math.min(PAGES, k + 1))}
          disabled={n >= PAGES}
          className="flex items-center gap-1 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-semibold disabled:opacity-40"
        >
          {n + 1 <= PAGES ? n + 1 : ""} <ChevronRight className="size-4" />
        </button>
      </nav>
    </motion.div>
  );
}
