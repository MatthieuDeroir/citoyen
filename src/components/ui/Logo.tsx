/** Marque de l'app : bonnet phrygien et cocarde, inspirés de Marianne (dessin original). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden>
      <rect width="512" height="512" rx="115" fill="#000091" />
      <path
        fill="#ffffff"
        d="M132 352 Q124 296 152 238 Q184 166 262 148 Q334 132 384 164 Q424 190 408 226 Q396 250 370 240 Q384 204 348 188 Q330 242 338 300 Q341 330 348 352 Z"
      />
      <rect x="106" y="346" width="268" height="42" rx="21" fill="#ffffff" />
      <circle cx="182" cy="286" r="44" fill="#e1000f" />
      <circle cx="182" cy="286" r="29" fill="#ffffff" />
      <circle cx="182" cy="286" r="14" fill="#000091" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="size-9" />
      <span className="text-xl font-black tracking-tight">
        Citoyen<span className="text-accent">.</span>
      </span>
    </span>
  );
}
