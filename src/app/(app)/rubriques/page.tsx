import Link from "next/link";
import { parties } from "@/content/parties";
import { PartieIcon } from "@/components/ui/PartieIcon";
import { ChevronRight } from "lucide-react";

export const metadata = { title: "Rubriques" };

export default function RubriquesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Rubriques</h1>
        <p className="mt-1 text-sm text-muted">
          Les 6 grandes parties du Livret du citoyen.
        </p>
      </header>

      <ul className="space-y-3">
        {parties.map((partie) => (
          <li key={partie.id}>
            <Link
              href={`/rubriques/${partie.slug}`}
              className="flex items-center gap-4 rounded-card border border-border bg-surface p-4 shadow-sm transition-transform active:scale-[0.98]"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <PartieIcon name={partie.icone} className="size-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{partie.titreCourt}</span>
                <span className="block truncate text-sm text-muted">
                  {partie.description}
                </span>
              </span>
              <ChevronRight className="size-5 shrink-0 text-muted" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
