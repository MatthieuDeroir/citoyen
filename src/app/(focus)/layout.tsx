import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

/** Leçon et examen : plein écran, sans barre de navigation. */
export default async function FocusLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="mx-auto flex h-dvh w-full max-w-lg flex-col overflow-hidden px-4 pt-[max(0.5rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]">
      {children}
    </div>
  );
}
