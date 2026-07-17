import { BottomNav } from "@/components/ui/BottomNav";

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col">
      <main className="flex-1 px-4 pb-28 pt-6">{children}</main>
      <BottomNav />
    </div>
  );
}
