import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { BottomNav } from "@/components/ui/BottomNav";

export default async function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="mx-auto flex h-dvh w-full max-w-lg flex-col overflow-hidden">
      {/* pb = hauteur de la BottomNav (fixe) + marge : le contenu ne passe jamais dessous */}
      <main className="flex-1 overflow-y-auto px-4 pb-[calc(4.5rem+env(safe-area-inset-bottom))] pt-6">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
