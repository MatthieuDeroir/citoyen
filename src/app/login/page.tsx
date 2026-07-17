import { redirect } from "next/navigation";
import { auth, signIn } from "@/lib/auth";
import { LogoMark } from "@/components/ui/Logo";

export const metadata = { title: "Connexion" };

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) redirect("/dashboard");

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="space-y-4">
        <LogoMark className="mx-auto size-24" />
        <h1 className="text-3xl font-black tracking-tight">
          Citoyen<span className="text-accent">.</span>
        </h1>
        <p className="text-muted">
          Entraîne-toi au Livret du citoyen : cartes, QCM et exercices corrigés
          pour préparer l&apos;examen civique et l&apos;entretien de naturalisation.
        </p>
      </div>

      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/dashboard" });
        }}
        className="w-full max-w-xs"
      >
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-3.5 font-semibold text-on-primary shadow-lg shadow-primary/25 transition-transform active:scale-[0.98]"
        >
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
            <path
              fill="currentColor"
              d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81"
            />
          </svg>
          Continuer avec Google
        </button>
      </form>

      <p className="text-xs text-muted">
        Ta progression est sauvegardée et synchronisée entre tes appareils.
      </p>
    </main>
  );
}
