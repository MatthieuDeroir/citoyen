"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Sun, ChartLine, LibraryBig } from "lucide-react";

const items = [
  { href: "/", label: "Aujourd'hui", icon: Sun, match: (p: string) => p === "/" || p.startsWith("/examen") },
  { href: "/progres", label: "Progrès", icon: ChartLine, match: (p: string) => p.startsWith("/progres") },
  { href: "/livret", label: "Livret", icon: LibraryBig, match: (p: string) => p.startsWith("/livret") },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-lg items-stretch justify-around px-3">
        {items.map(({ href, label, icon: Icon, match }) => {
          const active = match(pathname);
          return (
            <Link
              key={href}
              href={href}
              className={`relative flex flex-1 flex-col items-center justify-center gap-0.5 text-xs font-semibold transition-colors ${
                active ? "text-primary" : "text-muted hover:text-foreground"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="nav-active"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute top-0 h-1 w-10 rounded-full bg-primary"
                />
              )}
              <Icon className="size-6" strokeWidth={active ? 2.4 : 1.8} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
