export default function Loading() {
  return (
    <div className="flex h-full min-h-[60dvh] items-center justify-center">
      <div className="flex items-center gap-2" role="status" aria-label="Chargement">
        <span className="size-3 animate-bounce rounded-full bg-[#000091] [animation-delay:-0.3s] dark:bg-[#6a6af4]" />
        <span className="size-3 animate-bounce rounded-full bg-white [animation-delay:-0.15s] shadow-[0_0_0_1px_var(--border)]" />
        <span className="size-3 animate-bounce rounded-full bg-[#e1000f]" />
      </div>
    </div>
  );
}
