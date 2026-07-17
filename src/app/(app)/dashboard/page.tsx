import { Flame, Sparkles } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export const metadata = { title: "Accueil" };

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Logo />
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted">Bonjour 👋</p>
          <h1 className="text-2xl font-bold">Prêt à réviser ?</h1>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-gold-soft px-3 py-1.5 font-semibold text-gold">
          <Flame className="size-5" />
          <span>0</span>
        </div>
      </header>

      <section className="rounded-card border border-border bg-surface p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <Sparkles className="size-8 text-primary" />
          <div>
            <h2 className="font-semibold">Ta session du jour arrive bientôt</h2>
            <p className="text-sm text-muted">
              Le contenu du livret est en cours d&apos;intégration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
