"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Home, Route, LibraryBig, ChartLine, Zap } from "lucide-react";

const items = [
  { href: "/dashboard", label: "Accueil", icon: Home },
  { href: "/parcours", label: "Parcours", icon: Route },
  { href: "/revision", label: "Réviser", icon: Zap, central: true },
  { href: "/rubriques", label: "Rubriques", icon: LibraryBig },
  { href: "/stats", label: "Stats", icon: ChartLine },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-lg items-end justify-between px-4">
        {items.map(({ href, label, icon: Icon, ...rest }) => {
          const active = pathname.startsWith(href);
          const central = "central" in rest && rest.central;

          if (central) {
            return (
              <Link key={href} href={href} aria-label={label} className="-mt-6 mb-1">
                <span className="tricolore block rounded-full p-[3px] shadow-lg shadow-primary/25 transition-transform active:scale-95">
                  <span className="flex size-14 items-center justify-center rounded-full bg-primary text-on-primary">
                    <Icon className="size-7" strokeWidth={2.2} />
                  </span>
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={href}
              href={href}
              className={`relative flex flex-col items-center gap-0.5 px-2 py-2 text-[11px] font-medium transition-colors ${
                active ? "text-primary" : "text-muted hover:text-foreground"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="nav-active"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute -top-px h-1 w-8 rounded-full bg-primary"
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
